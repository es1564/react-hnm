import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {

    let {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product)

    const getProductDetail=async ()=>{
        dispatch(productAction.getProductDetail(id))
        // let url =`http://localhost:5000/products/${id}`
        // let url =`https://my-json-server.typicode.com/es1564/react-hnm/products/${id}`
        // let response = await fetch(url);
        // let data = await response.json();
        // console.log('data>',data)
        // setProduct(data)
    }

    useEffect(()=>{
        getProductDetail()
    },[])

  return (
    <Container>
        <Row>
            <Col className='product-img'>
                <img src={product?.img} />
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                <div className="choice">
                {product?.choice ? "Conscious choice" : ""}
                </div>
                <div>{product?.price}</div>
                <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        사이즈 선택
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product?.size.length > 0 &&
                            product?.size.map((menu)=>(
                                <Dropdown.Item href="#/action-1">{menu}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="dark" className="add-button">추가</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail