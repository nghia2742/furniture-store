'use client';
import { CartIcon } from '@/assets/svgs';
import { setToast } from '@/lib/features/appSlice';
import { setCart } from '@/lib/features/productSlice';
import { AppState } from '@/lib/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = ({ id }: { id: string }) => {
    const dispatch = useDispatch();
    const cart = useSelector(
        (state: AppState) => state.product.cart
    );
    const handleAddToCart = () => {
        if (!cart.find((e) => e.id === id)) {
            dispatch(setCart({ id: id, quantity: 1 }));
        };
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
    };

    return (
        <>
            <button id={id} className="btn btn-ghost" onClick={handleAddToCart}>
                <CartIcon />
            </button>
        </>
    );
};

export default CartButton;
