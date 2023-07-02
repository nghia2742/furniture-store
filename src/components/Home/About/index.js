import styles from './About.module.scss';
import classNames from 'classnames/bind';
import PersonCard from './PersonCard';

const cx = classNames.bind(styles);

const data = [
    {
        name: 'Jacob Beattie',
        major: 'Interior Design',
        src: 'images/people/avt1.png',
    },
    {
        name: 'Steeve Dionne',
        major: 'Architecture',
        src: 'images/people/avt2.png',
    },
    {
        name: 'Christina Spence',
        major: 'Graphic Design',
        src: 'images/people/avt3.png',
    },
    {
        name: 'Daryl Hanson',
        major: 'Industrial Design',
        src: 'images/people/avt4.png',
    },
];

function About() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('titleSection')}>About Us</h1>
            <div className={cx('wrapPeopleCard')}>
            {data.map((person, index) => (
                <PersonCard key={index}
                    src={person.src}
                    name={person.name}
                    major={person.major}
                />
            ))}                
            </div>
        </div>
    );
}

export default About;
