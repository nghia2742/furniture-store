import styles from './PersonCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PersonCard(props) {
    return <div className={cx('personCard')}>
        <img className={cx('img')} src={props.src} alt='avt'/>
        <h3 className={cx('name')}>{props.name}</h3>
        <p className={cx('major')}>{props.major}</p>
    </div>;
}

export default PersonCard;
