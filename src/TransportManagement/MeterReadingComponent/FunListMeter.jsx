import React, {  } from 'react';
// import meterService from '../services/meterService';
import meterService from '../../API/TransportApi/meterService';
import moment from "moment";
//import React, { Component } from 'react';
// import axios from "axios";
import { useState, useEffect} from 'react'
import print from 'print-js'
import { useHistory } from 'react-router'
import swal from 'sweetalert'
// import Modal from 'react-modal'



//import print from 'print-js'
//import swal from 'sweetalert'

const FunListMeter =() =>{

    const [reads , setreads] = useState([])
    //const [massage , setMessage] = useState(null)
    const history = useHistory()
    const [search, setSearch] = useState("");



        useEffect(()=>{

            meterService.getRead()
            .then((res) => {setreads(res.data)   
                console.log(res.data)
                 
            }
  
            ) 
  
        },[])


        const addReads=()=>{
            history.push("/transportmanagement/add-meter-readings");
        }

        const deleteRead=(id)=>{

            // swal({
            //     title: "Good Job!",
            //     text: "Successfully Added!",
            //     icon: "success",
            //     button: "OK"
            //   });
            swal({
                title: "Good Job!",
                text: "Successfully Added!",
                icon: "success",
                button: "OK"
              });
     
            meterService.deleteRead(id).then( res => {
                //setMessage(`Delete of todo ${id} Successful`)
                setreads(reads.filter(read => read.id !== id))}   
            );
        }

        return (
           
            <div>
                <h2 className="text-center"> Vehicle Meter Reading List</h2>
            {/* {this.state.massage && <div className="alert alert-success">{this.state.massage}</div>} */}

            
            <div className="row">
            <button className="btn btn-primary" onClick={addReads}> Add Readings  </button>

            </div>
            <br></br>
            <div>
                <input type="texr" placeholder="search" className="form-control" style={{
                    marginTop:20, marginBottom:20, width:"40%"}}
                    onChange={
                        (e)=>{
                            setSearch(e.target.value)
                        }
                    }/>
             </div>


             <div className = "row"></div>
               <table  className = "table table-striped table-bordered">
               <thead>
                       <tr>
                           <th> Vehicle Register Number</th>
                           <th> Date </th>
                           <th> Vehicle Start Meter Reading</th>
                           <th> Vehicle End Meter Reading</th>
                           <th> Meter balence</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                          reads.filter((val)=>
                          {
                              if(search===""){
                                  return val
                              }else if(
                                  val.vehicle_number.toLowerCase().includes(search.toLowerCase())||
                                  val.date.toLowerCase().includes(search.toLowerCase())
                              ){
                                  return val   
                              }
                              return 0;
                              
                              
                          }).map(
                               (read) =>       
                               <tr key = {read.id}>
                               <td> {read.vehicle_number} </td> 
                               <td> {moment(read.date).format('YYYY-MM-DD')}</td>  
                               <td> {read.start_read}</td>
                               <td> {read.end_read}</td>
                               <td> {read.start_read-read.end_read}</td>
                               <td>
                                   {/* <button onClick={ () => this.editVehicle(vehicle.id)} className="btn btn-info">Update </button> */}
                                   <button style={{marginLeft: "10px"}} onClick={ () => deleteRead(read.id)} className="btn btn-danger">Delete </button>
                                   {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button>  */}
                               </td>
                           </tr>

                           
                       )
                           
                       }


                   </tbody>
               </table>

               <div>
                 <button type="button" className="btn btn-info" onClick={ () =>print({
	                printable: reads,
                    properties: [   { field: 'vehicle_number', displayName: 'driver name'},
                                    { field: 'date', displayName: 'license number'},
                                    { field: 'start_read', displayName: 'starting reading '},
                                    { field: 'end_read', displayName: 'end reading'},
                                    { field: 'balence', displayName: 'meter balence'},
                                   

                        ],
	                    type: 'json'
                        })}>
                    Print The Meter readings 
                    </button>
                 </div>




            </div>
           
             
        );








}

export default FunListMeter;