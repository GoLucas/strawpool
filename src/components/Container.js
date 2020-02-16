import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import RouterContainer from "./RouterContainer";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const Container = props => {
  const [collaps, setCollapsed] = useState(false);

  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collaps}
          onCollapse={collapsed => onCollapse(collapsed)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
              <NavLink className="nav-text" to="/"></NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file-add" />
              <span>Add Form</span>
              <NavLink className="nav-text" to="/addform"></NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="form" />
              <span>All forms</span>
              <NavLink
                className="nav-text"
                to={{
                  pathname: "/forms"
                }}
              ></NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#001529", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 500 }}>
              <RouterContainer />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Container;
