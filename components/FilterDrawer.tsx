import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function FilterDrawer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState(searchParams.get('sort') || 'name');
  const [order, setOrder] = useState(searchParams.get('order') || 'asc');

  const applyFilters = () => {
    const queryParams = new URLSearchParams(searchParams.toString());

    // Update filters
    if (minPrice) queryParams.set('minPrice', minPrice);
    else queryParams.delete('minPrice');

    if (maxPrice) queryParams.set('maxPrice', maxPrice);
    else queryParams.delete('maxPrice');

    // Update sorting
    queryParams.set('sort', sort);
    queryParams.set('order', order);

    router.push(`/shop?${queryParams.toString()}`);
  };

  return (
    <aside className="w-[320px] hidden md:block bg-gray-100 pt-10">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-medium">Price Range</h3>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Sort Options */}
        <div className="mb-6">
          <h3 className="font-medium">Sort By</h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full mt-2"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          <div className="mt-2">
            <label className="label cursor-pointer">
              <span className="label-text">Ascending</span>
              <input
                type="radio"
                name="order"
                value="asc"
                checked={order === 'asc'}
                onChange={() => setOrder('asc')}
                className="radio"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Descending</span>
              <input
                type="radio"
                name="order"
                value="desc"
                checked={order === 'desc'}
                onChange={() => setOrder('desc')}
                className="radio"
              />
            </label>
          </div>
        </div>

        {/* Apply Button */}
        <button className="btn btn-accent w-full mt-4" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </aside>
  );
}

export default FilterDrawer;
