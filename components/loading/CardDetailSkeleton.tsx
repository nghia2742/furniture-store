'use client';
import Image from 'next/image';
import React from 'react';

function CardDetailSkeleton() {
    return (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="skeleton min-h-64 h-auto w-full mb-10 md:mb-0 mx-5 md:mx-0 px-8 md:px-4 md:w-1/2 ">
                        <div className="overflow-hidden ">
                            <div className="mb-6 lg:mb-10 lg:h-2/4 ">
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mx-4 md:mx-0">
                        <div className="lg:pl-20">
                            <div className="mb-8 ">
                                <div className="skeleton h-4 w-16 text-lg font-medium text-rose-500 dark:text-rose-200">
                                    
                                </div>
                                <h2 className="skeleton h-4 w-28 max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                </h2>
                                <div className="flex items-center mb-6">
                                    <div className='skeleton h-4 w-1/2'></div>
                                    
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className='skeleton h-4 w-full'></div>
                                    <div className='skeleton h-4 w-full'></div>
                                    <div className='skeleton h-4 w-full'></div>
                                    <div className='skeleton h-4 w-full'></div>
                                    <div className='skeleton h-4 w-1/2'></div>
                                </div>
                                <div className="flex gap-5 my-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <div className='skeleton h-8 w-48'></div>
                                    
                                </div>
                                <div className='skeleton h-8 w-20'></div>
                            </div>

                            <div className="w-32 mb-8 ">
                                <div className='skeleton h-8 w-full'></div>
                                
                                <div className="skeleton relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                    <div className='skeleton w-full h-14 lg:pr-5'></div>
                                </div>
                                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                    <div className='skeleton w-full h-14 lg:pl-5'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardDetailSkeleton;
