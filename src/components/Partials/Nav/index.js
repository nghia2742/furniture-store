import Badge from '@mui/material/Badge';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';
import SidebarFavorite from '../SidebarFavorite';
import SidebarCart from '../SidebarCart';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Nav({ reloadSidebar, onRemoveFav, onReloadCartSidebar }) {
    let favoriteNumber = localStorage.getItem('favoriteList')?JSON.parse(
        localStorage.getItem('favoriteList')
    ).length : 0;
    let cartNumber = localStorage.getItem('cartList')?JSON.parse(localStorage.getItem('cartList')).length : 0;
    const [favoriteSidebar, setFavoriteSidebar] = useState(false);
    const handleFavoriteSidebar = () => {
        setFavoriteSidebar(!favoriteSidebar);
    };

    const [cartSidebar, setCartSidebar] = useState(false);
    const handleCartSidebar = () => {
        setCartSidebar(!cartSidebar);
    };

    const [badgeFavorite, setBadgeFavorite] = useState(favoriteNumber);
    const [badgeCart, setBadgeCart] = useState(cartNumber);

    useEffect(() => {
        setBadgeFavorite(favoriteNumber);
    }, [favoriteNumber]);

    useEffect(() => {
        setBadgeCart(cartNumber);
    }, [cartNumber]);

    const handleRemoveFav = (id) => {
        onRemoveFav(id);
    };

    // Hide/Show MenuSidebar
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>Furniture.</div>

            <div className={cx('btn-hamburger')} >
                <RxHamburgerMenu onClick={handleMenu} />
            </div>
            <ul className={cx('navbar', menu?'menu':'')}>
                {menu?<span className={cx('closeMenu')} onClick={handleMenu}>&times;</span>:''}
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/shop">
                    <li>Shop</li>
                </Link>
                <Link href="/location">
                    <li>Location</li>
                </Link>
                <Link href="/services">
                    <li>Services</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
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
                <div className={cx('cart')} onClick={() => handleCartSidebar()}>
                    <Badge badgeContent={badgeCart} color="error">
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
                <SidebarCart
                    onSidebar={handleCartSidebar}
                    onReloadCartSidebar={onReloadCartSidebar}
                />
            ) : null}
        </nav>
    );
}

export default Nav;
