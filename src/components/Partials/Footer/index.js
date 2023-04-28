import styles from './Footer.module.scss';
import className from 'classnames/bind';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';

const cx = className.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>Furniture.</div>
                <ul>
                    <h4>Other link</h4>
                    <li>
                        <a href="#"> Events</a>
                    </li>
                    <li>
                        <a href="#"> Shop</a>
                    </li>
                    <li>
                        <a href="#"> About us</a>
                    </li>
                    <li>
                        <a href="#"> Contact</a>
                    </li>
                </ul>
                <ul>
                    <h4>Policies</h4>
                    <li>
                        <a href="#">Customers</a>
                    </li>
                    <li>
                        <a href="#">Exchange & Refund</a>
                    </li>
                    <li>
                        <a href="#">Payments</a>
                    </li>
                </ul>
                <ul className={cx('social')}>
                    <h4>Social Media</h4>
                    <li><a href='#'><BsFacebook/> <span>Facebook</span></a></li>
                    <li><a href='#'><BsInstagram/> <span>Instagram</span></a></li>
                    <li><a href='#'><BsPinterest/> <span>Pinterest</span></a></li>
                </ul>
            </div>
            <p className={cx('rights')}>
                &copy; 2023 Interior Design. All rights reserved. By
                NgoTrongNghia
            </p>
        </div>
    );
}

export default Footer;
