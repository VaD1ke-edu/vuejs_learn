const state = {
    items: [
        {
            title: 'qwe1',
        },
        {
            title: 'qwe2',
        },
        {
            title: 'qwe3',
        }
    ]
};

const getters = {
    items: state => {
        return state.items;
    }
};

const mutations = {
    addItem: item => {
        state.items = [...state.items, item];
    }
};

const actions = {
    addItem: ({commit}, payload) => {
        commit('addItem', payload);
    }  
};

export default {
    state,
    getters,
    mutations,
    actions
};