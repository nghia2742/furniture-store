import Home from '../components/Home';
import Shop from '../components/Shop';
import Location from '../components/Location';
import Services from '../components/Services';
import About from '../components/About';

const publicRoutes = [
    { path: '/furniture-store/', component: Home },
    { path: '/furniture-store/shop', component: Shop },
    { path: '/furniture-store/location', component: Location },
    { path: '/furniture-store/services', component: Services },
    { path: '/furniture-store/about', component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
