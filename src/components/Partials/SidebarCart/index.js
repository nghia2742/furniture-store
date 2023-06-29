import styles from './SidebarCart.module.scss';
import classNames from 'classnames/bind';
import Sofa from '../../../assets/sofa.png';
import { TextField } from '@mui/material';

const cx = classNames.bind(styles);

function SidebarCart({ onSidebar }) {
    return (
        <aside className={cx('sidebar')}>
            <span onClick={onSidebar} className={cx('close')}>
                &times;
            </span>
            <h1 className={cx('title')}>Your Cart</h1>
            <ul className={cx('cartList')}>
                {/* {favoriteSidebar.length === 0 ? (
            <p className={cx('cartBoxEmpty')}>
                Save your favorite here
            </p>
        ) : ( */}
                <li>
                    <div className={cx('cartBox')}>
                        <img className={cx('imageCart')} src={Sofa} alt="" />
                        <div className={cx('bodyCart')}>
                            <h4 className={cx('name')}>
                                {/* {product.name} */}Name Product
                            </h4>
                            <div className={cx('shopping')}>
                                <p>{/* ${product.price} */} $999.999</p>
                                <TextField
                                    defaultValue={1}
                                    type="number"
                                    id="outlined-basic"
                                    label="Quantity"
                                    variant="outlined"
                                    size='small'
                                    style={{'width':'70px'}}
                                />
                            </div>
                        </div>
                        <div className={cx('closeCart')}>&times;</div>
                    </div>
                </li>
                {/* )} */}
            </ul>
            <div className={cx('payment')}>Payment</div>
        </aside>
    );
}

export default SidebarCart;
