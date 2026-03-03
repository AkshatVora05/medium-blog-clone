export const AppbarSkeleton = ({ addBlog = true }: { addBlog?: boolean }) => {
  return (
    <div className="border-b flex justify-between px-10 py-3 shadow-lg animate-pulse">
      <div className="flex flex-col justify-center">
        <div className="h-7 w-25 bg-gray-200 rounded" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          {addBlog && (
            <div className="flex flex-col justify-center">
              <div className="rounded-full px-5 py-2.5 mr-3 h-10 w-17 bg-gray-200" />
            </div>
          )}

          <div className="h-10 w-10 rounded-full bg-gray-200" />

          <div className="ml-5 h-10 w-10 rounded-md bg-gray-200 border border-gray-200" />
        </div>
      </div>
    </div>
  );
};