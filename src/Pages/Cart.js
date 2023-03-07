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
  Input,
} from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  quantityIncrement,
  remove,
  quantityDecrement,
  placeOrder
} from "../store/CartSlice";
import cartIncreDecre from "./cart.css";



const Cart = () => {
  const { Meta } = Card;
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [itemPrice, setItemPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderData, setOrderData] = useState({});
  const [orderDate, setOrderDate] = useState({});
  const [orderMethod, setOrderMethod] = useState({});
  const [productQuantity, setProductQuantity] = useState();
  const totalFinalAmount = [];
  


  function handleDelete(id) {
    dispatch(remove(id));
    // console.log("delete", id);
  }

  function handleIncrement(id) {
    dispatch(quantityIncrement(id));
  }

  function handleDecrement(id) {
    dispatch(quantityDecrement(id));
  }

  const handleChangePaymentMethod = (value) => {
    setOrderMethod(value);
  }

  const handleChange = (value) => {
    setOrderData(value);
    console.log(`selected ${value}`);
  };

  const onOk = (value) => {
    setOrderDate(value.$d);
    console.log("onOk: ", value.$d);
  };


  useEffect(() => {
    const totalPrice = items.map((item) =>
      totalFinalAmount.push(item.quantity * item.price)
    );
    const sumOfCartItems = totalFinalAmount.reduce((acc, num) => acc + num, 0);
    setItemPrice(sumOfCartItems);
  }, [items, totalFinalAmount]);

  function quantityValue(id) {
    const findProduct = items.find((item) => item.id === id);
    setProductQuantity(findProduct.quantity);
  }

  function demoFunc(message) {
    console.log(message)
  }

  function handleOrder() {
    const data = {
      orderData: orderData,
      orderDate: orderDate,
      orderMethod: orderMethod,
    }
    dispatch(placeOrder({data}, demoFunc()))
    console.log('Order date--', orderDate);
    console.log('Order data--', orderData);
    console.log('Order method--', orderMethod);
  }

  // console.log(items);
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
                    Price: $<span>{item.price * quantity}</span>
                  </p>
                  <div className="cartIncreDecre">
                    <Button
                      icon={<MinusOutlined />}
                      onClick={() => handleDecrement(item.id)}
                    />
                    <Input
                      placeholder="Product Quantity"
                      style={{ marginBottom: "10px" }}
                      value={item.quantity}
                      onBlur={() => quantityValue(item.id)}
                    />
                    <Button
                      icon={<PlusOutlined />}
                      onClick={() => handleIncrement(item.id)}
                    />
                  </div>

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
                  Total amount: $<span>{itemPrice}</span>
                </h1>
                <h2
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Total item: <span>{items.length}</span>
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
                  defaultValue="Select a payment method"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChangePaymentMethod}
                  options={[
                    {
                      label: "Stripe",
                      value: "Stripe",
                    },
                    {
                      label: "Bkash",
                      value: "Bkash",
                    },
                    {
                      label: "Nagad",
                      value: "Nagad",
                    },
                    {
                      label: "Rocket",
                      value: "Rocket",
                    },
                  ]}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
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
                  defaultValue="Select a shipping method"
                  style={{
                    width: "100%",
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Shipped to home",
                      value: "Shipped to home",
                    },
                    {
                      label: "Shipped from store",
                      value: "Shipped from store",
                    },
                  ]}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                />
                <p style={{ margin: "0", padding: "0", marginTop: "15px" }}>
                  Order Date
                </p>
                <DatePicker
                  style={{ width: "100%" }}
                  showTime
                  onChange={onOk}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  // onOk={}
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
                  htmlType="submit"
                  type="primary"
                  block
                  onClick={handleOrder}
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
