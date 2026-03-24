import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 text-center p-8">
      <div className="flex flex-col items-center gap-3">
        <span className="text-7xl font-bold text-yellow-400">404</span>
        <h1 className="text-3xl font-bold text-gray-100">Page not found</h1>
        <p className="max-w-md text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist, or the stock symbol is invalid.
        </p>
      </div>
      <Button asChild className="yellow-btn px-8">
        <Link href="/">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
