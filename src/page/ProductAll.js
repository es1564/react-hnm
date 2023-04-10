import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard1 from '../component/ProductCard1';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {

    const productList = useSelector((state) => state.product.productList)
    const [query, setQuery]=useSearchParams();
    const dispatch = useDispatch();

    const getProducts= ()=>{
        let searchQuery = query.get("q")||"";
        console.log('searchQuery',searchQuery)
        dispatch(productAction.getProducts(searchQuery))
        // let url =`http://localhost:5000/products?q=${searchQuery}`
        // let url =`https://my-json-server.typicode.com/es1564/react-hnm/products?q=${searchQuery}`
        // let response = await fetch(url);
        // let data = await response.json();
        // setProductList(data)
        // console.log(data.length)
    }

    useEffect(()=>{
        getProducts()
    },[query])

  return (
    <div>
        <Container>
            <Row>
                {productList.length > 0 &&
                    productList.map((menu)=>(
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