'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import { ProductProp } from '../types';
import { getProductByIds } from '../actions';
import TableCartSkeleton from '@/components/loading/TableCartSkeleton';
import { removeCart, setCart } from '@/lib/features/productSlice';
import { setToast } from '@/lib/features/appSlice';
import ToTop from '@/components/partials/ToTop';
import MyToast from '@/components/MyToast';
import Link from 'next/link';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: AppState) => state.product.cart);
    const [products, setProducts] = useState<ProductProp[] | []>([]);
    const isToast = useSelector((state: AppState) => state.app.toast);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const prodIds = cart.map((product) => product.id);
            const response = await getProductByIds(prodIds);
            setProducts(response);
            if (response) {
                setLoading(false);
            }
        }
        fetchData();
    }, [cart]);

    const getQuantityById = (id: string) => {
        let product = cart.find((e) => e.id === id);
        if (product === undefined) return 0;
        if (product.quantity < 1) return 1;
        return product.quantity;
    };

    if (loading) {
        return <TableCartSkeleton />;
    }

    const handleTotalPrice: any = () => {
        const subtotals = cart.map((prod: { id: string; quantity: number }) => {
            const product = products.find((e) => prod.id === e._id);
            const quantity = getQuantityById(prod.id);
            const price = product?.price || 0; // Use 0 as default price if not found
            const subtotal = quantity * price;
            return subtotal;
        });
    
        const totalPrice = subtotals.reduce((acc, currentValue) => acc + currentValue, 0);
        return totalPrice.toFixed(2);
    };

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeCart(id));
        dispatch(
            setToast({
                status: true,
                type: 'success',
                message: '🎉 Removed from your cart',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
        return;
    };

    const handleChangeQuantity = (e: any) => {
        const newQuantity =
            parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
        const productId = e.target.id;
        dispatch(setCart({ id: productId, quantity: newQuantity }));
    };

    return (
        <section className="p-2 md:p-8 h-fit min-h-screen">
            <h1 className="text-xl md:text-4xl py-4 text-center mb-10 divider divider-warning">
                Your cart
            </h1>
            <div className="overflow-x-auto md:px-10 ">
                {products.length === 0 ? (
                    <div className="min-h-[60vh] flex items-center justify-center">
                        <div className="text-xl text-center">
                            Your cart is empty.
                        </div>
                    </div>
                ) : (
                    <table className="table table-lg mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                                alt={product.name}
                                            />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>
                                            <input
                                                className="max-w-12 text-center"
                                                id={product._id}
                                                type="number"
                                                name="quantity"
                                                value={getQuantityById(
                                                    product._id
                                                )}
                                                min={1}
                                                onChange={handleChangeQuantity}
                                            />
                                        </td>
                                        <td>{product.price}</td>
                                        <td>
                                            {(
                                                getQuantityById(product._id) *
                                                product.price
                                            ).toFixed(2)}
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-error btn-sm text-white"
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        product._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="flex items-center justify-end p-10 gap-4">
                <h2 className="text-2xl">Total price: </h2>
                <span className="text-3xl font-bold text-red-500">${handleTotalPrice()}</span>
                <Link
                    href={'/checkout'}
                    className="btn px-16 bg-orange-500 text-white text-xl"
                    disabled={products.length === 0?true:false}
                >
                    Checkout
                </Link>
            </div>
            <ToTop />
            {/* TOAST SECTION */}
            {isToast.status && <MyToast />}
        </section>
    );
};

export default Cart;
