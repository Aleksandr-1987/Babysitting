import api from "../api";

let state = {   
    keeper: {},                    
};
    
let mutations = { 
    SET_KEEPER: (state, res) => {
        state.keeper = res;            
    },            
};

let actions = {
    DELETE_KEEPER({dispatch}, data){                                
        return api.post('api/auth/keeper/' + data[0], {_method: 'DELETE'})
            .then((res) => {
                //console.log(res);
                dispatch('GET_KEEPER', data[0]);                
                
                api.post('api/auth/keeperdutie/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/keeperjoboption/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/keeperpreference/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/keepertypework/' + data[1], {_method: 'DELETE'})
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_KEEPER({dispatch}, data){
        return api.put('api/auth/keeper/' + data[0].id, data[0])      
            .then((res) => {                
                dispatch('GET_KEEPER', data[0].user_id);                
                api.post('api/auth/keeperdutie/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/keeperjoboption/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/keeperpreference/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/keepertypework/' + data[0].id, {_method: 'DELETE'})        
                
                let joboption = {};
                let result_joboption = [];
                data[1].forEach((element) => {                               
                    joboption.form_id = data[0].id;
                    joboption.keeperjoboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERJOBOPTION', [result_joboption, result_joboption.length]);

                let preference = {};
                let result_preference = [];
                data[2].forEach((element) => {                               
                    preference.form_id = data[0].id;
                    preference.keeperpreference_id = element;
                    result_preference.push(preference);
                    preference = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERPREFERENCE', [result_preference, result_preference.length]);

                let keeperdutie = {};
                let result_keeperdutie = [];
                data[3].forEach((element) => {                               
                    keeperdutie.form_id = data[0].id;
                    keeperdutie.keeperdutie_id = element;
                    result_keeperdutie.push(keeperdutie);
                    keeperdutie = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERDUTIE', [result_keeperdutie, result_keeperdutie.length]);

                let keepertypework = {};
                let result_keepertypework = [];
                data[4].forEach((element) => {                               
                    keepertypework.form_id = data[0].id;
                    keepertypework.keepertypework_id = element;
                    result_keepertypework.push(keepertypework);
                    keepertypework = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERTYPEWORK', [result_keepertypework, result_keepertypework.length]);
                
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_KEEPER({dispatch}, data){                           
        return api.post('api/auth/keeper', data[0])
            .then((res) => {
                let joboption = {};
                let result_joboption = [];
                data[1].forEach((element) => {                               
                    joboption.form_id = res.data.id;
                    joboption.keeperjoboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERJOBOPTION', [result_joboption, result_joboption.length]);

                let preference = {};
                let result_preference = [];
                data[2].forEach((element) => {                               
                    preference.form_id = res.data.id;
                    preference.keeperpreference_id = element;
                    result_preference.push(preference);
                    preference = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERPREFERENCE', [result_preference, result_preference.length]);

                let keeperdutie = {};
                let result_keeperdutie = [];
                data[3].forEach((element) => {                               
                    keeperdutie.form_id = res.data.id;
                    keeperdutie.keeperdutie_id = element;
                    result_keeperdutie.push(keeperdutie);
                    keeperdutie = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERDUTIE', [result_keeperdutie, result_keeperdutie.length]);

                let keepertypework = {};
                let result_keepertypework = [];
                data[4].forEach((element) => {                               
                    keepertypework.form_id = res.data.id;
                    keepertypework.keepertypework_id = element;
                    result_keepertypework.push(keepertypework);
                    keepertypework = {};                                                               
                })                  
                dispatch('CREATE_FORMKEEPERTYPEWORK', [result_keepertypework, result_keepertypework.length]);

                dispatch('GET_KEEPER', data[0].user_id);
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_KEEPER({commit}, data){ 
        return api.get('api/auth/keeper', {params: {data}})
            .then((res) => {                                                                                 
                commit('SET_KEEPER', res.data.data);                                     
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },    
    CREATE_FORMKEEPERJOBOPTION( {dispatch}, data){            
        return api.post('api/auth/keeperjoboption', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMKEEPERPREFERENCE( {dispatch}, data){            
        return api.post('api/auth/keeperpreference', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMKEEPERDUTIE( {dispatch}, data){            
        return api.post('api/auth/keeperdutie', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },    
    CREATE_FORMKEEPERTYPEWORK( {dispatch}, data){            
        return api.post('api/auth/keepertypework', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },                                      
}

export default {  
    state,      
    mutations,
    actions
};


