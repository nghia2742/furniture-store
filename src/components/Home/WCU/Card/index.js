import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Card(props) {
    return <div className={cx('card')}>
        <h3>{props.text}</h3>
        <p>{props.desc}</p> 
    </div>;
}

export default Card;