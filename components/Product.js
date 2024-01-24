"use client"

import { add } from "@/redux/CartSlice";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()

  const handleProduct = (product) =>{
    dispatch(add(product))

  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProduct(result));
  }, []);

  const card = product.map((prod) => (
    <div className="col-md-3" style={{marginBottom:'10px'}}>
      <Card key={prod.id} className="h-100" style={{textAlign:'center' }}>
        <div>
        <Card.Img variant="top" style={{width:'100px', height:'130px'}} src={prod.image} />

            </div>
        <Card.Body style={{textAlign:'center'}}>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
           BDT. {prod.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => handleProduct(prod)} variant="primary">Add to cart</Button>

        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{card}</div>;
}
