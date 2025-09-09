import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './App';
import ErrorPage from "./error-page";

import Contacts from './pages/Contacts';
import Home from './components/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Users from './pages/Users';
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },

  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
