export const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="w-full max-w-[90vw] pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="order-1 lg:order-2 lg:col-span-4">
            <div className="bg-slate-100 p-6 rounded-2xl shadow-sm">              
              <div className="h-5 w-40 bg-slate-200 rounded mb-6"></div>
              <div className="flex items-center gap-4">                
                <div className="w-12 h-12 rounded-full bg-slate-300"></div>
                <div className="flex-1">
                  <div className="h-4 w-32 bg-slate-300 rounded mb-2"></div>
                  <div className="h-3 w-full bg-slate-200 rounded"></div>
                  <div className="h-3 w-3/4 bg-slate-200 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-1 lg:col-span-8">
            <div className="h-10 sm:h-12 lg:h-14 w-3/4 bg-slate-300 rounded"></div>
            <div className="h-4 w-32 bg-slate-200 rounded mt-4"></div>
            <div className="mt-6 space-y-4">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}