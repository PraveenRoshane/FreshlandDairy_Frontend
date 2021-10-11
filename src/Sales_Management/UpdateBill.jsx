

import React, {Component} from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import MyData from '../API/Sales_Management/BillService'
import moment from 'moment'

import { useState, useEffect } from 'react'
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
import { useHistory,useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ProductService from "../../api/myApi/ProductService.js";


function UpdateBill(props){

    const {id}= useParams();
    //const {billlist}= useParams();
    const [bill,setbill] =useState([]);
    const history = useHistory()
    const [details,setdetails] = useState([]);


    //const bid:props.id,
    console.log( 'update',id);
   //console.log(billlist);

    useEffect(()=>{
        console.log("detailss");
        MyData.retrieveBill(id)
        .then((Response) =>{setbill({

            // moment(Response.data.date) .format('YYYY-MM-DD')
            date:moment(Response.data.date) .format('YYYY-MM-DD'),
            cName:Response.data.cName,
            total:Response.data.total,
        })})
        console.log(bill);
        // settotal([amount]);

        MyData.retrieveBillDetailsByID(id)
        .then((Response) =>{setdetails(Response.data)})

      },[])

      console.log(bill);
      console.log(details);


      const clickSubmit=(event)=>{
        event.preventDefault();
        const psubmit = {
            date:event.target.date.value,
            cName:event.target.cName.value,
            total:event.target.total.value,
    
            // setproduct([psubmit])
        }
    
        //setproduct([psubmit])
        console.log(psubmit);
        MyData.updateBill(id,psubmit)
        .then(res =>{ history.push("/Sales-management/newview") })
        // history.push("/")
        console.log(psubmit);
        console.log(Response);
        // history.push("/item")

    
    }


    const changedate=(event)=>{
        setbill({date:event.target.value})
        //value=event.target.value;
    }


    const changeNmae=(event)=>{
        setbill({cName:event.target.value})
        //value=event.target.value;
    }

      return(

        <div className="container">

    <div className="card col-md-9 offset-md-1 offset-md-2">
        <div className="card-body">
      <div className="table table-sm table-light">
      <h2>detilsss</h2>
      <br/>


        <h2>detilsss</h2>
        {/* id={bill.id}
         date={moment(bill.date) .format('YYYY-MM-DD')}
         name={bill.cName}
         total={bill.total} */}


         <Form onSubmit={clickSubmit}>

  <Form.Group className="mb-3" controlId="itemname">
    <Form.Label>date</Form.Label>
    <Form.Control type="date" placeholder="date" name="date" value={bill.date } onChange={changedate}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="name" name="cName"  value={bill.cName } onChange={changeNmae} />
  </Form.Group>

Total
  <Form.Control  value={bill.total} type="number" placeholder="value" readOnly name="total">
</Form.Control>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       

        <Table >
        <thead>
          <tr>
            <th>Product Name</th>
            
            <th>Qty</th>
            <th>Amount</th>
           
          </tr>
        </thead>
        <tbody>

            {details.map((i) => (
               <tr key={i.id}>
                <td>{i.billproductpk.pName}</td> 
                
               <td>{i.qty}</td>
              
               <td>{i.amount}</td>
               
               
             </tr> 
             
             
            ))}
          
          
        </tbody>
      </Table>
      </div>
      </div>
      </div>
        </div>
);

}
export default UpdateBill


