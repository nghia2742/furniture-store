import Badge from '@mui/material/Badge';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';
import SidebarFavorite from '../SidebarFavorite';
import SidebarCart from '../SidebarCart';

const cx = classNames.bind(styles);

function Nav({ reloadSidebar, onRemoveFav, onReloadCartSidebar }) {
    let favoriteNumber = JSON.parse(
        localStorage.getItem('favoriteList')
    ).length;
    let cartNumber = JSON.parse(localStorage.getItem('cartList')).length;
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
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/shop">
                    <li>Shop</li>
                </a>
                <a href="/location">
                    <li>Location</li>
                </a>
                <a href="/services">
                    <li>Services</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
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
