import {
  Col,
  Row,
  Space,
  InputNumber,
  Table,
  Card,
  Select,
  DatePicker,
  Button,
  Divider,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const onOk = (value) => {
  console.log("onOk: ", value);
};

const Cart = () => {
  const { Meta } = Card;
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onChange = (value, id) => {
    console.log("changed", id);
  };

  const handleQuantityChange = (value) => {
    console.log(value); // Handle the change in quantity here
  };

  const quantityFormatter = (value) => `${value} item(s)`;
  const quantityParser = (value) => value.replace("item(s)", "");

  function handleDelete(id) {
    dispatch(remove(id));
    console.log("delete", id);
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  console.log("cart item", items);

  return (
    <div>
      <Row>
        <Col flex="1 1 200px">
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {items.map((item) => (
              <Col
                key={item.id}
                className="gutter-row"
                xs={24}
                sm={12}
                md={8}
                lg={6}
              >
                <Card
                  key={item.id}
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: "20px",
                    marginTop: "20px",
                    marginRight: "20px",
                    marginBottom: "20px",
                  }}
                  cover={
                    <img
                      align="middle"
                      justify="center"
                      alt="example"
                      style={{ height: "200px" }}
                      src={item.image}
                    />
                  }
                >
                  <Meta title={item.name} description={item.description} />
                  <p style={{ fontWeight: "bold" }}>
                    Price: $<span>{item.price}</span>
                  </p>
                  <InputNumber
                    size="large"
                    min={1}
                    formatter={quantityFormatter}
                    parser={quantityParser}
                    onChange={handleQuantityChange}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    defaultValue={item.price}
                    onClick={onChange}
                  />
                  <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col flex="0 0 500px" style={{ paddingLeft: "10px" }}>
          <Space size={20}>
            <Card
              title="Order Details"
              style={{
                width: 390,
              }}
            >
              <div>
                <h1
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Total amount: $<span>1000</span>
                </h1>
                <h2
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Total item: <span>10</span>
                </h2>
                <p
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Order Id:{" "}
                  <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                    #45667
                  </span>
                </p>
                <p style={{ margin: "0", padding: "0" }} required>
                  Payment Method
                </p>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Manager",
                      options: [
                        {
                          label: "Jack",
                          value: "jack",
                        },
                        {
                          label: "Lucy",
                          value: "lucy",
                        },
                      ],
                    },
                    {
                      label: "Engineer",
                      options: [
                        {
                          label: "yiminghe",
                          value: "Yiminghe",
                        },
                      ],
                    },
                  ]}
                />
                <p
                  style={{ margin: "0", padding: "0", marginTop: "15px" }}
                  required
                >
                  Shipping Method
                </p>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Manager",
                      options: [
                        {
                          label: "Jack",
                          value: "jack",
                        },
                        {
                          label: "Lucy",
                          value: "lucy",
                        },
                      ],
                    },
                    {
                      label: "Engineer",
                      options: [
                        {
                          label: "yiminghe",
                          value: "Yiminghe",
                        },
                      ],
                    },
                  ]}
                />
                <p style={{ margin: "0", padding: "0", marginTop: "15px" }}>
                  Order Date
                </p>
                <DatePicker
                  style={{ width: "100%" }}
                  showTime
                  onChange={onChange}
                  onOk={onOk}
                />
                <p style={{ margin: "0", padding: "0", marginTop: "15px" }}>
                  Set the date of the order to process.
                </p>
                <Button
                  style={{
                    width: "100%",
                    marginTop: "30px",
                    fontWeight: "bold",
                  }}
                  type="primary"
                  block
                >
                  Confirm the order
                </Button>
              </div>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
