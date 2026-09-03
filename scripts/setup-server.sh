#!/usr/bin/env bash
# ==============================================================================
# TRINETRA — AWS Lightsail Server Initial Provisioner
# Configures Docker, Nginx, Let's Encrypt SSL, and deploys Trinetra
# Run as: sudo bash scripts/setup-server.sh
# ==============================================================================

set -euo pipefail

DOMAIN="trinetra.sayalabs.in"
INSTALL_DIR="/var/www/trinetra"
REPO_URL="https://github.com/anurag3407/Trinetra.git"

echo "=================================================================="
echo "TRINETRA LIGHTSAIL BOOTSTRAP FOR: ${DOMAIN}"
echo "=================================================================="

# Check root privileges
if [ "$(id -u)" -ne 0 ]; then
  echo "!! Please run this script with sudo: sudo bash $0" >&2
  exit 1
fi

# 1. Update and install base dependencies
echo "==> [1/6] Updating packages & installing Nginx, Certbot, Git, Curl..."
apt-get update -y
apt-get install -y ca-certificates curl gnupg lsb-release git nginx certbot python3-certbot-nginx

# 2. Check and install Docker if missing
if ! command -v docker >/dev/null 2>&1; then
  echo "==> [2/6] Installing Docker Engine & Docker Compose Plugin..."
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg --yes
  chmod a+r /etc/apt/keyrings/docker.gpg

  echo \
    "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
    tee /etc/apt/sources.list.d/docker.list > /dev/null

  apt-get update -y
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  
  systemctl enable docker
  systemctl start docker
  
  # Add ubuntu user to docker group
  usermod -aG docker ubuntu || true
else
  echo "==> [2/6] Docker already installed: $(docker --version)"
fi

# 3. Create webroot and clone repository
echo "==> [3/6] Setting up project directory at ${INSTALL_DIR}..."
mkdir -p /var/www/certbot
mkdir -p "$(dirname "${INSTALL_DIR}")"

if [ -d "${INSTALL_DIR}/.git" ]; then
  echo "    Repository already exists at ${INSTALL_DIR}, pulling latest..."
  cd "${INSTALL_DIR}"
  git fetch origin main
  git reset --hard origin/main
else
  echo "    Cloning repository from ${REPO_URL}..."
  git clone "${REPO_URL}" "${INSTALL_DIR}"
  cd "${INSTALL_DIR}"
fi

# Ensure correct permissions for ubuntu user
chown -R ubuntu:ubuntu "${INSTALL_DIR}"

# 4. Bootstrap Nginx Configuration (Initial HTTP for ACME)
echo "==> [4/6] Setting up Nginx site configuration for ${DOMAIN}..."
mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled

if [ ! -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]; then
  echo "    First-time setup: deploying initial HTTP configuration..."
  cp "${INSTALL_DIR}/nginx/trinetra-initial.conf" "/etc/nginx/sites-available/${DOMAIN}"
  ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
  
  nginx -t
  systemctl reload nginx

  echo "==> [5/6] Requesting Let's Encrypt SSL certificate for ${DOMAIN}..."
  certbot certonly --webroot -w /var/www/certbot -d "${DOMAIN}" --non-interactive --agree-tos --register-unsafely-without-email || \
  certbot certonly --standalone -d "${DOMAIN}" --non-interactive --agree-tos --register-unsafely-without-email || true
fi

# Apply full production SSL Nginx configuration if cert exists
if [ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]; then
  echo "    Applying production HTTPS Nginx configuration..."
  cp "${INSTALL_DIR}/nginx/trinetra.sayalabs.in.conf" "/etc/nginx/sites-available/${DOMAIN}"
  ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
  
  nginx -t
  systemctl reload nginx
  echo "    HTTPS Nginx configuration active!"
else
  echo "!! Notice: Let's Encrypt certificate not yet generated. Nginx running on HTTP for now."
fi

# 5. Run Initial Production Deployment
echo "==> [6/6] Launching Trinetra container via deploy.sh..."
chmod +x "${INSTALL_DIR}/scripts/deploy.sh"
sudo -u ubuntu bash -c "cd ${INSTALL_DIR} && ./scripts/deploy.sh"

echo "=================================================================="
echo "🎉 SERVER PROVISIONING COMPLETE!"
echo "TRINETRA is now live at: https://${DOMAIN}"
echo "=================================================================="
EOF && chmod +x /Users/jarvis/Trinetra/scripts/setup-server.sh