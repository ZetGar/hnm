import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetaiil = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ZetGar/hnm/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();

    console.log("data", data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>

          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size.map((size, idx)=>{
                return  <Dropdown.Item key={idx} eventKey={idx}>
                {size}
              </Dropdown.Item>
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="danger">Danger</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetaiil;
