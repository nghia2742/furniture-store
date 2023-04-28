import React from 'react';
import Card from './Card';
import Counter from './Counter';
import styles from './WCU.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function WCU() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('titleSection')}>Why Choose Us</h1>
            <span className={cx('sub-titleSection')}>We will serve you with all our devotion and enthusiasm</span>
            <ul className={cx('numbers')}>
                <li className={cx('product')}>
                    <div className={cx('number')}>
                        <Counter maxNumber={300} />+
                    </div>
                    <h2>Various Product</h2>
                </li>
                <li className={cx('sold')}>
                    <div className={cx('number')}>
                        <Counter maxNumber={500} />+
                    </div>
                    <h2> Products Sold</h2>
                </li>
                <li className={cx('customer')}>
                    <div className={cx('number')}>
                        <Counter maxNumber={400} />+
                    </div>
                    <h2>Customer</h2>
                </li>
            </ul>
            <ul className={cx('ability')}>
                <li className={cx('ability-item')}>
                    <Card
                        className={cx('left')}
                        text="Professional"
                        desc="A professional in the field of interior design is someone who possesses creative, detail-oriented, technical, and artistic skills, with a visionary approach, analytical mindset, and excellent organizational."
                    />
                    <div className={cx('right')}>
                        <img className={cx('img')}  src={process.env.PUBLIC_URL + '/images/badge.svg'} alt="" width={200} />
                    </div>
                </li>
                <li className={cx('ability-item')}>
                    <div className={cx('left')}>
                        <img className={cx('img')} src={process.env.PUBLIC_URL + '/images/creativity.svg'} alt="" width={200} />
                    </div>
                    <Card
                        className={cx('right')}
                        text="Creative"
                        desc="Someone who is creative in the field of interior design possesses a unique ability to come up with original and imaginative ideas for space planning, color schemes, lighting, furniture, and accessories."
                    />
                </li>
            </ul>
        </div>
    );
}

export default WCU;
