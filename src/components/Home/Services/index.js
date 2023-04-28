import styles from './Services.module.scss';
import classNames from 'classnames/bind';

import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineSecurity } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Services() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('titleSection')}>Enjoy our services and supports</h1>
            <p className={cx('sub-title-services')}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam unde! Accusantium aspernatur
                corporis soluta a, facere saepe!
            </p>
            <ul className={cx('illustrateServices')}>
                <li className={cx('delivery')}>
                    <TbTruckDelivery />
                    <div className={cx('content')}> Free Delivery</div>
                </li>
                <li className={cx('curveLine')}>
                    <img src={process.env.PUBLIC_URL + '/images/curveLine.svg'} alt="curveLine" width={80} draggable={false}/>
                </li>
                <li className={cx('satisfaction')}>
                    <MdOutlineSecurity />
                    <div className={cx('content')}> 100% <br/> Satisfaction</div>
                </li>
                <li className={cx('curveLine')}>
                    <img src={process.env.PUBLIC_URL + '/images/curveLine.svg'} alt="curveLine" width={80} draggable={false}/>
                </li>
                <li className={cx('support')}>
                    <BiSupport />
                    <div className={cx('content')}> 24/7 Support</div>
                </li>
            </ul>
        </div>
    );
}

export default Services;
