const WatchlistLoading = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="h-8 w-40 animate-pulse rounded-md bg-gray-700" />
        <div className="h-9 w-32 animate-pulse rounded-md bg-gray-700" />
      </div>
      <div className="rounded-lg border border-gray-600 bg-gray-800 overflow-hidden">
        {/* Header row */}
        <div className="flex gap-4 bg-gray-700 px-4 py-3">
          {[180, 80, 90, 90, 100, 80, 60].map((w, i) => (
            <div key={i} className="h-4 animate-pulse rounded bg-gray-600" style={{ width: w }} />
          ))}
        </div>
        {/* Body rows */}
        {Array.from({ length: 6 }).map((_, rowIdx) => (
          <div key={rowIdx} className="flex gap-4 border-t border-gray-700 px-4 py-4">
            {[180, 80, 90, 90, 100, 80, 60].map((w, i) => (
              <div key={i} className="h-4 animate-pulse rounded bg-gray-700" style={{ width: w }} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchlistLoading;
