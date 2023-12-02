import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  Login,
  Register,
  Dashboard,
  HomeLayout,
  Error,
  AddEmployees,
  AllEmployees,
  Profile,
  EditEmployee,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { loader as allEmployeesLoader } from "./pages/AllEmployees";
import { action as editEmployeeAction } from "./pages/AddEmployees";
import { loader as editLoader } from "./pages/EditEmployee";
import { action as editAction } from "./pages/EditEmployee";
import { action as deleteAction } from "./pages/DeleteEmployee";
import { action as profileAction } from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddEmployees />,
            action: editEmployeeAction,
          },
          {
            path: "all-employees",
            element: <AllEmployees />,
            loader: allEmployeesLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "edit/:id",
            element: <EditEmployee />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "delete/:id",
            action: deleteAction,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
