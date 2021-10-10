import React from "react";
import  { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from 'react-bootstrap';
import { useHistory } from 'react-router'
import ProductService from "../API/Sales_Management/ProductService"



function AddProduct(props){

const [product,setproduct] =useState([]);
const history = useHistory()
const pid = props.match.params.id;

useEffect(()=>{
    console.log("compooo");
    
  },[])


const clickSubmit=(event)=>{
    event.preventDefault();
    const psubmit = {
        pName:event.target.pname.value,
        price:event.target.pprice.value,      
    }

    setproduct([psubmit])
    console.log(product);
    ProductService.addProduct(psubmit)
    .then(res =>{ history.push("ViewProduct") })
    
    console.log(psubmit);
    console.log(Response);
   
}

    return (
  <div className="container" >
        {/* <h2>add item</h2> */}
        <div className="card col-md-6 offset-md-3 offset-md-3">
        <h2>add item</h2>
              <div className="card-body">
      <Form onSubmit={clickSubmit}>
          <div className="card-body">
            <Form.Group className="mb-3" controlId="itemname">
                <Form.Label>item name</Form.Label>
                <Form.Control type="text" placeholder="name" name="pname" />
              </Form.Group>
              </div>

              <div className="card-body">
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>price</Form.Label>
                <Form.Control type="number" placeholder="price" name="pprice" />
              </Form.Group>
              </div>

              <Button variant="primary" type="submit" >
                Submit
              </Button>
   
    </Form>
    </div>
  </div>
</div>
);
}
export default AddProduct