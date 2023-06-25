import api from "../api";

let state = {
    countmessage: 0,
    messages: {},
    messages_in: {}
};

let mutations = {
    SET_COUNTMESSAGE: (state, res) => {            
        state.countmessage = 0            
        for (let index = 0; index < res.length; index++) {
            if(res[index].reading==0){
                state.countmessage++                                       
            }
        }                
    },
    SET_MESSAGES: (state, res) => {
        state.messages = res;            
    },
    SET_MESSAGES_IN: (state, res) => {
        state.messages_in = res;
        for (let index = 0; index < res.length; index++) {
            if(res[index].reading==0){
                api.post('/api/auth/message/' + res[index].id, { _method: 'PUT', reading: 1 })                    
                .catch(error => {
                    console.log(error);
                })
            }
        }                                    
    },
};

let actions = {
    DELETE_MESSAGE({dispatch}, data){                       
        return api.post('api/auth/message/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_MESSAGES');                  
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },        
    GET_MESSAGES({commit}, data){
        return api.get('api/auth/message', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_MESSAGES', res.data);                    
                return res;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_MSG_OUT({commit}, data){
        return api.get('api/auth/msg_out', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_MESSAGES', res.data);                    
                return res;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_MSG_IN({commit}, data){
        return api.get('api/auth/msg_in', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_MESSAGES_IN', res.data);                    
                return res;
            })                
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_COUNTMESSAGE({commit}, data){
        return api.get('api/auth/msg_in', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_COUNTMESSAGE', res.data);                    
                return res;
            })                
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_COUNTMESSAGE_USER({commit}, data){
        return api.get('api/auth/message_in', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_COUNTMESSAGE', res.data);                    
                return res;
            })                
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
    GET_MESSAGES_IN({commit}, data){
        return api.get('api/auth/message_in', {params: {data}})
            .then(res => {
                //console.log(res);                    
                commit('SET_MESSAGES_IN', res.data);                    
                return res;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }, 
    CREATE_MESSAGE({dispatch}, data){            
        return api.post('api/auth/message', data)
            .then((res) => {                    
                //dispatch('GET_MESSAGES');
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
}

export default {  
    state,      
    mutations,
    actions
};