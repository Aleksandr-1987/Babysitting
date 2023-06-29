import api from "../api";

let state = {
    languages: {},
    language: {},
    agegroups: {},
    agegroup: {},
    childrens: {},
    children: {},
    alcohols: {},
    alcohol: {},
    babysittingduties: {},
    babysittingdutie: {},
    citys: {},
    city: {},
    countrys: {},
    country: {},
    criminals: {},
    criminal: {},
    diagnoses: {},
    diagnose: {},              
    educations: {},
    education: {},
    employments: {},
    employment: {},
    experiences: {},
    experience: {},
    hourlypayments: {},
    hourlypayment: {},
    housekeeperduties: {},
    housekeeperdutie: {},
    housekeeperpreferences: {},
    housekeeperpreference: {},
    housekeepertypeofworks: {},
    housekeepertypeofwork: {},
    joboptions: {},
    joboption: {},
    monthlypayments: {},
    monthlypayment: {},
    movings: {},
    moving: {},
    nurseduties: {},
    nursedutie: {},
    nursetypeofworks: {},
    nursetypeofwork: {},
    nursingskills: {},
    nursingskill: {},
    recommendations: {},
    recommendation: {},
    religions: {},
    religion: {},
    schedules: {},
    schedule: {},
    smokings: {},
    smoking: {},
    statuss: {},
    status: {},
    typeofworks: {},
    typeofwork: {},
    worklocations: {},
    worklocation: {},
    workperiods: {},
    workperiod: {},
};

