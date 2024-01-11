import { HamburgerIcon } from '@/assets/svgs';
import { AppState } from '@/lib/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Drawer() {
    const wishlist = useSelector((state: AppState) => state.product.wishlist);
    const [wishlistLength, setWishlistLength] = useState(0);
    const cart = useSelector((state: AppState) => state.product.cart);
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        let wishlistLen = wishlist.length;
        let cartLen = cart.length;
        setWishlistLength(wishlistLen);
        setCartLength(cartLen);
    }, [wishlist, cart]);

    const handleChangeDrawer = (e: any) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    
    return (
        <div className="drawer md:hidden w-fit z-50">
            <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
                onChange={handleChangeDrawer}
            />
            <div className="drawer-content">
                {/* Page content here */}
                <label
                    htmlFor="my-drawer"
                    className="btn btn-ghost drawer-button"
                >
                    <HamburgerIcon />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 h-screen bg-base-200 text-base-content overflow-hidden">
                    {/* Sidebar content here */}
                    <li>
                        <Link className="font-bold" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/#features">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/#team">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/wishlist">
                            Wishlist
                            {wishlistLength !== 0 && (
                                <span className="badge badge-error badge-sm indicator-item text-white">
                                    {wishlistLength}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/cart">
                            Cart
                            {cartLength !== 0 && (
                                <span className="badge badge-error badge-sm indicator-item text-white">
                                    {cartLength}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
