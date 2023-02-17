import {
  Col,
  Row,
  Space,
  InputNumber,
  Table,
  Tag,
  Card,
  Select,
  DatePicker,
  Button,
} from "antd";
import React from 'react';
import { useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";



const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};

const Cart = () => {
  const items = useSelector(state => state.cart)
  console.log("Items Selected: ", items);
  const onChange = (value) => {
    console.log("changed", value);
  };
    const columns = [
      {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: (text) => (
          <img
            style={{
              height: "60px",
              width: "60px",
              marginTop: "20px",
              borderRadius: "20px",
            }}
            alt="example"
            src="https://img1.freepng.es/20180802/lkh/kisspng-hiking-boot-gore-tex-shoe-treksta-men-39-s-adt-201-mid-gtx-surround-day-hik-5b63701a11f873.5692017715332434180736.jpg"
          />
        ),
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Details",
        dataIndex: "details",
        key: "details",
      },
      {
        title: "Quantity",
        key: "quantity",
        dataIndex: "quantity",
        render: () => (
          <>
            <InputNumber
              size="large"
              min={1}
              max={100000}
              defaultValue={3}
              onChange={onChange}
            />
          </>
        ),
      },
      {
        title: "Price",
        key: "price",
        render: () => (
          <p style={{fontWeight: "bold"}}>$1000</p>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Button type="dashed">Edit</Button>
            <Button type="dashed" danger>
              Delete
            </Button>
          </Space>
        ),
      },
    ];


    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
  ];
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

    return (
      <div>
        <Row>
          <Col flex="1 1 200px">
            <Table
              scroll={{
                x: 400,
              }}
              columns={columns}
              dataSource={data}
            />
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
                  <Button style={{width: "100%", marginTop: "30px", fontWeight: "bold"}} type="primary" block>
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
