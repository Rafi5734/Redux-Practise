import React from "react";
import {
  Card,
  Space,
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import "./addProduct.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const AddProduct = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        <Card title="Add a product" size="small">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  type: "text",
                  message: "This input for a name",
                },
                {
                  required: true,
                  message: "Please input your product name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  type: "number",
                  message: "This input for price",
                },
                {
                  required: true,
                  message: "Please input your product price!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              rules={[
                {
                  required: true,
                  message: "Please select a category!",
                },
              ]}
            >
              <Select placeholder="select a category">
                <Option value="electronics">Electronics</Option>
                <Option value="tool">Tools</Option>
                <Option value="home_goods">Home Goods</Option>
                <Option value="fashion">Fashion</Option>
                <Option value="sports">Sports & Outdoors</Option>
                <Option value="food">Food</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[
                {
                  type: "number",
                  message: "This input for rating",
                },
                {
                  required: true,
                  message: "Please input product rating!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ratingCount"
              label="Rating Count"
              rules={[
                {
                  type: "number",
                  message: "This input for rating count",
                },
                {
                  required: true,
                  message: "Please input product rating count!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ratingCount"
              label="Rating Count"
              rules={[
                {
                  type: "number",
                  message: "This input for rating count",
                },
                {
                  required: true,
                  message: "Please input product rating count!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  type: "number",
                  message: "This input for product quantity",
                },
                {
                  required: true,
                  message: "Please input product quantity!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image"
              rules={[
                {
                  type: "text",
                  message: "This input for product image",
                },
                {
                  required: true,
                  message: "Please input product image!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input description",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={500} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Add new
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};

export default AddProduct;
