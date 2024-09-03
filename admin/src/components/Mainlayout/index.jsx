import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PieChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SnippetsOutlined,
  BellOutlined,
  SettingOutlined,
  UnlockOutlined,
  CalendarOutlined,
  PoundCircleOutlined,
  BankOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
import NotificationDrawer from "../NotificatonDrawer";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const App = ({ children, selectedKey }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG, motionDurationSlow },
  } = theme.useToken();
  return (
    <Layout className="w-full min-h-screen">
      <Header
        style={{
          padding: 0,
          background: "#01008A",
          color: "white",
        }}
        className="flex justify-between items-center"
      >
        <div className="flex">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
          <div className="demo-logo-vertical flex justify-center font-serif text-2xl my-5">
            Copesup
          </div>
        </div>
        <div className="mr-5 flex gap-5">
          <BellOutlined
            className="cursor-pointer text-xl"
            onClick={() => setOpenNotification(!openNotification)}
          />
          <SettingOutlined className="cursor-pointer text-xl" />
          <div className="flex gap-3 items-center cursor-pointer">
            <Avatar icon={<UserOutlined />} />
            <span className="font-bold">John Doe</span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            padding: 0,
            background: colorBgContainer,
            paddingTop: 16,
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            items={[
              {
                key: "1",
                icon: <PieChartOutlined />,
                label: "Dashboard",
                onClick: () => {
                  navigate("/");
                },
              },
              {
                key: "2",
                icon: <SnippetsOutlined />,
                label: "Organization",
                children: [
                  {
                    key: "2-1",
                    label: "Users",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "2-2",
                    label: `Roles`,
                    onClick: () => {
                      navigate("/roles");
                    },
                  },
                ],
              },
              {
                key: "3",
                icon: <SnippetsOutlined />,
                label: "HRMS",
                children: [
                  {
                    key: "3-1",
                    label: "Employess",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "3-2",
                    label: `Attendence`,
                    onClick: () => {
                      navigate("/attendence");
                    },
                  },
                  {
                    key: "3-3",
                    label: `Leaves`,
                  },
                  {
                    key: "3-4",
                    label: `Holidays`,
                  },
                  {
                    key: "3-5",
                    label: `Payroll`,
                  },
                  {
                    key: "3-6",
                    label: `Hirings`,
                  },
                  {
                    key: "3-7",
                    label: `Appraisals`,
                  },
                  {
                    key: "3-8",
                    label: `Referals`,
                  },
                  {
                    key: "3-8",
                    label: `Benificiaries`,
                  },
                ],
              },
              {
                key: "4",
                icon: <SnippetsOutlined />,
                label: "Finance",
                children: [
                  {
                    key: "4-1",
                    label: "Accounting",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "4-2",
                    label: `Invoicing`,
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "4-2",
                    label: `Expenses`,
                    onClick: () => {
                      navigate("/expense");
                    },
                  },
                  {
                    key: "4-2",
                    label: `Sign`,
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                ],
              },
              {
                key: "5",
                icon: <SnippetsOutlined />,
                label: "Supply Chain",
                children: [
                  {
                    key: "5-1",
                    label: "Assets",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "5-2",
                    label: "Inventory",
                    onClick: () => {
                      navigate("/inventory");
                    },
                  },
                  {
                    key: "5-3",
                    label: "Orders",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "5-3",
                    label: "Lease",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                ],
              },
              {
                key: "6",
                icon: <SnippetsOutlined />,
                label: "Sales",
                children: [
                  {
                    key: "6-1",
                    label: "Clients",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "6-2",
                    label: `Lead Pipeline`,
                  },
                ],
              },
              {
                key: "7",
                icon: <SnippetsOutlined />,
                label: "Marketing",
                children: [
                  {
                    key: "7-1",
                    label: "Email",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "7-2",
                    label: `SMS`,
                  },
                  {
                    key: "7-2",
                    label: `Social Media`,
                  },
                ],
              },
              {
                key: "8",
                icon: <SnippetsOutlined />,
                label: "Productivity",
                children: [
                  {
                    key: "8-1",
                    label: "Performance",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "8-2",
                    label: "Attendence",
                    onClick: () => {
                      navigate("/attendence");
                    },
                  },
                  {
                    key: "8-3",
                    label: "Tasks",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "8-4",
                    label: "Shifts",
                    onClick: () => {
                      navigate("/shifts");
                    },
                  },
                  {
                    key: "8-5",
                    label: "Team",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "8-6",
                    label: "Training",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                ],
              },
              {
                key: "9",
                icon: <SnippetsOutlined />,
                label: "Management",
                children: [
                  {
                    key: "9-1",
                    label: "Forms",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "9-2",
                    label: "Flows",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "9-3",
                    label: "Inspections",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "9-4",
                    label: "Appointments",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "9-5",
                    label: "Events",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "9-6",
                    label: "Documents",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                ],
              },
            ]}
          />
        </Sider>

        <Content
          style={
            selectedKey != "1"
              ? {
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }
              : {
                  margin: "24px 16px",
                  minHeight: 280,
                  borderRadius: borderRadiusLG,
                }
          }
        >
          {children}
        </Content>
        <NotificationDrawer
          open={openNotification}
          setOpen={setOpenNotification}
        />
      </Layout>
    </Layout>
  );
};
export default App;
