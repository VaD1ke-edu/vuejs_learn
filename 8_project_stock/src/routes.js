import Home from './components/Home.vue';
import Noroute from './components/Noroute.vue';
//
const Stock = resolve => {
    require.ensure(['./components/Stock.vue'], () => {
        resolve(require('./components/Stock.vue'));
    });
};
const Portfolio = resolve => {
    require.ensure(['./components/Portfolio.vue'], () => {
        resolve(require('./components/Portfolio.vue'));
    });
};

export const routes = [
    { path: '', component: Home },
    { path: '/stock', component: Stock },
    { path: '/portfolio', component: Portfolio },
    { path: '/noroute', component: Noroute },
    { path: '*', redirect: '/noroute' }
];
