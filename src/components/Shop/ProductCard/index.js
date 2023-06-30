import classNames from 'classnames/bind';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

function ProductCard({ product, handleFavoriteClick, handleCartClick}) {
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
    let isFavorite = favoriteList.find((id) => product.id === id);
    
    return (
        <div className={cx('product')}>
            <div className={cx('backgroundProduct')}>
                <img
                    className={cx('imageProduct')}
                    src={product.image}
                    alt=""
                />
                <h3>{product.name}</h3>
                <h3 className={cx('priceProduct')}>${product.price}</h3>
                <div className={cx('shopping')}>
                    <span>
                        <span
                            className={cx('iconShopping')}
                            title="Add to favorite"
                            onClick={() => handleFavoriteClick(product.id)}
                        >
                            {
                            isFavorite?
                            <AiFillHeart className={cx('activeHeart')}/>:
                            <AiOutlineHeart/>
                            }
                        </span>
                        <span
                            className={cx('iconShopping')}
                            title="Add to cart"
                            onClick={() => handleCartClick(product.id)}
                        >
                            <AiOutlineShoppingCart />
                        </span>
                    </span>
                    <button className={cx('btnShopping')}>Buy now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;