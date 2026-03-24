'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function WatchlistError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Watchlist page error:', error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-100">Something went wrong</h2>
        <p className="max-w-md text-gray-500">
          We couldn&apos;t load your watchlist. This may be a temporary issue — please try again.
        </p>
      </div>
      <Button onClick={reset} className="yellow-btn px-8">
        Try again
      </Button>
    </section>
  );
}
