export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-4 bg-gray-700/50 rounded w-48 mb-3"></div>
        <div className="h-8 bg-gray-700/50 rounded w-96 mb-3"></div>
        <div className="h-4 bg-gray-700/50 rounded w-full max-w-2xl"></div>
      </div>

      {/* Tabs Skeleton */}
      <div className="flex gap-4 mb-8 border-b border-gray-700/50 pb-2">
        <div className="h-8 bg-gray-700/50 rounded w-24"></div>
        <div className="h-8 bg-gray-700/50 rounded w-24"></div>
        <div className="h-8 bg-gray-700/50 rounded w-32"></div>
      </div>

      {/* Content Skeleton */}
      <div className="flex gap-8 items-start">
        {/* Main Content Area */}
        <div className="flex-1">
          <div className="h-6 bg-gray-700/50 rounded w-64 mb-6"></div>

          <div className="space-y-4">
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-5/6"></div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="h-12 bg-gray-700/50 rounded w-full max-w-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
