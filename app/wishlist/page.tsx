'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getProductByIds } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { ProductProp } from '../types';
import { removeWishlist, setCart } from '@/lib/features/productSlice';
import ToTop from '@/components/partials/ToTop';
import MyToast from '@/components/MyToast';
import TableSkeleton from '@/components/loading/TableSkeleton';
import { setToast } from '@/lib/features/appSlice';
import { AppState } from '@/lib/store';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state: AppState) => state.product.wishlist);
    const [products, setProducts] = useState<ProductProp[] | []>([]);
    const isToast = useSelector((state: AppState) => state.app.toast);
    const [loading, setLoading] = useState(true);
    const cart = useSelector((state: AppState) => state.product.cart);

    useEffect(() => {
        async function fetchData() {
            const response = await getProductByIds(wishlist);
            setProducts(response);
            if (response) {
                setLoading(false);
            }
        }
        fetchData();
    }, [wishlist]);

    if (loading) {
        return <TableSkeleton />;
    }

    const handleRemoveFromWishlist = (id: string) => {
        dispatch(removeWishlist(id));
        dispatch(
            setToast({
                status: true,
                type: 'success',
                message: '🎉 Removed from your wishlist',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
        return;
    };

    const handleAddToCart = (id: string) => {
        if (!cart.find((e) => e.id === id)) {
            dispatch(setCart({ id: id, quantity: 1 }));
            dispatch(
                setToast({
                    status: true,
                    type: 'success',
                    message: '🎉 Added to your cart',
                })
            );
            setTimeout(() => {
                dispatch(setToast({ status: false }));
            }, 2000);
            return;
        }

        dispatch(
            setToast({
                status: true,
                type: 'error',
                message: '❌ This product is already in your cart.',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
    };
    return (
        <section className="p-2 md:p-8 h-fit min-h-screen">
            <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                Your wishlist
            </h1>
            <div className="overflow-x-auto px-10 ">
                {products.length === 0 ? (
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <div className="text-xl text-center">
                            Your wishlist is empty.
                        </div>
                    </div>
                ) : (
                    <table className="table table-lg w-[80%] mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name Product</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {products.map((product, index) => {
                                return (
                                    <tr key={index} className="h-20">
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                className="w-16 h-auto"
                                                src={product.image}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                alt="Image"
                                            />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <button
                                                    className="btn btn-success btn-sm text-white"
                                                    onClick={() =>
                                                        handleAddToCart(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    Add to Cart
                                                </button>
                                                <button
                                                    className="btn btn-error btn-sm text-white"
                                                    onClick={() =>
                                                        handleRemoveFromWishlist(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
            <ToTop />
            {/* TOAST SECTION */}
            {isToast.status && <MyToast />}
        </section>
    );
};

export default Wishlist;
