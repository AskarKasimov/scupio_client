import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.scss";

import App from './App';
import Authorization from './Authorization/Authorization';
import Registration from './Registration/Registration';
import Authentification from './Authentification/Authentification';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentification />,
    children: [
      {
        index: true,
        element: <Authorization />
      },
      {
        path: "sign-up",
        element: <Registration />
      },
      {
        path: "app",
        element: <App />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);