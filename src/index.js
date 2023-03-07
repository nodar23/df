import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { Main } from "./pages/Main";
import { Signup } from "./pages/Signup/Signup";
import { Signin } from "./pages/Signin/Signin";
import { Catalog } from "./pages/Catalog";
import { Profile } from "./pages/Profile";
import { ProductsPage } from "./pages/ProductsPage";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import store from "./redux/store";

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
          path: 'main',
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
          path: 'catalog',
          element: <Catalog />,
        },
        {
          path: 'product_page',
          element: <ProductsPage />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'favorites',
          element: <Favorites />,
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

