import Home from '../components/Home';
import Shop from '../components/Shop';
import Location from '../components/Location';
import Services from '../components/Services';
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';

const publicRoutes = [
    { path: '/', component: Home , exact: true},
    { path: '/shop', component: Shop },
    { path: '/location', component: Location },
    { path: '/services', component: Services },
    { path: '/about', component: About },
    { path: '*', component: NotFoundPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
