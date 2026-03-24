'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StockError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Stock detail page error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center p-8">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-100">Failed to load stock data</h2>
        <p className="max-w-md text-gray-500">
          We couldn&apos;t fetch this stock&apos;s details. The market data service may be temporarily
          unavailable.
        </p>
      </div>
      <div className="flex gap-3">
        <Button onClick={reset} className="yellow-btn px-6">
          Try again
        </Button>
        <Button asChild variant="outline" className="h-12 border-gray-600 text-gray-400 hover:text-gray-100">
          <Link href="/">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
