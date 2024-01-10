import React from 'react'
import CardSkeleton from './CardSkeleton';
import Filter from '../Filter';

const ShopSkeleton = () => {
    return (
        <div>
            <h1 className="p-5 text-2xl font-semibold">
                Total product (0)
            </h1>
            <div className="flex min-h-screen h-fit">
                <main className="w-full">
                    <Filter />

                    {/* Wrap items */}
                    <div className="pb-16 flex justify-center flex-wrap lg:justify-evenly gap-10">
                        <CardSkeleton/>
                        <CardSkeleton/>
                        <CardSkeleton/>
                    </div>
                    
                </main>
            </div>
        </div>
    );

}

export default ShopSkeleton