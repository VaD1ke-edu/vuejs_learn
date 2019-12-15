import Vue from 'vue';
import Vuex from 'vuex';

import portfolio from './modules/portfolio';
import stock from './modules/stock';

Vue.use(Vuex);

portfolio.namespaced = true;
stock.namespaced = true;

export const store = new Vuex.Store({
    state: {
        fundsTotal: 10000
    },
    getters: {
        fundsTotal: state => {
            return state.fundsTotal;
        }
    },
    modules: {
        portfolio,
        stock
    }
});
