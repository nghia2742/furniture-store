'use client';

import { DownCaretIcon, FilterIcon, SearchIcon, SortIcon } from '@/assets/svgs';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

function Filter() {
    const [search, setSearch] = useState("")
    const searchParams = useSearchParams();
    const router = useRouter();
    var page = '1';
    var searchQuery = searchParams.get('search');

    var queryArrayTemp = [
        { key: 'search', value: searchQuery },
        { key: 'page', value: page },
    ].filter((e) => e.value !== null);

    var queryString = queryArrayTemp
        .map((e) => `${e.key}=${e.value}`)
        .join('&');

    const handleOnChangeSearch = (e: any ) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: any) => {
        if (e.key === "Enter" && search !== "") {
            router.push(`/shop?search=${search}`)
        }
    }
    
    return (
        <div className="p-5 block sm:flex justify-between">
            <div className="min-w-64 md:w-1/4 flex justify-between md:justify-start md:items-center">
                <div className="flex items-center gap-2">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon />
                        </div>
                        <input
                            onChange={handleOnChangeSearch}
                            onKeyDown={handleSubmit}
                            type="text"
                            id="simple-search"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 input input-bordered input-sm max-w-xs focus:outline-blue-400"
                            placeholder="Search"
                            value={search}
                            required
                        />
                    </div>
                    <Link href={"/shop"} className="btn btn-sm btn-error text-white">Clear</Link>
                </div>
            </div>
            <div className='flex gap-2 justify-end mt-4'>
                <div >
                    <button className="flex items-center justify-center h-full w-full gap-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                        <FilterIcon />
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <button
                        className="flex items-center justify-center w-full gap-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        tabIndex={0}
                        role="button"
                    >
                        <SortIcon />
                        Sort
                        <DownCaretIcon />
                    </button>
                    <ul className="mt-2 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <Link href={`/shop?${queryString}&sort=id&order=-1`}>Newest</Link>
                        </li>
                        <li>
                            <Link href={`/shop?${queryString}&sort=id`}>Oldest</Link>
                        </li>
                        <li>
                            <Link href={`/shop?${queryString}&sort=price`}>Lowest prices</Link>
                        </li>
                        <li>
                            <Link href={`/shop?${queryString}&sort=price&order=-1`}>Highest prices</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filter;
