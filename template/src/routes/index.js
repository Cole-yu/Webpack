const ResumeV1 = () => import(/* webpackChunkName: "resume_v1" */'@/views/resume_v1');
const ResumeV2 = () => import(/* webpackChunkName: "resume_v2" */'@/views/resume_v2');

const Ball = () => import(/* webpackChunkName: "ball" */'@/views/3d/ball');
const Room = () => import(/* webpackChunkName: "room" */'@/views/3d/room');

const DesignMode = () => import(/* webpackChunkName: "designMode" */'@/views/DesignMode');

const routes = [
    { 
        path: '*', 
        redirect: '/'
    },
    {
        path: '/',
        // redirect: "/resumev1",
        redirect: {
            name: "DesignMode"
        }
    },
    {
        path: '/resumev1',
        name: "resume_v1",
        component: ResumeV1,
    },
    {
        path: '/resumev2',
        name: "resume_v2",
        component: ResumeV2,
    },
    {
        path: '/ball',
        name: "Ball",
        component: Ball,
    },
    {
        path: '/room',
        name: "Room",
        component: Room,
    },
    {
        path: '/designMode',
        name: "DesignMode",
        component: DesignMode,
        children: [
            {
                path: '',
                component: ()=>import(/* webpackChunkName: "Singleton" */'@/views/designMode/Singleton')
            },
            {
              path: 'singleton',
              name: 'singleton', 
              component: ()=>import(/* webpackChunkName: "Singleton" */'@/views/designMode/Singleton')
            },
            {
                path: 'factory',
                name: 'factory', 
                component: ()=>import(/* webpackChunkName: "Factory" */'@/views/designMode/Factory')
            },
            {
                path: 'prototype',
                name: 'prototype', 
                component: ()=>import(/* webpackChunkName: "Prototype" */'@/views/designMode/Prototype')
            },
        ]
    },
]

export default routes;