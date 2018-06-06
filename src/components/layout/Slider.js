import React from "react";
import { Link } from "react-router-dom";
import { Layout, Icon, Menu } from "antd";
import "./Slider.css";

const { Sider } = Layout;

const Slider = ({ collapsed }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="user" />

                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/createnote">
                        <Icon type="video-camera" />
                        <span>Create Note</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Slider;