let mutations = {
    SET_LANGUAGES: (state, res) => {
        state.languages = res;            
    },
    SET_LANGUAGE: (state, res) => {
        state.language = res;            
    },
    SET_AGEGROUPS: (state, res) => {
        state.agegroups = res;            
    },
    SET_AGEGROUP: (state, res) => {
        state.agegroup = res;            
    },
    SET_CHILDRENS: (state, res) => {
        state.childrens = res;            
    },
    SET_CHILDREN: (state, res) => {
        state.children = res;            
    },
    SET_ALCOHOLS: (state, res) => {
        state.alcohols = res;            
    },
    SET_ALCOHOL: (state, res) => {
        state.alcohol = res;            
    },
    SET_BABYSITTINGDUTIES: (state, res) => {
        state.babysittingduties = res;            
    },
    SET_BABYSITTINGDUTIE: (state, res) => {
        state.babysittingdutie = res;            
    },
    SET_CITYS: (state, res) => {
        state.citys = res;            
    },
    SET_CITY: (state, res) => {
        state.city = res;            
    },
    SET_COUNTRYS: (state, res) => {
        state.countrys = res;            
    },
    SET_COUNTRY: (state, res) => {
        state.country = res;            
    },
    SET_CRIMINALS: (state, res) => {
        state.criminals = res;            
    },
    SET_CRIMINAL: (state, res) => {
        state.criminal = res;            
    },
    SET_DIAGNOSES: (state, res) => {
        state.diagnoses = res;            
    },
    SET_DIAGNOSE: (state, res) => {
        state.diagnose = res;            
    },
    SET_EDUCATIONS: (state, res) => {
        state.educations = res;            
    },
    SET_EDUCATION: (state, res) => {
        state.education = res;            
    },
    SET_EMPLOYMENTS: (state, res) => {
        state.employments = res;            
    },
    SET_EMPLOYMENT: (state, res) => {
        state.employment = res;            
    },
    SET_EXPERIENCES: (state, res) => {
        state.experiences = res;            
    },
    SET_EXPERIENCE: (state, res) => {
        state.experience = res;            
    },
    SET_HOURLYPAYMENTS: (state, res) => {
        state.hourlypayments = res;            
    },
    SET_HOURLYPAYMENT: (state, res) => {
        state.hourlypayment = res;            
    },
    SET_HOUSEKEEPERDUTIES: (state, res) => {
        state.housekeeperduties = res;            
    },
    SET_HOUSEKEEPERDUTIE: (state, res) => {
        state.housekeeperdutie = res;            
    },
    SET_HOUSEKEEPERPREFERENCES: (state, res) => {
        state.housekeeperpreferences = res;            
    },
    SET_HOUSEKEEPERPREFERENCE: (state, res) => {
        state.housekeeperpreference = res;            
    },
    SET_HOUSEKEEPERTYPEOFWORKS: (state, res) => {
        state.housekeepertypeofworks = res;            
    },
    SET_HOUSEKEEPERTYPEOFWORK: (state, res) => {
        state.housekeepertypeofwork = res;            
    },
    SET_JOBOPTIONS: (state, res) => {
        state.joboptions = res;            
    },
    SET_JOBOPTION: (state, res) => {
        state.joboption = res;            
    },
    SET_MONTHLYPAYMENTS: (state, res) => {
        state.monthlypayments = res;            
    },
    SET_MONTHLYPAYMENT: (state, res) => {
        state.monthlypayment = res;            
    },
    SET_MOVINGS: (state, res) => {
        state.movings = res;            
    },
    SET_MOVING: (state, res) => {
        state.moving = res;            
    },
    SET_NURSEDUTIES: (state, res) => {
        state.nurseduties = res;            
    },
    SET_NURSEDUTIE: (state, res) => {
        state.nursedutie = res;            
    },
    SET_NURSETYPEOFWORKS: (state, res) => {
        state.nursetypeofworks = res;            
    },
    SET_NURSETYPEOFWORK: (state, res) => {
        state.nursetypeofwork = res;            
    },
    SET_NURSINGSKILLS: (state, res) => {
        state.nursingskills = res;            
    },
    SET_NURSINGSKILL: (state, res) => {
        state.nursingskill = res;            
    },
    SET_RECOMMENDATIONS: (state, res) => {
        state.recommendations = res;            
    },
    SET_RECOMMENDATION: (state, res) => {
        state.recommendation = res;            
    },
    SET_RELIGIONS: (state, res) => {
        state.religions = res;            
    },
    SET_RELIGION: (state, res) => {
        state.religion = res;            
    },
    SET_SCHEDULES: (state, res) => {
        state.schedules = res;            
    },
    SET_SCHEDULE: (state, res) => {
        state.schedule = res;            
    },
    SET_SMOKINGS: (state, res) => {
        state.smokings = res;            
    },
    SET_SMOKING: (state, res) => {
        state.smoking = res;            
    },
    SET_STATUSS: (state, res) => {
        state.statuss = res;            
    },
    SET_STATUS: (state, res) => {
        state.status = res;            
    },
    SET_TYPEOFWORKS: (state, res) => {
        state.typeofworks = res;            
    },
    SET_TYPEOFWORK: (state, res) => {
        state.typeofwork = res;            
    },
    SET_WORKLOCATIONS: (state, res) => {
        state.worklocations = res;            
    },
    SET_WORKLOCATION: (state, res) => {
        state.worklocation = res;            
    },
    SET_WORKPERIODS: (state, res) => {
        state.workperiods = res;            
    },
    SET_WORKPERIOD: (state, res) => {
        state.workperiod = res;            
    },
};

