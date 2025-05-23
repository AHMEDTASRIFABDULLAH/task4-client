import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Hooks/AuthProvider";
import Err from "./Pages/Err";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Err />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
