import styles from './SidebarCart.module.scss';
import classNames from 'classnames/bind';
import { TextField } from '@mui/material';
import products from '../../../data/listProducts';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function SidebarCart({ onSidebar, onReloadCartSidebar }) {
    const [cartList, setCartList] = useState(
        JSON.parse(localStorage.getItem('cartList')) || []
    );
    const cartSidebar = cartList.map((id) => {
        const data = products.find((product) => product.id === id);
        return data;
    });

    useEffect(() => {
        if (onReloadCartSidebar > 0) {
            setCartList(JSON.parse(localStorage.getItem('favoriteList')));
        }
    }, [onReloadCartSidebar]);

    const handleCartList = (productId) => {
        let index = cartList.indexOf(productId);
        cartList.splice(index, 1);
        localStorage.setItem('cartList', JSON.stringify(cartList));
        setCartList([...cartList]);
    };

    return (
        <aside className={cx('sidebar')}>
            <span onClick={onSidebar} className={cx('close')}>
                &times;
            </span>
            <h1 className={cx('title')}>Your Cart</h1>
            <ul className={cx('cartList')}>
                {cartSidebar.length === 0 ? (
                    <p className={cx('cartBoxEmpty')}>
                        Save your favorite here
                    </p>
                ) : (
                    cartSidebar.map((product, index) => (
                        <li key={index}>
                            <div className={cx('cartBox')}>
                                <img
                                    className={cx('imageCart')}
                                    src={product.image}
                                    alt=""
                                />
                                <div className={cx('bodyCart')}>
                                    <h4 className={cx('name')}>
                                        {product.name}
                                    </h4>
                                    <div className={cx('shopping')}>
                                        <p>${product.price}</p>
                                        <TextField
                                            defaultValue={1}
                                            type="number"
                                            id="outlined-basic"
                                            label="Quantity"
                                            variant="outlined"
                                            size="small"
                                            style={{ width: '70px' }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={cx('closeCart')}
                                    onClick={() => handleCartList(product.id)}
                                >
                                    &times;
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <div className={cx('payment')}>Payment</div>
        </aside>
    );
}

export default SidebarCart;
