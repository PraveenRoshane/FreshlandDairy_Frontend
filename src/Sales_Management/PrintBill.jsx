
import React from "react";
import  { useState,useEffect } from 'react';
import MyData from '../API/Sales_Management/BillService'
 
 import moment from 'moment'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect ,Table} from 'react-bootstrap';
 import { useHistory,useParams } from 'react-router'


function PrintBill({props}){

    const {bid}= useParams();
    const [bill,setbill] =useState([]);
    const [details,setdetails] = useState([]);


    console.log( 'print',bid);


    useEffect(()=>{
        console.log("detailss");
        MyData.retrieveBill(bid)
        .then((Response) =>{setbill(Response.data)})
        console.log(bill);
        // settotal([amount]);

        MyData.retrieveBillDetailsByID(bid)
        .then((Response) =>{setdetails(Response.data)})

      },[])

      console.log(bill);
      console.log(details);

    //console.log(bid);
    return(
        <div className="container">
        <h2>detilsss</h2>
        id={bill.id}
         date={moment(bill.date) .format('YYYY-MM-DD')}
         name={bill.cName}
         total={bill.total}
       

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>item</th>
            
            <th>qty</th>
            <th>amount</th>
           
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
    );
}
export default PrintBill;


