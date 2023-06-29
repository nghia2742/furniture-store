import styles from './SidebarFavorite.module.scss';
import classNames from 'classnames/bind';
import products from '../../../data/listProducts';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function SidebarFavorite({ onSidebar, reloadSidebar, onRemoveFav}) {
    const [favoriteList, setFavoriteList] = useState(
        JSON.parse(localStorage.getItem('favoriteList')) || []
    );
    const favoriteSidebar = favoriteList.map((id) => {
        const data = products.find((product) => product.id === id);
        return data;
    });

    useEffect(() => {
        if (reloadSidebar > 0) {
            setFavoriteList(JSON.parse(localStorage.getItem('favoriteList')));
        }
    }, [reloadSidebar]);

    const handleFavoriteList = (productId) => {
        let index = favoriteList.indexOf(productId);
        favoriteList.splice(index, 1);
        localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
        setFavoriteList([...favoriteList]);
        onRemoveFav(productId)
    };


    return (
        <aside className={cx('sidebar')}>
            <span onClick={onSidebar} className={cx('close')}>
                &times;
            </span>
            <h1 className={cx('title')}>Your Favorite</h1>
            <ul className={cx('favoriteList')}>
                {favoriteSidebar.length === 0 ? (
                    <p className={cx('favoriteBoxEmpty')}>
                        Save your favorite here
                    </p>
                ) : (
                    favoriteSidebar.map((product, index) => (
                        <li key={index}>
                            <div className={cx('favoriteBox')}>
                                <img
                                    className={cx('imageFav')}
                                    src={product.image}
                                    alt=""
                                />
                                <div className={cx('bodyFav')}>
                                    <h4 className={cx('name')}>
                                        {product.name}
                                    </h4>
                                    <div className={cx('shopping')}>
                                        <p>${product.price}</p>
                                        <AiOutlineShoppingCart
                                            className={cx('iconCart')}
                                            title="Add to cart"
                                        />
                                    </div>
                                </div>
                                <div
                                    className={cx('closeFav')}
                                    onClick={() =>
                                        handleFavoriteList(product.id)
                                    }
                                >
                                    &times;
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </aside>
    );
}

export default SidebarFavorite;
