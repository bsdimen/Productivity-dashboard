import {RouterProvider,Routes,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';


import RootLayout from './COMPONENTS/RootLayout'
import SignUp from './PAGES/signUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SignUp />}/>
  )
);
 
        

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
