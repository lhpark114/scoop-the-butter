import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Process from './pages/Process';
import Location from './pages/Location';
import Contact from './pages/Contact';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/new', element: <NewProduct /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/about', element: <About /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/process', element: <Process /> },
      { path: '/location', element: <Location /> },
      { path: '/contact', element: <Contact /> },
      { path: '/carts', element: <MyCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
