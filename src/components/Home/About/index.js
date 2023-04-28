import styles from './About.module.scss';
import classNames from 'classnames/bind';
import PersonCard from './PersonCard';

const cx = classNames.bind(styles);

const data = [
    {
        name: 'Jacob Beattie',
        major: 'Interior Design',
        src: process.env.PUBLIC_URL + '/images/people/avt1.avif',
    },
    {
        name: 'Steeve Dionne',
        major: 'Architecture',
        src: process.env.PUBLIC_URL + '/images/people/avt2.avif',
    },
    {
        name: 'Christina Spence',
        major: 'Graphic Design',
        src: process.env.PUBLIC_URL + '/images/people/avt3.avif',
    },
    {
        name: 'Daryl Hanson',
        major: 'Industrial Design',
        src: process.env.PUBLIC_URL + '/images/people/avt4.avif',
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
