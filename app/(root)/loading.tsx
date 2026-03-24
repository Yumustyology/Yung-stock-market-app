const Loading = () => {
  return (
    <div className="min-h-[70vh] space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div className="h-8 w-44 animate-pulse rounded-md bg-gray-700" />
        <div className="h-9 w-40 animate-pulse rounded-md bg-gray-700" />
      </div>

      <section className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="md:col-span-1 xl:col-span-1">
          <div className="h-[600px] w-full animate-pulse rounded-lg border border-gray-700 bg-gray-800/80" />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <div className="h-[600px] w-full animate-pulse rounded-lg border border-gray-700 bg-gray-800/80" />
        </div>
      </section>

      <section className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <div className="h-[600px] w-full animate-pulse rounded-lg border border-gray-700 bg-gray-800/80" />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <div className="h-[600px] w-full animate-pulse rounded-lg border border-gray-700 bg-gray-800/80" />
        </div>
      </section>
    </div>
  );
};

export default Loading;
