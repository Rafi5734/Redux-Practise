import React from 'react';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Menu, Avatar, Badge, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: (
        <Space size="large">
          <Badge style={{ marginLeft: "100px" }} count={cartItems.length}>
            <Link to="/cart" style={{ paddingRight: "8px" }}>
              Cart
            </Link>
          </Badge>
        </Space>
      ),
      key: "cart",
      icon: <ShoppingCartOutlined style={{ fontSize: "18px" }} />,
    },
  ];
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
