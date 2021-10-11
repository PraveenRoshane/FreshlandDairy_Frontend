
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect ,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from "../API/Sales_Management/ProductService"
import react, { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router'


function UpdateProduct(props){

  
const {pid}= useParams();
const [product,setproduct] =useState({pid:props.pid,pName:'',price:''});
const history = useHistory()

console.log(pid)
console.log(product)


useEffect(()=>{
    console.log("compooo");
    
    ProductService.getProductByID(pid)
        .then((Response)=>
        {setproduct({pName:Response.data.pName,
                     price:Response.data.price})});
  console.log(product)
    
  },[])



const clickSubmit=(event)=>{
    event.preventDefault();
    const psubmit = {
        
        pName:event.target.pName.value,
        price:event.target.price.value,

        // setproduct([psubmit])
    }

    setproduct([psubmit])
    console.log(product);
    ProductService.updateProduct(pid,psubmit)
    .then(res =>{ history.push("/ViewProduct") })
    // history.push("/")
    console.log(psubmit);
    console.log(Response);
    // history.push("/item")

}



const changeName=(event)=>{
    setproduct({pName:event.target.value})
    //value=event.target.value;
}

const changePrice=(event)=>{
    setproduct({price:event.target.value})
    //value=event.target.value;
}
// history.push("/item")

// function ProductAdd(){
    return (
<div className="container">

  <div className="card col-md-6 offset-md-3 offset-md-3">
        <h2>update item</h2>
              <div className="card-body">

    <Form onSubmit={clickSubmit}>

    <div className="card-body">
        <Form.Group className="mb-3" controlId="itemname">
          <Form.Label>item name</Form.Label>
          <Form.Control type="text" placeholder="name" name="pName" value={product.pName } onChange={changeName}  />
        </Form.Group>
        </div>

        <div className="card-body">
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>price</Form.Label>
            <Form.Control type="number" placeholder="price" name="price"  value={product.price  } onChange={changePrice} />
          </Form.Group>

          </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
</div>
)
}
export default UpdateProduct