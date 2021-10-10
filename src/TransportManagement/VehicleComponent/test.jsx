//import React, { Component } from 'react';
// import axios from "axios";
import React, { useState, useEffect} from 'react'
import VehicleService from '../../API/TransportApi/VehicleService';
import { useHistory } from 'react-router'
import moment from "moment";
import print from 'print-js'
import swal from 'sweetalert'



const LIstVehicleComponent =() =>{

    const [vehicles , setVehicle] = useState([])
    //const [massage , setMessage] = useState(null)
    const history = useHistory()
    const [search, setSearch] = useState("");
    
 
    // const [count,setcount]=0



     useEffect(()=>{

        // axios.get('http://localhost:8080/api/v1/vehicle')
        // .then((res) => {
        //     // console.log(res.data)
        // })
        // .catch(err =>{
        //     console.log('error')
        // }) 
    
        VehicleService.getVehicle()
        .then((res) => {setVehicle(res.data)   
            console.log(res.data) 
             
        }
        
        
   
       
        ) 
        // const url = "http://localhost:8080/api/v1/vehicle";
        // const res =  fetch(url);
        // const data=  res.json();
        // console.log(data);
      
           
    },[])
    
    
    // async function getdata(){
    //     console.log("t")
    // }

    
    const addVehicle=()=>{
        history.push("/transportmanagement/add-vehicle");
    }
    const editVehicle=(id)=>{
        history.push(`/transportmanagement/update-vehicle/${id}` );
    }

    const deleteVehicle=(id)=>{

        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })

          swal({
            title: "Good Job!",
            text: "Successfully Added!",
            icon: "success",
            button: "OK"
          });
    
        VehicleService.deleteVehicle(id).then( res => {
            //setMessage(`Delete of todo ${id} Successful`)
            setVehicle(vehicles.filter(vehicle => vehicle.id !== id))}   
        );

    }
   
    
        return (
              
            <div >
               
                 <h2 className="text-center"> Vehicle List</h2>

                 {/* {massage && <div className="alert alert-success alert-dismissible fade show" role="alert">{massage}
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>} */}
                 <div className="row">
                 <button className="btn btn-primary" onClick={addVehicle}> Add Vehicle </button>

                 </div>
                 {/* <div>
                 <button type="button" onclick={print({
	                printable: vehicles,
                    properties: [ 'reg_number', 'veh_modle', 'veh_category' ],
	                type: 'json'
                    })}>
                    Print JSON
                    </button>
                 </div> */}
                 <br></br>
                 <div>
                     <input type="text" placeholder="search" className="form-control" style={{
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
                            <tr >
                                <th> Vehicle Register Number</th>
                                <th> Vehicale Modle</th>
                                <th> Vehicle Category</th>
                                <th> Model year</th>
                                <th> Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vehicles.filter((val)=>
                                {
                                    if(search===""){
                                        return val
                                    }else if(
                                        val.reg_number.toLowerCase().includes(search.toLowerCase())||
                                        val.year.toLowerCase().includes(search.toLowerCase())
                                    ){
                                        return val   
                                    }
                                    return 0;
                                    
                                    
                                }).map(
                                    
                                   
                                  
                                    (vehicle) => 
                                   
                                    <tr key = {vehicle.id}>
                                    <td> {vehicle.reg_number} </td>   
                                    <td> {vehicle.veh_modle}</td>
                                    <td> {vehicle.veh_category}</td>
                                    <td> {moment(vehicle.year).format('YYYY-MM-DD')}</td>
                                    <td> {vehicle.deparment}</td>
                                   
                                    <td>
                                        <button onClick={ () => editVehicle(vehicle.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                        {/* <button style={{marginLeft: "10px"}} onClick={ () => viewVehicle(vehicle.id)} className="btn btn-info">View </button>  */}
                                    </td>
                                    
                                </tr>
                                 
                                
                                )

                            
                            
                            
                                   
                            }


                        </tbody>
                
                    </table>
                    <div>
                 <button type="button" className="btn btn-info" onClick={ () =>print({
	                printable: vehicles,
                    properties: [   { field: 'reg_number', displayName: 'Vehicle register number'},
                                    { field: 'veh_modle', displayName: 'Vehicle modle'},
                                    { field: 'veh_category', displayName: 'Vehicle vehicle category'},
                                    { field: 'year', displayName: 'Date'},
                                    { field: 'deparment', displayName: 'Deartment'},

                        ],
	                    type: 'json'
                        })}>
                    Print The vehicle List 
                    </button>
                 </div>

               
              

            </div>
        );
    
}

export default LIstVehicleComponent;


