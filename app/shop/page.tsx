'use client';
import Filter from '@/components/Filter';
import FilterDrawer from '@/components/FilterDrawer';
import Card from '@/components/shop/Card';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProductByFilter } from '@/app/actions';
import CardSkeleton from '@/components/loading/CardSkeleton';
import { ProductProp } from '../types';
import { useSelector } from 'react-redux';
import MyToast from '@/components/MyToast';
import ToTop from '@/components/partials/ToTop';
import { AppState } from '@/lib/store';
import ShopSkeleton from '@/components/loading/ShopSkeleton';
import Link from 'next/link';

function Shop() {
    const searchParams = useSearchParams();
    const isToast = useSelector((state: AppState) => state.app.toast);
    const [products, setProducts] = useState([]);
    const [lengthProducts, setLengthProducts] = useState(0);
    const [loading, setLoading] = useState(true);
    var page = searchParams.get('page') ?? '1';
    var search = searchParams.get('search');
    var sort = searchParams.get('sort');
    var order = searchParams.get('order');

    var queryArrayTemp = [
        { key: 'search', value: search },
        { key: 'page', value: page },
        { key: 'sort', value: sort },
        { key: 'order', value: order },
    ].filter((e) => e.value !== null);

    var queryString = queryArrayTemp
        .map((e) => `${e.key}=${e.value}`)
        .join('&');

    useEffect(() => {
        async function fetchData() {
            const response = await getProductByFilter(queryString);
            setProducts(response.data);
            setLengthProducts(response.length);
            setLoading(false);
        }
        fetchData();
    }, [queryString]);

    const handlePagination = () => {
        const perItems = 6;
        const tempNumberOfPages = Math.floor(lengthProducts / perItems);
        const remainItems = lengthProducts % perItems > 0 ? 1 : 0;
        const numberOfPages = tempNumberOfPages + remainItems;
        return numberOfPages;
    };

    const pagination = [];
    for (let i = 1; i <= handlePagination(); i++) {
        let queryArrayTemp = [
            { key: 'search', value: search },
            { key: 'page', value: i },
            { key: 'sort', value: sort },
            { key: 'order', value: order },
        ].filter((e) => e.value !== null);

        let queryString = queryArrayTemp
            .map((e) => `${e.key}=${e.value}`)
            .join('&');
        pagination.push(
            <Link
                key={i}
                href={`/shop?${queryString}`}
                className={`${Number(page) === i ? 'pointer-events-none' : ''}`}
            >
                <button
                    className={`join-item btn ${
                        Number(page) === i ? 'btn-active' : ''
                    }`}
                >
                    {i}
                </button>
            </Link>
        );
    }

    if (loading) {
        return <ShopSkeleton />;
    }

    return (
        <div>
            <h1 className="p-5 text-2xl font-semibold">
                Total product ({lengthProducts})
            </h1>
            <div className="flex min-h-screen h-fit">
                <FilterDrawer />
                <main className="w-full">
                    <Filter />

                    {/* Wrap items */}
                    <div className="pb-16 flex justify-center flex-wrap lg:justify-evenly gap-16">
                        {lengthProducts !== 0 ? (
                            products.map(
                                (product: ProductProp, index: number) => {
                                    return (
                                        <Card key={index} product={product} />
                                    );
                                }
                            )
                        ) : (
                            <div>
                                <div className="text-xl md:text-3xl font-medium inline">
                                    Product not found. 🥺
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="my-10 flex justify-center">
                        <div className="join">
                            {/* <Link href={'/shop?page=1'}>
                                <button className="join-item btn">1</button>
                            </Link> */}
                            {pagination}
                            {/* <button className="join-item btn btn-disabled">
                                ...
                            </button> */}
                        </div>
                    </div>
                </main>
            </div>
            {/* To top */}
            <ToTop />
            {/* TOAST SECTION */}
            {isToast.status && <MyToast />}
        </div>
    );
}

export default Shop;
