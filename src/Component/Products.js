import React from 'react';
import {
  Button,
  Space,
  Col,
  Divider,
  Row,
  Card,
  Typography,
  Rate,
} from "antd";
import { useState } from 'react';
import { useEffect } from 'react';
import Paragraph from 'antd/es/skeleton/Paragraph';
import { add } from "../store/CartSlice";
import { useDispatch } from 'react-redux';


const { Meta } = Card;
const { Text, Link } = Typography;
const style = {
  background: "#0092ff",
  padding: "8px 0",
};


const Products = () => {
  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()

    const fetchProduct = async () => {
      const result = await fetch("./fake_data.json");
      const data = await result.json();
        // console.log(data);
      setProducts(data)
      console.log(data);
  };
  
  

    useEffect(() => {
      fetchProduct();
    }, []);
  
  const handleAddButton = (product) => {
    dispatch(add(product));
  }
    return (
      <div style={{ padding: "20px" }}>
        <Divider orientation="left">
          <h1 style={{ color: "#faad14" }}>
            All Products: <span>20</span>
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
                        onClick={() => handleAddButton(product)}
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
