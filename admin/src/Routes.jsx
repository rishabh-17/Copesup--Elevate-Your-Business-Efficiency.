import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  OrganizationList,
  CreateOrganization,
  OrganizationDetails,
  EditOrganization,
} from "./pages/Organizations";
import { UserList, CreateUser, UserDetails, EditUser } from "./pages/Users";
import { Attendence } from "./pages/Attendence";
import { RolesList } from "./pages/Roles";
import Mainlayout from "./components/Mainlayout";
import LeavesRequests from "./pages/Leave/LeaveRequests";
function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Mainlayout selectedKey={"1"}>
          <Dashboard />
        </Mainlayout>
      ),
    },

    {
      path: "roles",
      element: (
        <Mainlayout selectedKey={"2"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <RolesList />,
        },
      ],
    },
    {
      path: "users",
      element: (
        <Mainlayout selectedKey={"3"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <UserList />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "details/:id",
          element: <UserDetails />,
        },
        {
          path: "edit/:id",
          element: <EditUser />,
        },
      ],
    },

    {
      path: "attendence",
      element: (
        <Mainlayout selectedKey={"4"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <Attendence />,
        },
      ],
    },
    {
      path: "leave",
      element: (
        <Mainlayout selectedKey={"5"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <LeavesRequests />,
        },
      ],
    },
  ]);
  return element;
}

export default Routes;
