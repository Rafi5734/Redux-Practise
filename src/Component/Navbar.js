import React from 'react';
import {
  FileAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Badge, Space } from "antd";
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
