import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { Main } from "./pages/Main/Main";
import { Signup } from "./pages/Signup/Signup";
import { Signin } from "./pages/Signin/Signin";
import { Catalog } from "./pages/Catalog/Catalog";
import { Profile } from "./pages/Profile/Profile";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { CartPage } from "./pages/Cart/Cart";
import{ FavoritesPage } from "./pages/Favorites/Favorites"
import { store } from "./redux/store";
import { AddNewProduct } from "./pages/AddNewProduct/AddNewProduct";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'signin',
          element: <Signin />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'catalog',
          element: <Catalog />,
        },
        {
          path: 'catalog/:productID',
          element: <ProductDetail />,
        },
        {
          path: 'favorites',
          element: <FavoritesPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'add-new-product',
          element: <AddNewProduct />,
        },
      ],
    },
  ],
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)

