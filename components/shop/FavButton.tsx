'use client';
import { HeartIcon } from '@/assets/svgs';
import { setToast } from '@/lib/features/appSlice';
import { setWishlist } from '@/lib/features/productSlice';
import { AppState } from '@/lib/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavButton = ({ id }: { id: string }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(
        (state: AppState) => state.product.wishlist
    );

    const handleAddToWishlist = () => {
        if (!wishlist.includes(id)) {
            dispatch(setWishlist(id));
            dispatch(
                setToast({
                    status: true,
                    type: 'success',
                    message: '🎉 Added to your wishlist',
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
                message: '❌ This product is already in your wishlist.',
            })
        );
        setTimeout(() => {
            dispatch(setToast({ status: false }));
        }, 2000);
    };

    return (
        <>
            <button
                id={id}
                className="btn btn-ghost"
                onClick={handleAddToWishlist}
            >
                <HeartIcon />
            </button>
        </>
    );
};

export default FavButton;
