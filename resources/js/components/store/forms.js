import api from "../api";

let state = {   
    credentials: {},
    credential: {},
    baby: {},
    nurse: {}                
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
    SET_NURSE: (state, res) => {
        state.nurse = res;            
    },               
};

let actions = {
    CHANGE_NURSE({dispatch}, data){
        return api.put('api/auth/nurse/' + data[0].id, data[0])      
            .then((res) => {                
                dispatch('GET_NURSE', data[0].user_id);                
                api.post('api/auth/formdiagnose/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnursedutie/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnurseskill/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnursetypework/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnurseworklocation/' + data[0].id, {_method: 'DELETE'})
                    
                let diagnose = {};
                let result_diagnose = [];
                data[1].forEach((element) => {                               
                    diagnose.form_id = data[0].id;
                    diagnose.diagnose_id = element;
                    result_diagnose.push(diagnose);
                    //diagnose = {};                                                               
                })                  
                dispatch('CREATE_FORMDIAGNOSE', [result_diagnose, result_diagnose.length]);

                let nursedutie = {};
                let result_nursedutie = [];
                data[2].forEach((element) => {                               
                    nursedutie.form_id = data[0].id;
                    nursedutie.nursedutie_id = element;
                    result_nursedutie.push(nursedutie);
                    //typework = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEDUTIE', [result_nursedutie, result_nursedutie.length]);

                let nurseskill = {};
                let result_nurseskill = [];
                data[3].forEach((element) => {                               
                    nurseskill.form_id = data[0].id;
                    nurseskill.nurseskill_id = element;
                    result_nurseskill.push(nurseskill);
                    //joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSESKILL', [result_nurseskill, result_nurseskill.length]);

                let nursetypework = {};
                let result_nursetypework = [];
                data[4].forEach((element) => {                               
                    nursetypework.form_id = data[0].id;
                    nursetypework.nursetypework_id = element;
                    result_nursetypework.push(nursetypework);
                    //nursetypework = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSETYPEWORK', [result_nursetypework, result_nursetypework.length]);

                let agegroup = {};
                let result_agegroup = [];
                data[5].forEach((element) => {                               
                    agegroup.form_id = data[0].id;
                    agegroup.agegroup_id = element;
                    result_agegroup.push(agegroup);
                    agegroup = {};                                                               
                })                  
                dispatch('CREATE_FORMAGEGROUP', [result_agegroup, result_agegroup.length]);
                
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_NURSE({dispatch}, data){                    
        return api.post('api/auth/nurse', data[0])
            .then((res) => {                
                //console.log(res.data);                
                
                /*let education = {};
                let result_education = [];
                data[1].forEach((element) => {                               
                    education.form_id = res.data.id;
                    education.education_id = element;
                    result_education.push(education);
                    //education = {};                                                               
                })                  
                dispatch('CREATE_FORMEDUCATION', [result_education, result_education.length]);

                let joboption = {};
                let result_joboption = [];
                data[2].forEach((element) => {                               
                    joboption.form_id = res.data.id;
                    joboption.joboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMJOBOPTION', [result_joboption, result_joboption.length]);*/

                let diagnose = {};
                let result_diagnose = [];
                data[3].forEach((element) => {                               
                    diagnose.form_id = res.data.id;
                    diagnose.diagnose_id = element;
                    result_diagnose.push(diagnose);
                    diagnose = {};                                                               
                })                  
                dispatch('CREATE_FORMDIAGNOSE', [result_diagnose, result_diagnose.length]);

                let nursedutie = {};
                let result_nursedutie = [];
                data[4].forEach((element) => {                               
                    nursedutie.form_id = res.data.id;
                    nursedutie.nursedutie_id = element;
                    result_nursedutie.push(nursedutie);
                    nursedutie = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEDUTIE', [result_nursedutie, result_nursedutie.length]);

                let nurseskill = {};
                let result_nurseskill = [];
                data[5].forEach((element) => {                               
                    nurseskill.form_id = res.data.id;
                    nurseskill.nurseskill_id = element;
                    result_nurseskill.push(nurseskill);
                    nurseskill = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSESKILL', [result_nurseskill, result_nurseskill.length]);

                let nursetypework = {};
                let result_nursetypework = [];
                data[6].forEach((element) => {                               
                    nursetypework.form_id = res.data.id;
                    nursetypework.nursetypework_id = element;
                    result_nursetypework.push(nursetypework);
                    nursetypework = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSETYPEWORK', [result_nursetypework, result_nursetypework.length]);

                let worklocation = {};
                let result_worklocation = [];
                data[7].forEach((element) => {                               
                    worklocation.form_id = res.data.id;
                    worklocation.nurseworklocation_id = element;
                    result_worklocation.push(worklocation);
                    worklocation = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEWORKLOCATION', [result_worklocation, result_worklocation.length]);

                dispatch('GET_NURSE', data[0].user_id);
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_NURSE({commit}, data){ 
        return api.get('api/auth/nurse', {params: {data}})
            .then((res) => { 
                console.log(res);                                                  
                commit('SET_NURSE', res.data.data);                                     
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMDIAGNOSE( {dispatch}, data){            
        return api.post('api/auth/formdiagnose', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSEDUTIE( {dispatch}, data){            
        return api.post('api/auth/formnursedutie', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSESKILL( {dispatch}, data){            
        return api.post('api/auth/formnurseskill', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSETYPEWORK( {dispatch}, data){            
        return api.post('api/auth/formnursetypework', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSEWORKLOCATION( {dispatch}, data){            
        return api.post('api/auth/formnurseworklocation', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    CHANGE_BABY({dispatch}, data){
        return api.put('api/auth/baby/' + data[0].id, data[0])      
            .then((res) => {                
                dispatch('GET_BABY', data[0].user_id);
                api.post('api/auth/userlanguages/' + data[0].user_id, {_method: 'DELETE'})
                api.post('api/auth/formagegroup/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formdutie/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formeducation/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formjoboption/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formtypework/' + data[0].id, {_method: 'DELETE'})
                    
                let user_language = {};
                let result = [];
                data[1].forEach((element) => {                               
                    user_language.user_id = data[0].user_id;
                    user_language.language_id = element;
                    result.push(user_language);
                    user_language = {};                                                               
                })                  
                dispatch('CREATE_USERLANGUAGES', [result, result.length]);

                let education = {};
                let result_education = [];
                data[2].forEach((element) => {                               
                    education.form_id = data[0].id;
                    education.education_id = element;
                    result_education.push(education);
                    education = {};                                                               
                })                  
                dispatch('CREATE_FORMEDUCATION', [result_education, result_education.length]);

                let typework = {};
                let result_typework = [];
                data[3].forEach((element) => {                               
                    typework.form_id = data[0].id;
                    typework.typework_id = element;
                    result_typework.push(typework);
                    typework = {};                                                               
                })                  
                dispatch('CREATE_FORMTYPEWORK', [result_typework, result_typework.length]);

                let joboption = {};
                let result_joboption = [];
                data[4].forEach((element) => {                               
                    joboption.form_id = data[0].id;
                    joboption.joboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMJOBOPTION', [result_joboption, result_joboption.length]);

                let dutie = {};
                let result_dutie = [];
                data[5].forEach((element) => {                               
                    dutie.form_id = data[0].id;
                    dutie.dutie_id = element;
                    result_dutie.push(dutie);
                    dutie = {};                                                               
                })                  
                dispatch('CREATE_FORMDUTIE', [result_dutie, result_dutie.length]);

                let agegroup = {};
                let result_agegroup = [];
                data[6].forEach((element) => {                               
                    agegroup.form_id = data[0].id;
                    agegroup.agegroup_id = element;
                    result_agegroup.push(agegroup);
                    agegroup = {};                                                               
                })                  
                dispatch('CREATE_FORMAGEGROUP', [result_agegroup, result_agegroup.length]);
                
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_BABY({dispatch}, data){                    
        return api.post('api/auth/baby', data[0])
            .then((res) => {                
                //console.log(res.data);
                let user_language = {};
                let result = [];
                data[1].forEach((element) => {                               
                    user_language.user_id = data[0].user_id;
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
            .catch(error => { console.log(error); return error; })
    },
    GET_BABY({commit}, data){ 
        return api.get('api/auth/baby', {params: {data}})
            .then((res) => {                                    
                commit('SET_BABY', res.data.data);                                     
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_USERLANGUAGES( {dispatch}, data){            
        return api.post('api/auth/userlanguages', data)
            .then((res) => {                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMAGEGROUP( {dispatch}, data){            
        return api.post('api/auth/formagegroup', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMDUTIE( {dispatch}, data){            
        return api.post('api/auth/formdutie', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMEDUCATION( {dispatch}, data){            
        return api.post('api/auth/formeducation', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMJOBOPTION( {dispatch}, data){            
        return api.post('api/auth/formjoboption', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMTYPEWORK( {dispatch}, data){            
        return api.post('api/auth/formtypework', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

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


