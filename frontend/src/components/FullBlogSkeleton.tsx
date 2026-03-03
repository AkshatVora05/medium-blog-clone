export const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full mt-2 max-w-7xl pt-12 animate-pulse">
        <div className="col-span-8">
          <div className="h-12 w-3/4 bg-gray-300 rounded" />

          <div className="mt-4 h-4 w-40 bg-gray-200 rounded" />

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="col-span-4">
          <div className="h-5 w-20 bg-gray-200 rounded" />

          <div className="flex pt-2">
            <div className="pr-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
            </div>

            <div className="flex-1">
              <div className="h-6 w-32 bg-gray-300 rounded" />
              <div className="mt-2 space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};