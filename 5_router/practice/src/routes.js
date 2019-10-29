import Home from './components/Home.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Noroute from './components/Noroute.vue';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, children: [
                    { path: 'edit', component: UserEdit }
                ]
            },
        ]
    },
    { path: '/noroute', component: Noroute},
    { path: '*', redirect: '/noroute'}
];
