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
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
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
                  },
                ],
              },
              {
                key: "2",
                icon: <UnlockOutlined />,
                label: "Roles",
                onClick: () => {
                  navigate("/roles");
                },
              },
              {
                key: "3",
                icon: <UserOutlined />,
                label: "Users",
                onClick: () => {
                  navigate("/users");
                },
              },
              {
                key: "4",
                icon: <CalendarOutlined />,
                label: "Attendence",
                onClick: () => {
                  navigate("/attendence");
                },
              },
              {
                key: "5",
                icon: <SnippetsOutlined />,
                label: "Leave",
                children: [
                  {
                    key: "5-1",
                    label: "Approvals",
                    onClick: () => {
                      navigate("/leave");
                    },
                  },
                  {
                    key: "5-2",
                    label: `Holidays`,
                  },
                  {
                    key: "5-3",
                    label: `Weekoffs`,
                  },
                  {
                    key: "5-4",
                    label: `Compensations`,
                  },
                ],
              },
              {
                key: "6",
                icon: <SnippetsOutlined />,
                label: "Shifts",
                onClick: () => {
                  navigate("/shifts");
                },
              },
              {
                key: "7",
                icon: <PoundCircleOutlined />,
                label: "Expense",
                onClick: () => {
                  navigate("/expense");
                },
              },
              {
                key: "8",
                icon: <DatabaseOutlined />,
                label: "Inventory",
                onClick: () => {
                  navigate("/inventory");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Assets",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "10",
                icon: <BankOutlined />,
                label: "Teams",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "11",
                icon: <BankOutlined />,
                label: "Leads",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Clients",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Hirings",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Inspections",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Forms",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Flows",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Events",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Payroll",
                onClick: () => {
                  navigate("/assets");
                },
              },
              {
                key: "9",
                icon: <BankOutlined />,
                label: "Training",
                onClick: () => {
                  navigate("/assets");
                },
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
