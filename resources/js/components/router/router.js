import {createWebHistory, createRouter} from "vue-router";
import user from './user';
import cabinet from './cabinet';
import admin from './admin';

export const routes = user.concat(cabinet, admin);

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {    
    if(!localStorage.access_token){
        if(to.name === 'Login' || to.name === 'Register' || to.name === 'Register-menu' || to.name === 'Register-employer' || to.name === 'Home'){
            return next()
        } else {
            return next({
                name: 'Login'
            })
        }
    }

    if((to.name === 'Users' || to.name === 'Languages' || to.name === 'Change-language' || to.name === 'Agegroup' || to.name === 'Change-agegroup' || to.name === 'Alcohol' || to.name === 'Change-alcohol' || to.name === 'Babysittingdutie' || to.name === 'Change-babysittingdutie' || to.name === 'City' || to.name === 'Change-city' || to.name === 'Country' || to.name === 'Change-country' || to.name === 'Criminal' || to.name === 'Change-criminal' || to.name === 'Diagnose' || to.name === 'Change-diagnose' || to.name === 'Education' || to.name === 'Change-education' || to.name === 'Employment' || to.name === 'Change-employment' || to.name === 'Experience' || to.name === 'Change-experience' || to.name === 'Hourlypayment' || to.name === 'Change-hourlypayment' || to.name === 'Housekeeperdutie' || to.name === 'Change-housekeeperdutie' || to.name === 'Housekeeperpreference' || to.name === 'Change-housekeeperpreference' || to.name === 'Housekeepertypeofwork' || to.name === 'Change-housekeepertypeofwork' || to.name === 'Joboption' || to.name === 'Change-joboption' || to.name === 'Monthlypayment' || to.name === 'Change-monthlypayment' || to.name === 'Moving' || to.name === 'Change-moving' || to.name === 'Nursedutie' || to.name === 'Change-nursedutie' || to.name === 'Nursetypeofwork' || to.name === 'Change-nursetypeofwork' || to.name === 'Nursingskill' || to.name === 'Change-nursingskill' || to.name === 'Recommendation' || to.name === 'Change-recommendation' || to.name === 'Religion' || to.name === 'Change-religion' || to.name === 'Schedule' || to.name === 'Change-schedule' || to.name === 'Smoking' || to.name === 'Change-smoking' || to.name === 'Status' || to.name === 'Change-status' || to.name === 'Typeofwork' || to.name === 'Change-typeofwork' || to.name === 'Worklocation' || to.name === 'Change-worklocation' || to.name === 'Workperiod' || to.name === 'Change-workperiod') && localStorage.access_token){
        let user = JSON.parse(localStorage.user)        
        if(user.role !== 'Администратор') {
            return next({
                name: 'Home'
            })
        }        
    }

    if((to.name === 'Login' || to.name === 'Register'|| to.name === 'Register-menu' || to.name === 'Register-employer') && localStorage.access_token){
        return next({
            name: 'Home'
        })
    }

    

    /*if((to.name === 'Post' || to.name === 'MessageInfo' || to.name === 'UsersInfo') && adminEmail !== 'admin@admin.com'){
        return next({
                name: 'About'
            })
    }*/

    next();
});

export default router;