let actions = {
    DELETE_CHILDREN({dispatch}, data){                       
        return api.post('api/auth/children/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_CHILDRENS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_CHILDREN( data){                       
        return api.put('api/auth/children/' + data.state.children.id, data.state.children)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_CHILDREN({commit}, data){
        commit('SET_CHILDREN', data);
    },
    GET_CHILDRENS({commit}){
        return api.get('api/auth/children')
            .then(res => {                    
                commit('SET_CHILDRENS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_CHILDREN({dispatch}, data){            
        return api.post('api/auth/children', data)
            .then((res) => {                    
                dispatch('GET_CHILDRENS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_WORKPERIOD({dispatch}, data){                       
        return api.post('api/auth/workperiod/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_WORKPERIODS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_WORKPERIOD( data){                       
        return api.put('api/auth/workperiod/' + data.state.workperiod.id, data.state.workperiod)
            .then((res) => {                  
                return res;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    GET_WORKPERIOD({commit}, data){
        commit('SET_WORKPERIOD', data);
    },
    GET_WORKPERIODS({commit}){
        return api.get('api/auth/workperiod')
            .then(res => {                    
                commit('SET_WORKPERIODS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_WORKPERIOD({dispatch}, data){            
        return api.post('api/auth/workperiod', data)
            .then((res) => {                    
                dispatch('GET_WORKPERIODS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_WORKLOCATION({dispatch}, data){                       
        return api.post('api/auth/worklocation/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_WORKLOCATIONS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_WORKLOCATION( data){                       
        return api.put('api/auth/worklocation/' + data.state.worklocation.id, data.state.worklocation)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_WORKLOCATION({commit}, data){
        commit('SET_WORKLOCATION', data);
    },
    GET_WORKLOCATIONS({commit}){
        return api.get('api/auth/worklocation')
            .then(res => {                    
                commit('SET_WORKLOCATIONS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_WORKLOCATION({dispatch}, data){            
        return api.post('api/auth/worklocation', data)
            .then((res) => {                    
                dispatch('GET_WORKLOCATIONS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_TYPEOFWORK({dispatch}, data){                       
        return api.post('api/auth/typeofwork/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_TYPEOFWORKS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_TYPEOFWORK( data){                       
        return api.put('api/auth/typeofwork/' + data.state.typeofwork.id, data.state.typeofwork)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_TYPEOFWORK({commit}, data){
        commit('SET_TYPEOFWORK', data);
    },
    GET_TYPEOFWORKS({commit}){
        return api.get('api/auth/typeofwork')
            .then(res => {                    
                commit('SET_TYPEOFWORKS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_TYPEOFWORK({dispatch}, data){            
        return api.post('api/auth/typeofwork', data)
            .then((res) => {                    
                dispatch('GET_TYPEOFWORKS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_STATUS({dispatch}, data){                       
        return axios.post('api/status/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_STATUSS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_STATUS( data){                       
        return axios.put('api/status/' + data.state.status.id, data.state.status)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_STATUS({commit}, data){
        commit('SET_STATUS', data);
    },
    GET_STATUSS({commit}){
        return axios.get('api/status')
            .then(res => {                    
                commit('SET_STATUSS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_STATUS({dispatch}, data){            
        return axios.post('api/status', data)
            .then((res) => {                    
                dispatch('GET_STATUSS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_SMOKING({dispatch}, data){                       
        //return api.post('api/auth/smoking/' + data, {_method: 'DELETE'})
        return axios.post('api/smoking/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_SMOKINGS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_SMOKING( data){       
        return axios.put('api/smoking/' + data.state.smoking.id, data.state.smoking)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_SMOKING({commit}, data){
        commit('SET_SMOKING', data);
    },
    GET_SMOKINGS({commit}){        
        return axios.get('api/smoking')
            .then(res => {                    
                commit('SET_SMOKINGS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_SMOKING({dispatch}, data){        
        return axios.post('api/smoking', data)
            .then((res) => {                    
                dispatch('GET_SMOKINGS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_SCHEDULE({dispatch}, data){                       
        return api.post('api/auth/schedule/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_SCHEDULES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_SCHEDULE( data){                       
        return api.put('api/auth/schedule/' + data.state.schedule.id, data.state.schedule)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_SCHEDULE({commit}, data){
        commit('SET_SCHEDULE', data);
    },
    GET_SCHEDULES({commit}){
        return api.get('api/auth/schedule')
            .then(res => {                    
                commit('SET_SCHEDULES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_SCHEDULE({dispatch}, data){            
        return api.post('api/auth/schedule', data)
            .then((res) => {                    
                dispatch('GET_SCHEDULES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    
    DELETE_RELIGION({dispatch}, data){                       
        return axios.post('api/religion/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_RELIGIONS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_RELIGION( data){                       
        return axios.put('api/religion/' + data.state.religion.id, data.state.religion)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_RELIGION({commit}, data){
        commit('SET_RELIGION', data);
    },
    GET_RELIGIONS({commit}){
        return axios.get('api/religion')
            .then(res => {                    
                commit('SET_RELIGIONS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_RELIGION({dispatch}, data){            
        return axios.post('api/religion', data)
            .then((res) => {                    
                dispatch('GET_RELIGIONS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_RECOMMENDATION({dispatch}, data){                       
        return api.post('api/auth/recommendation/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_RECOMMENDATIONS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_RECOMMENDATION( data){                       
        return api.put('api/auth/recommendation/' + data.state.recommendation.id, data.state.recommendation)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_RECOMMENDATION({commit}, data){
        commit('SET_RECOMMENDATION', data);
    },
    GET_RECOMMENDATIONS({commit}){
        return api.get('api/auth/recommendation')
            .then(res => {                    
                commit('SET_RECOMMENDATIONS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_RECOMMENDATION({dispatch}, data){            
        return api.post('api/auth/recommendation', data)
            .then((res) => {                    
                dispatch('GET_RECOMMENDATIONS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_NURSINGSKILL({dispatch}, data){                       
        return api.post('api/auth/nursingskill/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_NURSINGSKILLS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_NURSINGSKILL( data){                       
        return api.put('api/auth/nursingskill/' + data.state.nursingskill.id, data.state.nursingskill)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_NURSINGSKILL({commit}, data){
        commit('SET_NURSINGSKILL', data);
    },
    GET_NURSINGSKILLS({commit}){
        return api.get('api/auth/nursingskill')
            .then(res => {                    
                commit('SET_NURSINGSKILLS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_NURSINGSKILL({dispatch}, data){            
        return api.post('api/auth/nursingskill', data)
            .then((res) => {                    
                dispatch('GET_NURSINGSKILLS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_NURSETYPEOFWORK({dispatch}, data){                       
        return api.post('api/auth/nursetypeofwork/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_NURSETYPEOFWORKS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_NURSETYPEOFWORK( data){                       
        return api.put('api/auth/nursetypeofwork/' + data.state.nursetypeofwork.id, data.state.nursetypeofwork)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_NURSETYPEOFWORK({commit}, data){
        commit('SET_NURSETYPEOFWORK', data);
    },
    GET_NURSETYPEOFWORKS({commit}){
        return api.get('api/auth/nursetypeofwork')
            .then(res => {                    
                commit('SET_NURSETYPEOFWORKS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_NURSETYPEOFWORK({dispatch}, data){            
        return api.post('api/auth/nursetypeofwork', data)
            .then((res) => {                    
                dispatch('GET_NURSETYPEOFWORKS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_NURSEDUTIE({dispatch}, data){                       
        return api.post('api/auth/nursedutie/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_NURSEDUTIES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_NURSEDUTIE( data){                       
        return api.put('api/auth/nursedutie/' + data.state.nursedutie.id, data.state.nursedutie)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_NURSEDUTIE({commit}, data){
        commit('SET_NURSEDUTIE', data);
    },
    GET_NURSEDUTIES({commit}){
        return api.get('api/auth/nursedutie')
            .then(res => {                    
                commit('SET_NURSEDUTIES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_NURSEDUTIE({dispatch}, data){            
        return api.post('api/auth/nursedutie', data)
            .then((res) => {                    
                dispatch('GET_NURSEDUTIES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_MOVING({dispatch}, data){                       
        return axios.post('api/moving/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_MOVINGS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_MOVING( data){                       
        return axios.put('api/moving/' + data.state.moving.id, data.state.moving)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_MOVING({commit}, data){
        commit('SET_MOVING', data);
    },
    GET_MOVINGS({commit}){
        return axios.get('api/moving')
            .then(res => {                    
                commit('SET_MOVINGS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_MOVING({dispatch}, data){            
        return axios.post('api/moving', data)
            .then((res) => {                    
                dispatch('GET_MOVINGS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_MONTHLYPAYMENT({dispatch}, data){                       
        return api.post('api/auth/monthlypayment/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_MONTHLYPAYMENTS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_MONTHLYPAYMENT( data){                       
        return api.put('api/auth/monthlypayment/' + data.state.monthlypayment.id, data.state.monthlypayment)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_MONTHLYPAYMENT({commit}, data){
        commit('SET_MONTHLYPAYMENT', data);
    },
    GET_MONTHLYPAYMENTS({commit}){
        return api.get('api/auth/monthlypayment')
            .then(res => {                    
                commit('SET_MONTHLYPAYMENTS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_MONTHLYPAYMENT({dispatch}, data){            
        return api.post('api/auth/monthlypayment', data)
            .then((res) => {                    
                dispatch('GET_MONTHLYPAYMENTS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_JOBOPTION({dispatch}, data){                       
        return api.post('api/auth/joboption/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_JOBOPTIONS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_JOBOPTION( data){                       
        return api.put('api/auth/joboption/' + data.state.joboption.id, data.state.joboption)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_JOBOPTION({commit}, data){
        commit('SET_JOBOPTION', data);
    },
    GET_JOBOPTIONS({commit}){
        return api.get('api/auth/joboption')
            .then(res => {                    
                commit('SET_JOBOPTIONS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_JOBOPTION({dispatch}, data){            
        return api.post('api/auth/joboption', data)
            .then((res) => {                    
                dispatch('GET_JOBOPTIONS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_HOUSEKEEPERTYPEOFWORK({dispatch}, data){                       
        return api.post('api/auth/housekeepertypeofwork/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_HOUSEKEEPERTYPEOFWORKS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_HOUSEKEEPERTYPEOFWORK( data){                       
        return api.put('api/auth/housekeepertypeofwork/' + data.state.housekeepertypeofwork.id, data.state.housekeepertypeofwork)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_HOUSEKEEPERTYPEOFWORK({commit}, data){
        commit('SET_HOUSEKEEPERTYPEOFWORK', data);
    },
    GET_HOUSEKEEPERTYPEOFWORKS({commit}){
        return api.get('api/auth/housekeepertypeofwork')
            .then(res => {                    
                commit('SET_HOUSEKEEPERTYPEOFWORKS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_HOUSEKEEPERTYPEOFWORK({dispatch}, data){            
        return api.post('api/auth/housekeepertypeofwork', data)
            .then((res) => {                    
                dispatch('GET_HOUSEKEEPERTYPEOFWORKS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_HOUSEKEEPERPREFERENCE({dispatch}, data){                       
        return api.post('api/auth/housekeeperpreference/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_HOUSEKEEPERPREFERENCES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_HOUSEKEEPERPREFERENCE( data){                       
        return api.put('api/auth/housekeeperpreference/' + data.state.housekeeperpreference.id, data.state.housekeeperpreference)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_HOUSEKEEPERPREFERENCE({commit}, data){
        commit('SET_HOUSEKEEPERPREFERENCE', data);
    },
    GET_HOUSEKEEPERPREFERENCES({commit}){
        return api.get('api/auth/housekeeperpreference')
            .then(res => {                    
                commit('SET_HOUSEKEEPERPREFERENCES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_HOUSEKEEPERPREFERENCE({dispatch}, data){            
        return api.post('api/auth/housekeeperpreference', data)
            .then((res) => {                    
                dispatch('GET_HOUSEKEEPERPREFERENCES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_HOUSEKEEPERDUTIE({dispatch}, data){                       
        return api.post('api/auth/housekeeperdutie/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_HOUSEKEEPERDUTIES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_HOUSEKEEPERDUTIE( data){                       
        return api.put('api/auth/housekeeperdutie/' + data.state.housekeeperdutie.id, data.state.housekeeperdutie)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_HOUSEKEEPERDUTIE({commit}, data){
        commit('SET_HOUSEKEEPERDUTIE', data);
    },
    GET_HOUSEKEEPERDUTIES({commit}){
        return api.get('api/auth/housekeeperdutie')
            .then(res => {                    
                commit('SET_HOUSEKEEPERDUTIES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_HOUSEKEEPERDUTIE({dispatch}, data){            
        return api.post('api/auth/housekeeperdutie', data)
            .then((res) => {                    
                dispatch('GET_HOUSEKEEPERDUTIES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_HOURLYPAYMENT({dispatch}, data){                       
        return api.post('api/auth/hourlypayment/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_HOURLYPAYMENTS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_HOURLYPAYMENT( data){                       
        return api.put('api/auth/hourlypayment/' + data.state.hourlypayment.id, data.state.hourlypayment)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_HOURLYPAYMENT({commit}, data){
        commit('SET_HOURLYPAYMENT', data);
    },
    GET_HOURLYPAYMENTS({commit}){
        return api.get('api/auth/hourlypayment')
            .then(res => {                    
                commit('SET_HOURLYPAYMENTS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_HOURLYPAYMENT({dispatch}, data){            
        return api.post('api/auth/hourlypayment', data)
            .then((res) => {                    
                dispatch('GET_HOURLYPAYMENTS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_EXPERIENCE({dispatch}, data){                       
        return api.post('api/auth/experience/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_EXPERIENCES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_EXPERIENCE( data){                       
        return api.put('api/auth/experience/' + data.state.experience.id, data.state.experience)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_EXPERIENCE({commit}, data){
        commit('SET_EXPERIENCE', data);
    },
    GET_EXPERIENCES({commit}){
        return api.get('api/auth/experience')
            .then(res => {                    
                commit('SET_EXPERIENCES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_EXPERIENCE({dispatch}, data){            
        return api.post('api/auth/experience', data)
            .then((res) => {                    
                dispatch('GET_EXPERIENCES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_EMPLOYMENT({dispatch}, data){                       
        return api.post('api/auth/employment/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_EMPLOYMENTS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_EMPLOYMENT( data){                       
        return api.put('api/auth/employment/' + data.state.employment.id, data.state.employment)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_EMPLOYMENT({commit}, data){
        commit('SET_EMPLOYMENT', data);
    },
    GET_EMPLOYMENTS({commit}){
        return api.get('api/auth/employment')
            .then(res => {                    
                commit('SET_EMPLOYMENTS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_EMPLOYMENT({dispatch}, data){            
        return api.post('api/auth/employment', data)
            .then((res) => {                    
                dispatch('GET_EMPLOYMENTS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_EDUCATION({dispatch}, data){                       
        return api.post('api/auth/education/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_EDUCATIONS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_EDUCATION( data){                       
        return api.put('api/auth/education/' + data.state.education.id, data.state.education)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_EDUCATION({commit}, data){
        commit('SET_EDUCATION', data);
    },
    GET_EDUCATIONS({commit}){
        return api.get('api/auth/education')
            .then(res => {                    
                commit('SET_EDUCATIONS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_EDUCATION({dispatch}, data){            
        return api.post('api/auth/education', data)
            .then((res) => {                    
                dispatch('GET_EDUCATIONS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_DIAGNOSE({dispatch}, data){                       
        return api.post('api/auth/diagnose/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_DIAGNOSES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_DIAGNOSE( data){                       
        return api.put('api/auth/diagnose/' + data.state.diagnose.id, data.state.diagnose)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_DIAGNOSE({commit}, data){
        commit('SET_DIAGNOSE', data);
    },
    GET_DIAGNOSES({commit}){
        return api.get('api/auth/diagnose')
            .then(res => {                    
                commit('SET_DIAGNOSES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_DIAGNOSE({dispatch}, data){            
        return api.post('api/auth/diagnose', data)
            .then((res) => {                    
                dispatch('GET_DIAGNOSES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_CRIMINAL({dispatch}, data){                       
        return axios.post('api/criminal/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_CRIMINALS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_CRIMINAL( data){                       
        return axios.put('api/criminal/' + data.state.criminal.id, data.state.criminal)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_CRIMINAL({commit}, data){
        commit('SET_CRIMINAL', data);
    },
    GET_CRIMINALS({commit}){
        return axios.get('api/criminal')
            .then(res => {                    
                commit('SET_CRIMINALS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_CRIMINAL( {dispatch}, data){            
        return axios.post('api/criminal', data)
            .then((res) => {                    
                dispatch('GET_CRIMINALS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_COUNTRY({dispatch}, data){                       
        return axios.post('api/country/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_COUNTRYS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_COUNTRY( data){                       
        return axios.put('api/country/' + data.state.country.id, data.state.country)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_COUNTRY({commit}, data){
        commit('SET_COUNTRY', data);
    },
    GET_COUNTRYS({commit}){
        return axios.get('api/country')
            .then(res => {                    
                commit('SET_COUNTRYS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_COUNTRY( {dispatch}, data){            
        return axios.post('api/country', data)
            .then((res) => {                    
                dispatch('GET_COUNTRYS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_CITY({dispatch}, data){                       
        return axios.post('api/city/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_CITYS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_CITY( data){                       
        return axios.put('api/city/' + data.state.city.id, data.state.city)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_CITY({commit}, data){
        commit('SET_CITY', data);
    },
    GET_CITYS({commit}){
        return axios.get('api/city')
            .then(res => {                    
                commit('SET_CITYS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_CITY( {dispatch}, data){            
        return axios.post('api/city', data)
            .then((res) => {                    
                dispatch('GET_CITYS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_BABYSITTINGDUTIE({dispatch}, data){                       
        return api.post('api/auth/babysittingdutie/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_BABYSITTINGDUTIES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_BABYSITTINGDUTIE( data){                       
        return api.put('api/auth/babysittingdutie/' + data.state.babysittingdutie.id, data.state.babysittingdutie)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_BABYSITTINGDUTIE({commit}, data){
        commit('SET_BABYSITTINGDUTIE', data);
    },
    GET_BABYSITTINGDUTIES({commit}){
        return api.get('api/auth/babysittingdutie')
            .then(res => {                    
                commit('SET_BABYSITTINGDUTIES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_BABYSITTINGDUTIE( {dispatch}, data){            
        return api.post('api/auth/babysittingdutie', data)
            .then((res) => {                    
                dispatch('GET_BABYSITTINGDUTIES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_ALCOHOL({dispatch}, data){                       
        return axios.post('api/alcohol/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_ALCOHOLS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_ALCOHOL( data){                       
        return axios.put('api/alcohol/' + data.state.alcohol.id, data.state.alcohol)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_ALCOHOL({commit}, data){
        commit('SET_ALCOHOL', data);
    },
    GET_ALCOHOLS({commit}){
        return axios.get('api/alcohol')
            .then(res => {                    
                commit('SET_ALCOHOLS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_ALCOHOL( {dispatch}, data){            
        return axios.post('api/alcohol', data)
            .then((res) => {                    
                dispatch('GET_ALCOHOLS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_AGEGROUP({dispatch}, data){                       
        return api.post('api/auth/agegroup/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_AGEGROUPS');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_AGEGROUP( data){                       
        return api.put('api/auth/agegroup/' + data.state.agegroup.id, data.state.agegroup)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_AGEGROUP({commit}, data){
        commit('SET_AGEGROUP', data);
    },
    GET_AGEGROUPS({commit}){
        return api.get('api/auth/agegroup')
            .then(res => {                    
                commit('SET_AGEGROUPS', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_AGEGROUP( {dispatch}, data){            
        return api.post('api/auth/agegroup', data)
            .then((res) => {                    
                dispatch('GET_AGEGROUPS');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },

    DELETE_LANGUAGE({dispatch}, data){                       
        return api.post('api/auth/language/' + data, {_method: 'DELETE'})
            .then((res) => {
                dispatch('GET_LANGUAGES');                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    CHANGE_LANGUAGE(data){                       
        return api.put('api/auth/language/' + data.state.language.id, data.state.language)
            .then((res) => {                  
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
    GET_LANGUAGE({commit}, data){
        commit('SET_LANGUAGE', data);
    },
    GET_LANGUAGES({commit}){
        return api.get('api/auth/language')
            .then(res => {                    
                commit('SET_LANGUAGES', res.data);                    
                return res;
            })
            .catch(error => { console.log(error); return error; })
    }, 
    CREATE_LANGUAGE( {dispatch}, data){            
        return api.post('api/auth/language', data)
            .then((res) => {                    
                dispatch('GET_LANGUAGES');
                return res;
            })
            .catch(error => { console.log(error); return error; })
    },
};

export default {  
    state,      
    mutations,
    actions
};
