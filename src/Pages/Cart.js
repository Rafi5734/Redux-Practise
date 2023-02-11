import { Col, Row, Space, Table, Tag, Card, Select, DatePicker, Button } from "antd";
import React from 'react';



const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};

const Cart = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
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
