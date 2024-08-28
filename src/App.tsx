import React from 'react';
import {RouterProvider,Routes,Route,createBrowserRouter,createRoutesFromElements, Navigate } from 'react-router-dom';


import Home from './PAGES/home';

import SignUp from './COMPONENTS/ui/signUp';
import Login from './COMPONENTS/ui/login';
import ProtectedRoute from './COMPONENTS/Modules/ProtectedRoute ';
import Dashboard from './PAGES/dashboard';
import Promodo from './PAGES/promodo';
import Tasks from './PAGES/tasks';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<Home />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/promodo" element={<ProtectedRoute element={<Promodo />} />} />
      <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} />} />


    </>

  )
);
 
        

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
