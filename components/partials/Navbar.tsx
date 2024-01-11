'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Drawer from '../Drawer';
import UserAction from '../UserAction';
import { CartIcon, HeartIcon } from '@/assets/svgs';
import { useSelector } from 'react-redux';
import { AppState } from '@/lib/store';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [stickNav, setStickNav] = useState('');
    const [wishlistLength, setWishlistLength] = useState(0);
    const wishlist = useSelector((state: AppState) => state.product.wishlist);
    const [cartLength, setCartLength] = useState(0);
    const cart = useSelector((state: AppState) => state.product.cart);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = currentScrollPos > 50;
            setIsVisible(isVisible);
            if (isVisible) {
                setStickNav('sticky top-0 left-0 z-40 glassmorphism');
                return;
            }
            setStickNav('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    useEffect(() => {
        let wishlistLen = wishlist.length;
        let cartLen = cart.length;
        setWishlistLength(wishlistLen);
        setCartLength(cartLen);
    }, [wishlist, cart]);

    return (
        <div className={`${stickNav} navbar bg-base-100 border-b`}>
            <Drawer />
            <div className="flex-1">
                <Link className="py-2 px-4 text-2xl justify-center" href='/'>
                    Furniano
                </Link>
            </div>
            <div className="flex-none">
                <div className="hidden md:flex">
                    <ul className="flex gap-10 justify-center items-center mr-10">
                        <Link
                            className="font-semibold hover:-translate-y-1 ease-linear transition p-3"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="font-semibold hover:-translate-y-1 ease-linear transition p-3"
                            href="/shop"
                        >
                            Shop
                        </Link>
                        <Link
                            className="font-semibold hover:-translate-y-1 ease-linear transition p-3"
                            href="/#features"
                        >
                            Features
                        </Link>
                        <Link
                            className="font-semibold hover:-translate-y-1 ease-linear transition p-3"
                            href="/#team"
                        >
                            Team
                        </Link>
                    </ul>
                    {/* Favorite */}
                    <Link
                        href={'/wishlist'}
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <span className="indicator">
                            <HeartIcon />
                            {wishlistLength !== 0 && (
                                <span className="badge badge-error badge-sm indicator-item text-white">
                                    {wishlistLength}
                                </span>
                            )}
                        </span>
                    </Link>

                    {/* Cart */}
                    <Link
                        href={'/cart'}
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <div className="indicator">
                            <CartIcon />
                            {cartLength !== 0 && (
                                <span className="badge badge-error badge-sm indicator-item text-white">
                                    {cartLength}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>

                {/* User Action */}
                <UserAction />
            </div>
        </div>
    );
};

export default Navbar;
