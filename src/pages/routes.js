import { Navigate, useRoutes } from 'react-router-dom'; 
import DashboardLayout from "./layouts/DashboardLayout"; 
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Fetchlist from './fetchlist';
import Todo from './todo';




const Routes = () => { return useRoutes([
{

path: '/',

element: <DashboardLayout />, children: [
{ path: '', element: <Dashboard /> },

]

},

{path: '/404', element: <NotFound/>},

{path:'*', element: <Navigate to="/404" replace/>},

{path: '/todo', element: <Todo/>},

{path: '/fetchlist', element: <Fetchlist/>}

])

}




export default Routes;


