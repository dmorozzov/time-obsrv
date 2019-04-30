import Timers from '@src/components/event/Timers';
import Login from '@src/components/common/Login';

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Timers,
        secure: true,
        // routes: [
        //     {
        //         path: "/details",
        //         component: TimerDetails
        //     }
        // ]
    }
];
