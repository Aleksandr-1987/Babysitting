import api from "../api";

let state = {   
    credentials: {},
    credential: {},                    
};
    
let mutations = {        
    SET_CREDENTIALS: (state, res) => {
        state.credentials = res;            
    },
    SET_CREDENTIAL: (state, res) => {
        state.credential = res;            
    },               
};

let actions = {
    DELETE_CREDENTIAL({dispatch}, data){                       
        return api.post('api/auth/credential/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_CREDENTIALS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_CREDENTIAL( data){                       
        return api.put('api/auth/credential/' + data.state.credential.id, data.state.credential)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_CREDENTIAL({commit}, data){
        commit('SET_CREDENTIAL', data);
    },
    GET_CREDENTIALS({commit}){
        return api.get('api/auth/credential')
            .then(res => {                    
                commit('SET_CREDENTIALS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_CREDENTIAL( {dispatch}, data){            
        return api.post('api/auth/credential', data)
            .then((res) => {                    
                dispatch('GET_CREDENTIALS');
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


