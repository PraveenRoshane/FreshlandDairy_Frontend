// import React, {Component, useEffect, useState} from 'react'
import React, { useState, useEffect } from 'react'
import { Button,Form,FormControl,FormGroup,FormLabel,FormSelect,Table } from 'react-bootstrap';
import { useHistory } from 'react-router'
// import MyData from '../../api/myApi/BillService.js'


import 'bootstrap/dist/css/bootstrap.min.css';
import ProductService from "../API/Sales_Management/ProductService"
import { colors } from '@material-ui/core';

//import 'semantic-ui-css/semantic.min.css'



function ViewProduct(){

    const [itemlist,setItemlist]= useState([])
    const history = useHistory()

    const [search, setSearch] = useState("");

  useEffect(()=>{
  
      ProductService.viewProduct()
      .then((Response) =>{setItemlist(Response.data)})

 
  },[])

// const refresh=()=>{
//   MyData.viewItem()
//   .then((Response) =>{setItemlist(Response.data)})
// }

  const additem=()=>{
  history.push("/Sales-management/addproduct");
  }

  const updateClicked=(pid)=>{
    console.log(pid)
    history.push(`/Sales-management/updateproduct/${pid}`);
    alert(pid);

  // component={Link} {`/updateproduct/${i.pid}`}
  // history.push('/addproduct/${pid}');
  // // to=('/addproduct/${id}');
  // console.log(pid)
  }

  const deleteClicked=(pid)=>{
  // history.push('/addproduct/${id}');
      alert(pid);
      ProductService.deleteProduct(pid)
        .then(res =>{
          setItemlist(itemlist.filter(itemlist =>itemlist.pid!==pid))
        });
      
      // setItemlist(itemlist.filter(itemlist =>itemlist.pid!==pid))
      console.log(Response)
  }
 
//className = "table table-striped table-bordered"
//striped bordered
    return (
    <div className="container">
      <div className="card col-md-9 offset-md-1 offset-md-2">
        <div className="card-body">
      <div className="table table-sm table-light">
      <h2>product list</h2>
      <br/>

      <div className="container">
      <input type="text" placeholder="search by Product Name" className="form-control" style={{
                         marginTop:20, marginBottom:20,marginLeft:200, width:"40%"}}
                         onChange={
                             (e)=>{
                                setSearch(e.target.value)}}/>
                                {/* <i className="search icon"></i> */}

      </div>
      <br/>

    <Table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
            {/* <th>delete</th> */}
           
          </tr>
        </thead>
        <tbody>



          { itemlist.filter((value)=>
                                {
                                    if(search===""){
                                        return value
                                    }else if(
                                        //  value.pid.toString(includes(search)) ||
                                         value.pName.toLowerCase().includes(search.toLowerCase())
                                    ){
                                        return value
                                    }
                                    return 0;
                                })

                .map((i) => (
               <tr key={i.pid}>
                <td>{i.pid}</td>   
               <td>{i.pName}</td>
               <td>{i.price}</td>
               <td><button className="btn btn-success" onClick={() =>{updateClicked(i.pid)}} style={{marginRight:10}}>update</button>
               <button className="btn btn-warning" onClick={() =>{deleteClicked(i.pid)}}>delete</button></td>

               {/* <td><button className="btn btn-success" component={Link} to={`/updateproduct/${i.pid}`}>update</button></td> */}
               
               
             </tr> 
            ))
          
          }
        </tbody>
      </Table>

      <Button variant="primary"  onClick={additem}>
       add product
      </Button>

      </div>
      </div>
      </div>
      </div>
      )

}
export default ViewProduct