import React from 'react';
import {
  FileAddOutlined,
  HomeOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Badge, Space, Button, Spin } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { authentication } = useSelector((state) => state.authentication);
  // setAuthenticateUser(authentication.authentication);
  console.log(authentication);
  const cartItems = useSelector((state) => state.cart);
  const handleLogOut = () => {
    localStorage.removeItem("login");
    window.location.reload();

    console.log("log out");
  };
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: (
        <Space size="large">
          <Link to="/cart" style={{ paddingRight: "8px" }}>
            <Badge style={{ marginLeft: "100px" }} count={cartItems.length}>
              Cart
            </Badge>
          </Link>
        </Space>
      ),
      key: "cart",
      icon: <ShoppingCartOutlined style={{ fontSize: "18px" }} />,
    },
    {
      label: (
        <Space size="large">
          <Link to="/add_product" style={{ paddingRight: "8px" }}>
            Add Product
          </Link>
        </Space>
      ),
      key: "addProduct",
      icon: <FileAddOutlined style={{ fontSize: "18px" }} />,
    },

    {
      label: (
        <Space size="large">
          {authentication ? (
            <Button type="text" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Link to="/login" style={{ paddingRight: "0px" }}>
              Login
            </Link>
          )}
        </Space>
      ),
      key: "login",
      icon: <LoginOutlined style={{ fontSize: "18px" }} />,
    },
  ];
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Navbar;
