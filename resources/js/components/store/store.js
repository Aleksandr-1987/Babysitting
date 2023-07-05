import Vuex from 'vuex';

import data from './data';
import credential from './forms_credential';
import baby from './forms_baby';
import nurse from './forms_nurse';
import housekeeper from './forms_housekeeper';
import message from './message';
import user from './user';

let store = new Vuex.Store({
    state: Object.assign(user.state, data.state, credential.state, message.state, baby.state, nurse.state, housekeeper.state),
    mutations: Object.assign(user.mutations, data.mutations, credential.mutations, message.mutations, baby.mutations, nurse.mutations, housekeeper.mutations),        
    actions: Object.assign(user.actions, data.actions, credential.actions, message.actions, baby.actions, nurse.actions, housekeeper.actions)   
});

export default store;