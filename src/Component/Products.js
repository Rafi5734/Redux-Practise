import React from "react";
import {
  Button,
  Space,
  Col,
  Divider,
  Row,
  Card,
  Typography,
  Rate,
  notification,
  message,
  Alert,
  Spin,
} from "antd";
import { BorderBottomOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import Paragraph from "antd/es/skeleton/Paragraph";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productSlice";
import { STATUS } from "../store/productSlice";

const { Meta } = Card;
const { Text, Link } = Typography;
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const handleAddButton = (id, product) => {
    const findProduct = items.find((product) => {
      return product.id === id;
    });
    if (findProduct === undefined) {
      dispatch(add(product));
      message.success("Product add!");
    } else {
      message.warning("Product already added into the cart!");
    }
  };

  if (status === STATUS.LOADING) {
    return (
      <Space
        size="middle"
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </Space>
    );
  }
  return (
    <div style={{ padding: "20px" }}>
      <Divider orientation="left">
        <h1 style={{ color: "#faad14" }}>
          All Products: <span>{products.length}</span>
        </h1>
      </Divider>

      <div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 15,
            lg: 20,
          }}
        >
          {products.map((product) => (
            <Col
              key={product.id}
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={6}
              style={{ marginTop: "20px" }}
            >
              <div>
                <Card
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                  cover={
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        marginTop: "20px",
                      }}
                      alt="example"
                      src={product.image}
                    />
                  }
                >
                  {/* <Meta
                      style={{ marginBottom: "10px" }}
                      title={product.title.substring(-1, 45) + "..."}
                      description={
                        product.description.substring(-1, 165) + "..."
                      }
                    /> */}
                  <Meta
                    style={{ marginBottom: "10px" }}
                    title={product.name}
                    description={product.description}
                  />
                  <Typography.Title
                    style={{ marginTop: "10px", color: "#f759ab" }}
                    level={5}
                  >
                    Price: ${product.price}
                  </Typography.Title>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Rate allowHalf disabled value={product.rating.rate} />
                    <Text type="success" style={{ fontWeight: "bold" }}>
                      Star: ${product.rating.count}
                    </Text>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button type="primary">Details</Button>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "green", color: "white" }}
                      onClick={() => handleAddButton(product.id, product)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
