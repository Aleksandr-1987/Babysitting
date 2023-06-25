import api from "../api";
import router from "../router";
    
let state = {
    admin_id: 0,
    user_id: 0,
    user: {},
    users: {},
    token: '',
    photo: '',
};

let mutations = {
    SET_USERS: (state, res) => {
        state.users = res;            
    },        
    SET_ADMINID: (state, res) => {
        state.admin_id = res;
    },
    SET_USERID: (state, res) => {
        state.user_id = res;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    }, 
    SET_USER: (state, res) => {
        state.user = res;                        
    },
    SET_PHOTO: (state, res) => {
        state.photo = res;                                    
    },
};

let actions = {
    GET_ADMIN({commit}){                                     
        commit('SET_ADMINID', localStorage.admin_id);
    },
    GET_USERID({commit}){                                     
        commit('SET_USERID', localStorage.user_id);
    },
    GET_ADMINID({dispatch}){            
        return api.get('api/auth/admin')
            .then((res) => { 
                //console.log(res);
                localStorage.admin_id = res.data.id
                dispatch('GET_ADMIN');                   
                //commit('SET_ADMINID', res.data.id);
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    GET_PHOTO({commit}){
        commit('SET_PHOTO', localStorage.user_image);
    },
    CREATE_PHOTO( {dispatch}, data){            
        return api.post('api/auth/photo', data)
            .then((res) => { 
                //console.log(res);                   
                localStorage.user_image = res.data.preview_url;
                dispatch('GET_PHOTO');
                router.push({name: "Account"});                    
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    DELETE_PHOTO( {commit}, data){            
        return api.post('api/auth/photo/' + data, {_method: 'DELETE'})
            .then((res) => { 
                console.log(res);
                //localStorage.removeItem('user_image');
                //commit('SET_PHOTO', '');
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    GET_TOKEN({commit}){
        commit('SET_TOKEN', localStorage.access_token);
    },
    LOGOUT_USER({commit}){                                                 
        return api.post('api/auth/logout')
            .then((res) => {                    
                localStorage.removeItem('access_token');
                localStorage.removeItem('user');
                localStorage.removeItem('user_image');
                localStorage.removeItem('admin_id');
                commit('SET_TOKEN', '');
                commit('SET_PHOTO', '');
                commit('SET_USER', {});
                commit('SET_ADMINID', 0);
                router.push({name: "Login"});                    
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    GET_USER({commit}){                                     
        commit('SET_USER', JSON.parse(localStorage.user));
    },
    LOGIN_USER({dispatch}, data){                                                 
        return axios.post('api/auth/login', data)
            .then((res) => {
                //console.log(res)
                localStorage.access_token = res.data[0].original.access_token
                localStorage.user = JSON.stringify(res.data[1].original)
                localStorage.user_image = res.data[1].original.image;
                dispatch('GET_TOKEN'); dispatch('GET_PHOTO'); dispatch('GET_USER');
                router.push({name: "Account"});
                return res;
            })
            .catch(error => {
                //console.log(error.response.data.error);
                console.log(error);
                return error;
            })
    },
    GET_USERS({commit}){                                   
        //console.log(data.name);
        return axios.get('api/user/')
            .then((res) => { 
                //console.log(res);                    
                commit('SET_USERS', res.data);                                     
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    UPDATE_USER({dispatch}, data){                                   
        //console.log(data.name);
        return axios.put('api/user/' + data.id, data)
            .then((res) => { 
                //console.log(res);
                localStorage.user = JSON.stringify(res.data.data)
                dispatch('GET_USER');
                router.push({name: "Account"});                 
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_USER({dispatch}, data){                                     
        return axios.post('api/user', data)
            .then((res) => {
                //console.log(res.data.message);
                localStorage.access_token = res.data.access_token
                localStorage.user = JSON.stringify(res.data.user)
                dispatch('GET_USER');
                router.push({name: "Account"});                                      
                return res;
            })
            .catch(error => {
                //console.log(error.response.data.message);
                console.log(error);
                return error;
            })
    },
};

export default {  
    state,      
    mutations,
    actions
};