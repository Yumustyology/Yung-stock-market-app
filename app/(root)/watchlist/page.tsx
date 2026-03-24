import { Star } from 'lucide-react';
import { searchStocks } from '@/lib/actions/finnhub.actions';
import SearchCommand from '@/components/SearchCommand';
import { getWatchlistWithData } from '@/lib/actions/watchlist.actions';
import { WatchlistTable } from '@/components/WatchlistTable';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watchlist | Signalist',
  description: 'Track and manage your personal stock watchlist.',
};

const Watchlist = async () => {
  const watchlist = await getWatchlistWithData();
  const initialStocks = await searchStocks();

  // Empty state
  if (watchlist.length === 0) {
    return (
      <section className="flex watchlist-empty-container">
        <div className="watchlist-empty watchlist-empty-card">
          <div className="watchlist-star-shell">
            <Star className="watchlist-star" />
          </div>
          <h2 className="empty-title">Your watchlist is empty</h2>
          <p className="empty-kicker">Start tracking your favorite companies</p>
          <p className="empty-description">
            Start building your watchlist by searching for stocks and clicking the star icon to add them.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <SearchCommand initialStocks={initialStocks} label="Find stocks" />
        </div>
      </section>
    );
  }

  return (
    <section className="watchlist">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="watchlist-title">Watchlist</h2>
          <SearchCommand initialStocks={initialStocks} />
        </div>
        <WatchlistTable watchlist={watchlist} />
      </div>
    </section>
  );
};

export default Watchlist;