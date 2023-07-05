import api from "../api";

let state = {
    nurse: {},
};

let mutations = {
    SET_NURSE: (state, res) => {
        state.nurse = res;            
    }, 
};

let actions = {
    DELETE_NURSE({dispatch}, data){                                
        return api.post('api/auth/nurse/' + data[0], {_method: 'DELETE'})
            .then((res) => {
                //console.log(res);
                dispatch('GET_NURSE', data[0]);
                
                api.post('api/auth/formdiagnose/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnursedutie/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnurseskill/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnursetypework/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnurseworklocation/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnurseeducation/' + data[1], {_method: 'DELETE'})
                api.post('api/auth/formnursejoboption/' + data[1], {_method: 'DELETE'})
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_NURSE({dispatch}, data){
        return api.put('api/auth/nurse/' + data[0].id, data[0])      
            .then((res) => {                
                dispatch('GET_NURSE', data[0].user_id);                
                api.post('api/auth/formdiagnose/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnursedutie/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnurseskill/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnursetypework/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnurseworklocation/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnurseeducation/' + data[0].id, {_method: 'DELETE'})
                api.post('api/auth/formnursejoboption/' + data[0].id, {_method: 'DELETE'})
                 
                let education = {};
                let result_education = [];
                data[1].forEach((element) => {                               
                    education.form_id = data[0].id;
                    education.nurseeducation_id = element;
                    result_education.push(education);
                    education = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEEDUCATION', [result_education, result_education.length]);

                let joboption = {};
                let result_joboption = [];
                data[2].forEach((element) => {                               
                    joboption.form_id = data[0].id;
                    joboption.nursejoboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEJOBOPTION', [result_joboption, result_joboption.length]);
                
                let diagnose = {};
                let result_diagnose = [];
                data[3].forEach((element) => {                               
                    diagnose.form_id = data[0].id;
                    diagnose.diagnose_id = element;
                    result_diagnose.push(diagnose);
                    diagnose = {};                                                               
                })                  
                dispatch('CREATE_FORMDIAGNOSE', [result_diagnose, result_diagnose.length]);

                let nursedutie = {};
                let result_nursedutie = [];
                data[4].forEach((element) => {                               
                    nursedutie.form_id = data[0].id;
                    nursedutie.nursedutie_id = element;
                    result_nursedutie.push(nursedutie);
                    nursedutie = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEDUTIE', [result_nursedutie, result_nursedutie.length]);

                let nurseskill = {};
                let result_nurseskill = [];
                data[5].forEach((element) => {                               
                    nurseskill.form_id = data[0].id;
                    nurseskill.nurseskill_id = element;
                    result_nurseskill.push(nurseskill);
                    nurseskill = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSESKILL', [result_nurseskill, result_nurseskill.length]);

                let nursetypework = {};
                let result_nursetypework = [];
                data[6].forEach((element) => {                               
                    nursetypework.form_id = data[0].id;
                    nursetypework.nursetypework_id = element;
                    result_nursetypework.push(nursetypework);
                    nursetypework = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSETYPEWORK', [result_nursetypework, result_nursetypework.length]);

                let worklocation = {};
                let result_worklocation = [];
                data[7].forEach((element) => {                               
                    worklocation.form_id = data[0].id;
                    worklocation.nurseworklocation_id = element;
                    result_worklocation.push(worklocation);
                    worklocation = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEWORKLOCATION', [result_worklocation, result_worklocation.length]);
                
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_NURSE({dispatch}, data){                           
        return api.post('api/auth/nurse', data[0])
            .then((res) => {                
                //console.log(res.data);                
                
                let education = {};
                let result_education = [];
                data[1].forEach((element) => {                               
                    education.form_id = res.data.id;
                    education.nurseeducation_id = element;
                    result_education.push(education);
                    education = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEEDUCATION', [result_education, result_education.length]);

                let joboption = {};
                let result_joboption = [];
                data[2].forEach((element) => {                               
                    joboption.form_id = res.data.id;
                    joboption.nursejoboption_id = element;
                    result_joboption.push(joboption);
                    joboption = {};                                                               
                })                  
                dispatch('CREATE_FORMNURSEJOBOPTION', [result_joboption, result_joboption.length]);

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
                //console.log(res);                                                                 
                commit('SET_NURSE', res.data.data);                                     
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSEEDUCATION( {dispatch}, data){            
        return api.post('api/auth/formnurseeducation', data)
            .then((res) => {
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CREATE_FORMNURSEJOBOPTION( {dispatch}, data){            
        return api.post('api/auth/formnursejoboption', data)
            .then((res) => {
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
}

export default {  
    state,      
    mutations,
    actions
};