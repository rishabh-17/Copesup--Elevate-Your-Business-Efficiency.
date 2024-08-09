import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { UserList, CreateUser, UserDetails, EditUser } from "./pages/Users";
import { Attendence } from "./pages/Attendence";
import { RolesList } from "./pages/Roles";
import Mainlayout from "./components/Mainlayout";
import LeavesRequests from "./pages/Leave/LeaveRequests";
import { Shifts } from "./pages/Shifts";
import { Login } from "./pages/Login";
import {
  ExpenseDetails,
  ExpenseList,
  CreateExpense,
  EditExpense,
} from "./pages/Expence";
import {
  InventoryDetails,
  InventoryList,
  CreateInventory,
  EditInventory,
} from "./pages/Inventory";
import {
  AssetsList,
  CreateAssets,
  EditAssets,
  AssetsDetails,
} from "./pages/Assets";
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
      path: "login",
      element: <Login />,
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
    {
      path: "shifts",
      element: (
        <Mainlayout selectedKey={"6"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <Shifts />,
        },
      ],
    },
    {
      path: "expense",
      element: (
        <Mainlayout selectedKey={"7"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <ExpenseList />,
        },
        {
          path: "create",
          element: <CreateExpense />,
        },
        {
          path: "details/:id",
          element: <ExpenseDetails />,
        },
        {
          path: "edit/:id",
          element: <EditExpense />,
        },
      ],
    },
    {
      path: "inventory",
      element: (
        <Mainlayout selectedKey={"8"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <InventoryList />,
        },
        {
          path: "create",
          element: <CreateInventory />,
        },
        {
          path: "details/:id",
          element: <InventoryDetails />,
        },
        {
          path: "edit/:id",
          element: <EditInventory />,
        },
      ],
    },
    {
      path: "assets",
      element: (
        <Mainlayout selectedKey={"9"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <AssetsList />,
        },
        {
          path: "create",
          element: <CreateAssets />,
        },
        {
          path: "details/:id",
          element: <AssetsDetails />,
        },
        {
          path: "edit/:id",
          element: <EditAssets />,
        },
      ],
    },
  ]);
  return element;
}

export default Routes;
