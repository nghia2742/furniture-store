import React from 'react';
import CardSkeleton from './CardSkeleton';
import Filter from '../Filter';

const ShopSkeleton = () => {
  const skeletonCount = 6; // Number of skeleton cards to display

  return (
    <div className="animate-pulse">
      <div className="flex min-h-screen h-fit">
        {/* Sidebar Placeholder */}
        <aside className="hidden md:block w-[320px] bg-gray-100 p-5 pt-20">
          <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </aside>

        {/* Main Content */}
        <main className="w-full">
          {/* Filter Placeholder */}
          <div className="bg-gray-100 mb-0">
            <Filter productLength={0} isLoading={true}/>
          </div>

          {/* Skeleton Cards */}
          <div className="pb-16 flex justify-center flex-wrap lg:justify-evenly gap-10">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopSkeleton;
