import {RouterProvider,Routes,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';


import Home from './PAGES/home';

import SignUp from './COMPONENTS/ui/signUp';
import Login from './COMPONENTS/ui/login';
import Dashboard from './PAGES/dashboard';
import Promodo from './PAGES/promodo';
import Tasks from './PAGES/tasks';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/promodo" element={<Promodo />} />
      <Route path="/tasks" element={<Tasks />} />


    </>

  )
);
 
        

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
