const StockLoading = () => {
  return (
    <div className="flex min-h-screen p-4 md:p-6 lg:p-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div className="h-[170px] w-full animate-pulse rounded-lg bg-gray-800" />
          <div className="h-[600px] w-full animate-pulse rounded-lg bg-gray-800" />
          <div className="h-[600px] w-full animate-pulse rounded-lg bg-gray-800" />
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-800" />
          <div className="h-[400px] w-full animate-pulse rounded-lg bg-gray-800" />
          <div className="h-[440px] w-full animate-pulse rounded-lg bg-gray-800" />
          <div className="h-[464px] w-full animate-pulse rounded-lg bg-gray-800" />
        </div>
      </section>
    </div>
  );
};

export default StockLoading;
