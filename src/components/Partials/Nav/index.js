// import * as React from 'react';
import Badge from '@mui/material/Badge';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';
import SidebarFavorite from '../SidebarFavorite';
import SidebarCart from '../SidebarCart';

const cx = classNames.bind(styles);

function Nav({ reloadSidebar, onRemoveFav }) {
    let favoriteNumber = JSON.parse(
        localStorage.getItem('favoriteList')
    ).length;
    const [favoriteSidebar, setFavoriteSidebar] = useState(false);
    const handleFavoriteSidebar = () => {
        setFavoriteSidebar(!favoriteSidebar);
    };

    const [cartSidebar, setCartSidebar] = useState(false);
    const handleCartSidebar = () => {
        console.log(cartSidebar);
        setCartSidebar(!cartSidebar);
    };

    const [badgeFavorite, setBadgeFavorite] = useState(favoriteNumber);

    useEffect(() => {
        setBadgeFavorite(favoriteNumber);
    }, [favoriteNumber]);

    const handleRemoveFav = (id) => {
        onRemoveFav(id);
    };

    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>Furniture.</div>

            <div className={cx('btn-hamburger')}>
                <RxHamburgerMenu />
            </div>
            <ul className={cx('navbar')}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>
                    <a href="/location">Location</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className={cx('interact')}>
                <div
                    className={cx('favorite')}
                    onClick={() => handleFavoriteSidebar()}
                >
                    <Badge badgeContent={badgeFavorite} color="error">
                        <AiOutlineHeart />
                    </Badge>
                </div>
                <div className={cx('cart')}
                    onClick={() => handleCartSidebar()}
                >
                    <Badge badgeContent={0} color="error">
                        <AiOutlineShoppingCart />
                    </Badge>
                </div>
                <div className={cx('btn', 'login')}>Login</div>
            </div>
            {favoriteSidebar ? (
                <SidebarFavorite
                    onSidebar={handleFavoriteSidebar}
                    reloadSidebar={reloadSidebar}
                    onRemoveFav={handleRemoveFav}
                />
            ) : null}
            {cartSidebar ? (
                <SidebarCart onSidebar={handleCartSidebar} />
            ) : null}
        </nav>
    );
}

export default Nav;
