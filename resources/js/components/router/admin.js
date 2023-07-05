export default [
    {
        name: 'Add-message',
        path: '/add-message',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/message/Add-message.vue')
    },
    {
        name: 'Msg-sent',
        path: '/msg-sent',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/message/Msg-sent.vue')
    },
    {
        name: 'Msg-received',
        path: '/msg-received',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/message/Msg-received.vue')
    },
    {
        name: 'Messages',
        path: '/message',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/message/Messages.vue')
    },    
    {
        name: 'Users',
        path: '/users',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/Users.vue')
    },        
    {
        name: 'Languages',
        path: '/languages',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Languages.vue')
    },
    {
        name: 'Change-language',
        path: '/change-language',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-language.vue')
    },
    {
        name: 'Children',
        path: '/children',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Children.vue')
    },
    {
        name: 'Change-children',
        path: '/change-children',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-children.vue')
    },
    {
        name: 'Agegroup',
        path: '/agegroup',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Agegroup.vue')
    },
    {
        name: 'Change-agegroup',
        path: '/change-agegroup',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-agegroup.vue')
    },
    {
        name: 'Alcohol',
        path: '/alcohol',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Alcohol.vue')
    },
    {
        name: 'Change-alcohol',
        path: '/change-alcohol',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-alcohol.vue')
    },
    {
        name: 'Babysittingdutie',
        path: '/babysittingdutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Babysittingdutie.vue')
    },
    {
        name: 'Change-babysittingdutie',
        path: '/change-babysittingdutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-babysittingdutie.vue')
    },
    {
        name: 'City',
        path: '/city',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/City.vue')
    },
    {
        name: 'Change-city',
        path: '/change-city',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-city.vue')
    },
    {
        name: 'Country',
        path: '/country',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Country.vue')
    },
    {
        name: 'Change-country',
        path: '/change-country',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-country.vue')
    },
    {
        name: 'Criminal',
        path: '/criminal',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Criminal.vue')
    },
    {
        name: 'Change-criminal',
        path: '/change-criminal',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-criminal.vue')
    },
    {
        name: 'Diagnose',
        path: '/diagnose',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Diagnose.vue')
    },
    {
        name: 'Change-diagnose',
        path: '/change-diagnose',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-diagnose.vue')
    },
    {
        name: 'Education',
        path: '/education',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Education.vue')
    },
    {
        name: 'Change-education',
        path: '/change-education',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-education.vue')
    },
    {
        name: 'Employment',
        path: '/employment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Employment.vue')
    },
    {
        name: 'Change-employment',
        path: '/change-employment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-employment.vue')
    },
    {
        name: 'Experience',
        path: '/experience',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Experience.vue')
    },
    {
        name: 'Change-experience',
        path: '/change-experience',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-experience.vue')
    },
    {
        name: 'Hourlypayment',
        path: '/hourlypayment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Hourlypayment.vue')
    },
    {
        name: 'Change-hourlypayment',
        path: '/change-hourlypayment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-hourlypayment.vue')
    },
    {
        name: 'Housekeeperdutie',
        path: '/housekeeperdutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Housekeeperdutie.vue')
    },
    {
        name: 'Change-housekeeperdutie',
        path: '/change-housekeeperdutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-housekeeperdutie.vue')
    },
    {
        name: 'Housekeeperpreference',
        path: '/housekeeperpreference',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Housekeeperpreference.vue')
    },
    {
        name: 'Change-housekeeperpreference',
        path: '/change-housekeeperpreference',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-housekeeperpreference.vue')
    },
    {
        name: 'Housekeepertypeofwork',
        path: '/housekeepertypeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Housekeepertypeofwork.vue')
    },
    {
        name: 'Change-housekeepertypeofwork',
        path: '/change-housekeepertypeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-housekeepertypeofwork.vue')
    },
    {
        name: 'Joboption',
        path: '/joboption',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Joboption.vue')
    },
    {
        name: 'Change-joboption',
        path: '/change-joboption',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-joboption.vue')
    },
    {
        name: 'Monthlypayment',
        path: '/monthlypayment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Monthlypayment.vue')
    },
    {
        name: 'Change-monthlypayment',
        path: '/change-monthlypayment',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-monthlypayment.vue')
    },
    {
        name: 'Moving',
        path: '/moving',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Moving.vue')
    },
    {
        name: 'Change-moving',
        path: '/change-moving',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-moving.vue')
    },    
    {
        name: 'Nursedutie',
        path: '/nursedutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Nursedutie.vue')
    },
    {
        name: 'Change-nursedutie',
        path: '/change-nursedutie',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-nursedutie.vue')
    },
    {
        name: 'Nursetypeofwork',
        path: '/nursetypeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Nursetypeofwork.vue')
    },
    {
        name: 'Change-nursetypeofwork',
        path: '/change-nursetypeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-nursetypeofwork.vue')
    },
    {
        name: 'Nursingskill',
        path: '/nursingskill',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Nursingskill.vue')
    },
    {
        name: 'Change-nursingskill',
        path: '/change-nursingskill',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-nursingskill.vue')
    },
    {
        name: 'Recommendation',
        path: '/recommendation',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Recommendation.vue')
    },
    {
        name: 'Change-recommendation',
        path: '/change-recommendation',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-recommendation.vue')
    },
    {
        name: 'Religion',
        path: '/religion',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Religion.vue')
    },
    {
        name: 'Change-religion',
        path: '/change-religion',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-religion.vue')
    },
    {
        name: 'Schedule',
        path: '/schedule',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Schedule.vue')
    },
    {
        name: 'Change-schedule',
        path: '/change-schedule',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-schedule.vue')
    },
    {
        name: 'Smoking',
        path: '/smoking',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Smoking.vue')
    },
    {
        name: 'Change-smoking',
        path: '/change-smoking',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-smoking.vue')
    },
    {
        name: 'Status',
        path: '/status',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Status.vue')
    },
    {
        name: 'Change-status',
        path: '/change-status',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-status.vue')
    },
    {
        name: 'Typeofwork',
        path: '/typeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Typeofwork.vue')
    },
    {
        name: 'Change-typeofwork',
        path: '/change-typeofwork',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-typeofwork.vue')
    },
    {
        name: 'Worklocation',
        path: '/worklocation',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Worklocation.vue')
    },
    {
        name: 'Change-worklocation',
        path: '/change-worklocation',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-worklocation.vue')
    },
    {
        name: 'Workperiod',
        path: '/workperiod',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/data/Workperiod.vue')
    },
    {
        name: 'Change-workperiod',
        path: '/change-workperiod',
        meta: {layout: 'Admin'},
        component: () =>import('../../pages/admin/change-data/Change-workperiod.vue')
    }
]

