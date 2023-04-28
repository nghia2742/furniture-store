import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from 'react-simple-maps';
import styles from './MapChart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MapChart = () => {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('titleSection')}>Our Location</h1>
            <span className={cx('sub-titleSection')}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                numquam unde! Accusantium aspernatur corporis soluta a, facere
                saepe!
            </span>

            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [-10.0, -52.0, 0],
                    center: [-5, -3],
                    scale: 1100,
                }}
            >
                <Geographies
                    geography="/features.json"
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                <Annotation
                    subject={[2.3522, 48.8566]}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: '#FF5533',
                        strokeWidth: 3,
                        strokeLinecap: 'round',
                    }}
                >
                    <text
                        x="-8"
                        textAnchor="end"
                        alignmentBaseline="middle"
                        fill="#F53"
                    >
                        {'Paris'}
                    </text>
                </Annotation>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
