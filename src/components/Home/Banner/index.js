import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <h1 className={cx('title-banner')}>
                    Modern interior <br />
                    Design studio
                </h1>
                <p className={cx('desc-banner')}>
                    Choose from a wide range of well-crafted premium quality wooden furniture online.
                </p>
                <div className={cx('btn','btn-banner')}>
                    Visit our shop
                </div>
            </div>
            <div className={cx('right')}>
                <img
                    className={cx('furniture-banner')}
                    src={process.env.PUBLIC_URL + '/images/furniture-banner.png'}
                    alt="furniture-banner.png"
                />
            </div>
        </div>
    );
}

export default Banner;
