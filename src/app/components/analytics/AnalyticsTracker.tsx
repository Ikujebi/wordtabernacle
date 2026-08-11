'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { trackPageView } from '@/lib/analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  return null;
}