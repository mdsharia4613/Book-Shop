import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Dasboard from './Components/Daaboard/Dasboard.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
     
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json').then(res => res.json())
      },

      {
        path:'Dasboard',
        element: <Dasboard></Dasboard>
      },
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
