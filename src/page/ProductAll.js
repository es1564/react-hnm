import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard1 from '../component/ProductCard1';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery]=useSearchParams();

    const getProducts=async ()=>{
        let searchQuery = query.get("q")||"";
        console.log('searchQuery',searchQuery)
        // let url =`http://localhost:5000/products?q=${searchQuery}`
        let url =`https://my-json-server.typicode.com/es1564/react-hnm/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log('data>',data)
        setProductList(data)
    }

    useEffect(()=>{
        getProducts()
    },[query])

  return (
    <div>
        <Container>
            <Row>
                {productList.map((menu)=>(
                    <Col lg={3}>
                        <ProductCard1 item={menu}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll