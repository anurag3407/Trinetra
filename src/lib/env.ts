export const isLocalMode = (): boolean => {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_APP_ENV) {
    return process.env.NEXT_PUBLIC_APP_ENV === "local";
  }
  return true; // Default to local for zero-config safety
};

export const getAiConfig = () => {
  return {
    baseUrl: process.env.AI_PROVIDER_BASE_URL || "https://api.openai.com/v1",
    apiKey: process.env.AI_PROVIDER_API_KEY || "",
    model: process.env.AI_PROVIDER_MODEL || "gpt-4o-mini",
    hasKey: Boolean(process.env.AI_PROVIDER_API_KEY && process.env.AI_PROVIDER_API_KEY.trim().length > 0),
  };
};

export const getClerkConfig = () => {
  return {
    isConfigured: Boolean(
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
      process.env.CLERK_SECRET_KEY
    ),
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "",
  };
};

export const getSupabaseConfig = () => {
  return {
    isConfigured: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ),
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  };
};
