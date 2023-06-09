import Dashboard from './components/Dashboard.vue';
import ListAppointments from './pages/appointments/ListAppointments.vue';
import UserList from './pages/users/UserList.vue';
import UpdateSetting from './pages/settings/UpdateSetting.vue';
import UpdateProfile from './pages/profile/UpdateProfile.vue';

export default [
    // Dashboard
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard
    },
    // Appointments
    {
        path: '/admin/appointments',
        name: 'admin.appointments',
        component: ListAppointments
    },
    // Users
    {
        path: '/admin/users',
        name: 'admin.users',
        component: UserList
    },
    // Settings
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: UpdateSetting
    },
    // Profile
    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: UpdateProfile
    },
]
