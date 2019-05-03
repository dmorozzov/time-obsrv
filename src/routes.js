import SignUpPage from "./components/common/SignUpPage";
import LoginPage from "./components/common/LoginPage";
import EventsPage from "./components/event/EventsPage";

export default [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/sign-up',
        component: SignUpPage
    },
    {
        path: '/',
        component: EventsPage,
        secure: true,
        // routes: [
        //     {
        //         path: "/details",
        //         component: TimerDetails
        //     }
        // ]
    }
];
