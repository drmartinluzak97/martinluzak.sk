import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,

  // Server performance monitoring sample rate
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,

  // Only enable when DSN is provided
  enabled: !!(process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN),
});
