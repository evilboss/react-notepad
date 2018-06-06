import React from "react";
import { Icon, Layout } from "antd";
import "./Header.css";

const Header = ({ collapsed, onToggle }) => {
    return (
        <Layout.Header
            style={{ background: "#fff", padding: 0, width: "100%" }}
        >
            <Icon
                className="trigger"
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={onToggle}
            />
        </Layout.Header>
    );
};

export default Header;
