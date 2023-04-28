import * as React from 'react';
import Badge from '@mui/material/Badge';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import {RxHamburgerMenu} from 'react-icons/rx';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles)

function Nav() {
    return <nav className={cx('wrapper')}>
    <div className={cx('logo')}>
        Furniture.
    </div>

    <div className={cx('btn-hamburger')}>
        <RxHamburgerMenu/>
    </div>
    <ul className={cx('navbar')}>
        <li><a href='/'>Home</a></li>
        <li><a href='/shop'>Shop</a></li>
        <li><a href='#'>Events</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
    </ul>
     <div className={cx('interact')}>
        <div className={cx('favorite')}>
        <Badge badgeContent={0} color="error">
            <AiOutlineHeart/>
        </Badge>
        </div>
        <div className={cx('cart')}>
        <Badge badgeContent={0} color="error">
            <AiOutlineShoppingCart/>
        </Badge>
        </div>
        <div className={cx('btn', 'login')}>
            Login
        </div>
    </div>
    </nav>;
}

export default Nav;