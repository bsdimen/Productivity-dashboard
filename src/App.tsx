import { Suspense, lazy } from 'react';
import { RouterProvider, Route, createBrowserRouter, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from "./CONTEXTS/authContextServ";

// Lazy load your components
const Home = lazy(() => import('./PAGES/home'));
const SignUp = lazy(() => import('./COMPONENTS/ui/signUp'));
const Login = lazy(() => import('./COMPONENTS/ui/login'));
const ProtectedRoute = lazy(() => import('./COMPONENTS/Modules/ProtectedRoute'));
const Dashboard = lazy(() => import('./PAGES/dashboard'));
const Promodo = lazy(() => import('./PAGES/promodo'));
const Framework = lazy(() => import('./PAGES/framework'));
const Logout = lazy(() => import('./COMPONENTS/ui/logout'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>, // Home component with fallback
    children: [
      {
        path: 'signup',
        element: <Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>,
      },
      {
        path: 'login',
        element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute element={<Dashboard />} /></Suspense>,
  },
  {
    path: '/promodo',
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute element={<Promodo />} /></Suspense>,
  },
  {
    path: '/framework',
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute element={<Framework />} /></Suspense>,
  },
  {
    path: '/logout',
    element: <Suspense fallback={<div>Loading...</div>}><ProtectedRoute element={<Logout />} /></Suspense>,
  },
]);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
