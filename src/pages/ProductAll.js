import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  async function getProducts() {
    let searchQuery = query.get("q") || ""; // 없으면 빈값
    console.log("쿼리값은?", searchQuery); // 쿼리 값 출력
    let url = `https://my-json-server.typicode.com/ZetGar/hnm/products?q=${searchQuery}`;
    console.log("url", url);

    // let response = await fetch(url);
    // let data = await response.json();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("결과:", data);
        setProductList(data);
      });

    // console.log("data", data);
    // setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container className="hnm__productAll">
      <Row>
        {productList.map((product) => {
          return (
            <Col lg={3}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductAll;
