const VISITOR_KEY =
  'wtbc_analytics_visitor_id';

const SESSION_KEY =
  'wtbc_analytics_session_id';

function generateId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

function getVisitorId(): string {
  let visitorId =
    localStorage.getItem(
      VISITOR_KEY,
    );

  if (!visitorId) {
    visitorId = generateId();

    localStorage.setItem(
      VISITOR_KEY,
      visitorId,
    );
  }

  return visitorId;
}

function getSessionId(): string {
  let sessionId =
    sessionStorage.getItem(
      SESSION_KEY,
    );

  if (!sessionId) {
    sessionId = generateId();

    sessionStorage.setItem(
      SESSION_KEY,
      sessionId,
    );
  }

  return sessionId;
}

export async function trackPageView(): Promise<void> {
  if (
    typeof window === 'undefined'
  ) {
    return;
  }

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/web-analytics/track`,
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({
          visitorId:
            getVisitorId(),

          sessionId:
            getSessionId(),

          event:
            'page_view',

          path:
            window.location.pathname,

          title:
            document.title,

          url:
            window.location.href,

          referrer:
            document.referrer || undefined,
        }),

        keepalive: true,
      },
    );
  } catch {
    // Analytics must never break the website.
  }
}

export async function trackEvent(
  event: string,
  data: {
    path?: string;
    title?: string;
    url?: string;
  } = {},
): Promise<void> {
  if (
    typeof window === 'undefined'
  ) {
    return;
  }

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/web-analytics/track`,
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({
          visitorId:
            getVisitorId(),

          sessionId:
            getSessionId(),

          event,

          path:
            data.path ??
            window.location.pathname,

          title:
            data.title ??
            document.title,

          url:
            data.url ??
            window.location.href,
        }),

        keepalive: true,
      },
    );
  } catch {
    // Analytics must never break the website.
  }
}