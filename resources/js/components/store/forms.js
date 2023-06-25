import api from "../api";

let state = {   
    credentials: {},
    credential: {},
    baby: {}                
};
    
let mutations = {        
    SET_CREDENTIALS: (state, res) => {
        state.credentials = res;            
    },
    SET_CREDENTIAL: (state, res) => {
        state.credential = res;            
    },
    SET_BABY: (state, res) => {
        state.baby = res;            
    },               
};

let actions = {
    CREATE_BABY({dispatch}, data){
        //console.log(data[1]);            
        return api.post('api/auth/baby', data[0])
            .then((res) => {                
                //console.log(res.data);
                let user_language = {};
                let result = [];
                data[1].forEach((element) => {                               
                    user_language.user_id = res.data.id;
                    user_language.language_id = element;
                    result.push(user_language);
                    user_language = {};                                                               
                })                  
                dispatch('CREATE_USERLANGUAGES', [result, result.length]);

                let education = {};
                let result_education = [];
                data[2].forEach((element) => {                               
                    education.form_id = res.data.id;
                    education.education_id = element;
                    result_education.push(education);
                    education = {};                                                               
                })                  
                dispatch('CREATE_FORMEDUCATION', [result_education, result_education.length]);

                let typework = {};
                let result_typework = [];
                data[3].forEach((element) => {                               
                    typework.form_id = res.data.id;
                    typework.typework_id = element;
                    result_typework.push(typework);
                    typework = {};                                                               
                })                  
                dispatch('CREATE_FORMTYPEWORK', [result_typework, result_typework.length]);

                let joboption = {};
                let result_joboption = [];
                data[4].forEach((element) => {                               
                    joboption.form_id = res.data.id;
                    joboption.joboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMJOBOPTION', [result_joboption, result_joboption.length]);

                let dutie = {};
                let result_dutie = [];
                data[5].forEach((element) => {                               
                    dutie.form_id = res.data.id;
                    dutie.dutie_id = element;
                    result_dutie.push(dutie);
                    dutie = {};                                                               
                })                  
                dispatch('CREATE_FORMDUTIE', [result_dutie, result_dutie.length]);

                let agegroup = {};
                let result_agegroup = [];
                data[6].forEach((element) => {                               
                    agegroup.form_id = res.data.id;
                    agegroup.agegroup_id = element;
                    result_agegroup.push(agegroup);
                    agegroup = {};                                                               
                })                  
                dispatch('CREATE_FORMAGEGROUP', [result_agegroup, result_agegroup.length]);

                dispatch('GET_BABY', data[0].user_id);
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    GET_BABY({commit}, data){                                   
        //console.log(data);
        return api.get('api/auth/baby', {params: {data}})
            .then((res) => { 
                //console.log(res);                    
                commit('SET_BABY', res.data);                                     
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_USERLANGUAGES( {dispatch}, data){            
        return api.post('api/auth/userlanguages', data)
            .then((res) => {                    
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_FORMAGEGROUP( {dispatch}, data){            
        return api.post('api/auth/formagegroup', data)
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_FORMDUTIE( {dispatch}, data){            
        return api.post('api/auth/formdutie', data)
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_FORMEDUCATION( {dispatch}, data){            
        return api.post('api/auth/formeducation', data)
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_FORMJOBOPTION( {dispatch}, data){            
        return api.post('api/auth/formjoboption', data)
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CREATE_FORMTYPEWORK( {dispatch}, data){            
        return api.post('api/auth/formtypework', data)
            .then((res) => {
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },

    DELETE_CREDENTIAL({dispatch}, data){                       
        return api.post('api/auth/credential/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_CREDENTIALS');                  
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    CHANGE_CREDENTIAL( data){                       
        return api.put('api/auth/credential/' + data.state.credential.id, data.state.credential)
            .then((res) => {                  
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
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
            .catch((error) => {
                console.log(error);
                return error;
            })
    }, 
    CREATE_CREDENTIAL( {dispatch}, data){            
        return api.post('api/auth/credential', data)
            .then((res) => {                    
                dispatch('GET_CREDENTIALS');
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

