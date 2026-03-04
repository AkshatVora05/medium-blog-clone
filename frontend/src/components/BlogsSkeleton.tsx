export const BlogsSkeleton = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-screen max-w-[80vw]">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-4 border-b border-slate-300 animate-pulse"
          >
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              <div className="ml-2 h-4 w-28 bg-gray-200 rounded" />
              <div className="ml-1 h-4 w-3 bg-gray-200 rounded" />
              <div className="ml-1 h-4 w-20 bg-gray-200 rounded" />
            </div>

            <div className="mt-2 h-6 w-3/4 bg-gray-300 rounded" />

            <div className="mt-2 h-4 w-full bg-gray-200 rounded" />
            <div className="mt-1 h-4 w-5/6 bg-gray-200 rounded" />

            <div className="mt-4 mb-4 h-3 w-16 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};