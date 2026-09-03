#!/usr/bin/env bash
# ==============================================================================
# TRINETRA — Production Deployment Script
# Zero-downtime container rollout & Nginx reload for AWS Lightsail
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${APP_DIR}"

APP_PORT="${APP_PORT:-3010}"
HEALTH_URL="http://127.0.0.1:${APP_PORT}/api/health"
MAX_WAIT_SECONDS=60
DOMAIN="trinetra.sayalabs.in"

echo "==> [1/6] Starting Trinetra deployment at $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "    Directory: ${APP_DIR}"

# Determine Docker Compose command
if docker info >/dev/null 2>&1; then
  DC="docker compose"
elif sudo -n docker info >/dev/null 2>&1 || sudo docker info >/dev/null 2>&1; then
  DC="sudo docker compose"
else
  DC="docker compose"
fi

# 1. Pull latest code if running from git checkout
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")"
  echo "==> [2/6] Updating git branch: ${CURRENT_BRANCH}..."
  git fetch origin "${CURRENT_BRANCH}" || true
  git reset --hard "origin/${CURRENT_BRANCH}" || true
  echo "    Current commit: $(git rev-parse --short HEAD)"
else
  echo "==> [2/6] Not a git repository or skipping git sync."
fi

# 2. Ensure environment configuration exists
if [ ! -f ".env" ]; then
  if [ -f ".env.production" ]; then
    echo "    Using .env.production as .env"
    cp .env.production .env
  elif [ -f ".env.example" ]; then
    echo "    Notice: Creating default .env from .env.example"
    cp .env.example .env
  else
    touch .env
  fi
fi

# 3. Build Docker container image
echo "==> [3/6] Building production Docker image (Next.js standalone)..."
$DC build --pull trinetra-web

# 4. Restart container
echo "==> [4/6] Starting container on 127.0.0.1:${APP_PORT}..."
$DC up -d --remove-orphans trinetra-web

# 5. Readiness health check
echo "==> [5/6] Probing application health at ${HEALTH_URL}..."
START_TIME=$(date +%s)
HEALTHY=0

while true; do
  ELAPSED=$(( $(date +%s) - START_TIME ))
  
  if curl -fsS -m 3 "${HEALTH_URL}" >/dev/null 2>&1; then
    echo "    Container responded successfully in ${ELAPSED}s!"
    HEALTHY=1
    break
  fi

  if [ "${ELAPSED}" -ge "${MAX_WAIT_SECONDS}" ]; then
    echo "!! ERROR: Container failed health probe within ${MAX_WAIT_SECONDS}s!" >&2
    echo "!! Inspecting container logs:" >&2
    $DC logs --tail=50 trinetra-web >&2
    exit 1
  fi

  sleep 2
done

# 6. Validate & Reload Nginx if present on host
echo "==> [6/6] Verifying and reloading Nginx..."
if [ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ] && [ -f "nginx/${DOMAIN}.conf" ]; then
  echo "    Syncing latest Nginx SSL configuration for ${DOMAIN}..."
  sudo cp "nginx/${DOMAIN}.conf" "/etc/nginx/sites-available/${DOMAIN}"
  sudo ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
fi

if command -v nginx >/dev/null 2>&1; then
  if sudo nginx -t; then
    sudo systemctl reload nginx 2>/dev/null || sudo nginx -s reload
    echo "    Nginx reloaded successfully (Zero-Downtime Cutover)!"
  else
    echo "!! WARNING: Nginx configuration test failed. Keeping existing Nginx worker processes." >&2
  fi
else
  echo "    Nginx not installed directly in PATH; skipped local reload."
fi

# Cleanup dangling images
echo "==> Cleaning up dangling Docker images..."
if docker info >/dev/null 2>&1; then
  docker image prune -f >/dev/null 2>&1 || true
else
  sudo docker image prune -f >/dev/null 2>&1 || true
fi

echo "=================================================================="
echo "TRINETRA DEPLOYMENT COMPLETE at $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo "Public Endpoint: https://${DOMAIN}"
echo "Internal Port:   http://127.0.0.1:${APP_PORT}"
echo "=================================================================="
EOF && chmod +x /Users/jarvis/Trinetra/scripts/deploy.sh