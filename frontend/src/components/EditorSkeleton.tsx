export const EditorSkeleton = () => {
  return (
    <div>
      <div className="flex justify-end mt-4 mr-8.5">
        <div className="mr-2">
          <div className="w-10 h-10 rounded-md bg-gray-200 animate-pulse" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-14 h-7 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="w-full h-10 rounded-lg bg-gray-200 animate-pulse" />

            <div className="mt-2">
              <div className="w-full h-48 rounded-lg bg-gray-200 animate-pulse" />

              <div className="mt-3">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="w-40 h-10 rounded-lg bg-gray-200 animate-pulse" />
                    <div className="w-40 h-10 rounded-lg bg-gray-200 animate-pulse" />
                  </div>

                  <div className="w-32 h-10 rounded-lg bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};