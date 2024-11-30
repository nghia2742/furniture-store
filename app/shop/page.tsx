'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Filter from '@/components/Filter';
import FilterDrawer from '@/components/FilterDrawer';
import Card from '@/components/shop/Card';
import CardSkeleton from '@/components/loading/CardSkeleton';
import ShopSkeleton from '@/components/loading/ShopSkeleton';
import ToTop from '@/components/partials/ToTop';
import MyToast from '@/components/MyToast';
import jsonData from '@/assets/data/furniture.products.json';
import { AppState } from '@/lib/store';
import { ProductProp } from '../types';

function Shop() {
    const searchParams = useSearchParams();
    const isToast = useSelector((state: AppState) => state.app.toast);

    const [products, setProducts] = useState<ProductProp[]>([]);
    const [loading, setLoading] = useState(true);

    const page = parseInt(searchParams.get('page') ?? '1');
    const search = searchParams.get('search') || '';
    const perPage = 6;

    useEffect(() => {
        // Simulate fetching and mapping the data
        const mappingProducts = jsonData.map((prd) => ({
            id: prd.id as string,
            name: prd.name,
            price: prd.price,
            image: prd.image,
        }));

        setProducts(mappingProducts);
        setLoading(false);
    }, []);

    const filteredProducts = useMemo(() => {
        let result = products;

        // Apply price range filter
        const minPrice = Number(searchParams.get('minPrice')) || 0;
        const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;

        result = result.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );

        // Apply search filter
        const search = searchParams.get('search') || '';
        result = result.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );

        // Apply sorting
        const sort = searchParams.get('sort') || 'name';
        const order = searchParams.get('order') || 'asc';

        result = result.sort((a, b) => {
            if (sort === 'price') {
                return order === 'asc' ? a.price - b.price : b.price - a.price;
            }
            return order === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });

        return result;
    }, [products, searchParams]);

    // Paginate products
    const paginatedProducts = useMemo(() => {
        const start = (page - 1) * perPage;
        return filteredProducts.slice(start, start + perPage);
    }, [filteredProducts, page]);

    // Generate pagination links
    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const pagination = useMemo(() => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (num) => {
                const queryString = new URLSearchParams({
                    page: String(num),
                    search,
                }).toString();
                return (
                    <Link key={num} href={`/shop?${queryString}`}>
                        <button
                            className={`join-item btn ${
                                num === page ? 'btn-active' : ''
                            }`}
                            disabled={num === page}
                        >
                            {num}
                        </button>
                    </Link>
                );
            }
        );
    }, [totalPages, page, search]);

    if (loading) {
        return <ShopSkeleton />;
    }

    return (
        <>
            <div className="flex min-h-screen h-fit">
                <FilterDrawer />
                <main className="w-full">
                    <Filter productLength={filteredProducts.length}/>
                    
                    <div className="pb-16 flex justify-center flex-wrap lg:justify-evenly gap-16">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <Card key={product.id} product={product} />
                            ))
                        ) : (
                            <div className="text-xl md:text-3xl font-medium">
                                Product not found. 🥺
                            </div>
                        )}
                    </div>
                    <div className="my-10 flex justify-center">
                        <div className="join">{pagination}</div>
                    </div>
                </main>
            </div>
            <ToTop />
            {isToast.status && <MyToast />}
        </>
    );
}

export default Shop;
