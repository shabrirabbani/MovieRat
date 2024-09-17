import './App.css'
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './Template';
import Search from './pages/Search/Search';
import Error from './pages/Error';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Template/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/movie/:id',
        element: <Details/>
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/tv/:id',
        element: <Details/>
      }
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
])

function App() {
  return (
   <RouterProvider router={route} />
  );
}

export default App
