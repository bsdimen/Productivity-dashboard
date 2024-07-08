import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Login from './PAGES/login';
import RootLayout from './COMPONENTS/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
       <Route index element={<Login />}/>
    </Route>
    )
)
        

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
