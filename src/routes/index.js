import Home from '../components/Home';
import Shop from '../components/Shop';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
