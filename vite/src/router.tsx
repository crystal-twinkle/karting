import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MainPage } from './pages/Main-page';
import {Layout} from './components/Layout';


export enum RouterPage {
  MAIN = '/',
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: RouterPage.MAIN,
        element: <MainPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
