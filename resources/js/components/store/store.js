import Vuex from 'vuex';

import data from './data';
import forms from './forms';
import message from './message';
import user from './user';

let store = new Vuex.Store({
    state: Object.assign(user.state, data.state, forms.state, message.state),
    mutations: Object.assign(user.mutations, data.mutations, forms.mutations, message.mutations),        
    actions: Object.assign(user.actions, data.actions, forms.actions, message.actions)   
});

export default store;