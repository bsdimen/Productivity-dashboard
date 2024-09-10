import React from 'react';
import { RouterProvider, Routes, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './PAGES/home';
import SignUp from './COMPONENTS/ui/signUp';
import Login from './COMPONENTS/ui/login';
import ProtectedRoute from './COMPONENTS/Modules/ProtectedRoute';
import Dashboard from './PAGES/dashboard';
import Promodo from './PAGES/promodo';
import Framework from './PAGES/framework';
import Logout from './COMPONENTS/ui/logout';

const queryClient = new QueryClient();

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
      <Route path="/framework" element={<ProtectedRoute element={<Framework />} />} />
      <Route path='/logout' element={< ProtectedRoute element={<Logout />} />} />


    </>

  )
);



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
