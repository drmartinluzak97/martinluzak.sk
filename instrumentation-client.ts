import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust trace sample rate in production (1.0 = 100%, 0.2 = 20%)
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,

  // Enable Session Replay only when DSN is present
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Only send errors when DSN is set
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
