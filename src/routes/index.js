import profile from "../pages/profile";
import home from "../pages/home";
import PersonalProfile from "../pages/PersonalProfile";

const routes = [
    {
        path: '/',
        component: home,
        name: 'Home'
    },
    {
        path: '/profile',
        component: profile,
        name: 'Profile'
    },
    {
        path: '/profile/:id',
        component: PersonalProfile,
        name: 'PersonalProfile'
    }
]
export default routes
