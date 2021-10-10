import React from 'react';
import DriverService from '../../API/TransportApi/DriverService';


import { useState, useEffect} from 'react'
//import VehicleService from '../services/VehicleService';
import { useHistory } from 'react-router'
//import moment from "moment";
import print from 'print-js'
import swal from 'sweetalert'

const ListDriverComponent  =() =>{
    // driver
    const [drivers , setdriveres] = useState([])
    //const [massage , setMessage] = useState(null)
    const history = useHistory()
    const [search, setSearch] = useState("");
    
 
    // const [count,setcount]=0



     useEffect(()=>{

       DriverService.getDriver()
        .then((res) => {setdriveres(res.data)   
            console.log(res.data)
             
        }

        ) 
      
           
    },[])
    
    
    // async function getdata(){
    //     console.log("t")
    // }

    
    const addDrivers=()=>{
        history.push("/transportmanagement/add-drivers");
    }
    const editDriver=(id)=>{
        history.push(`/transportmanagement/update-driver/${id}` );
    }

    const deleteDriver=(id)=>{

        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })

          swal({
            title: "Good Job!",
            text: "Successfully deleted!",
            icon: "success",
            button: "OK"
          });
    
          DriverService.deleteDriver(id).then( res => {
            //setMessage(`Delete of todo ${id} Successful`)
            setdriveres(drivers.filter(driver => driver.id !== id))}   
        );

    }
   
    
        return (
              
            <div >
               <div>
                 <h2 className="text-center"> Driver List</h2>
                </div>
                 {/* {massage && <div className="alert alert-success alert-dismissible fade show" role="alert">{massage}
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>} */}
            <div class="row justify-content-between">
            <div className="col-4">
                <button className="btn btn-outline-primary my-2 my-sm-0"onClick={addDrivers} 
                style={{ color: "black",}}
                >
                    <h5> Add Drivers</h5> </button>
            </div>     
                 <div className="col-4">
                 <button type="button" className="btn btn-info" onClick={ () =>print({
	                printable: drivers,
                    properties: [   { field: 'dfirstName', displayName: 'driver name'},
                                    { field: 'license', displayName: 'license number'},
                                    { field: 'email', displayName: 'Email Id'},
                                   

                        ],
	                    type: 'json'
                        })} style={{ color: "black",padding: "10px",}}>
                    Print The Driver List 
                    </button>
                 </div>
                </div>
                 <div className="row">
                

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
                            <tr>
                                <th> Name</th>
                                <th>  license number</th>
                                <th> Email Id</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                drivers.filter((val)=>
                                {
                                    if(search===""){
                                        return val
                                    }else if(
                                        val.dfirstName.toLowerCase().includes(search.toLowerCase())||
                                        val.license.toLowerCase().includes(search.toLowerCase())
                                    ){
                                        return val   
                                    }
                                    return 0;
                                    
                                    
                                }).map(
                                    
                                   
                                  
                                    driver => 
                                    <tr key = {driver.id}>
                                        <td> { driver.dfirstName} </td>   
                                        <td> {driver.license}</td>
                                        <td> {driver.email}</td>
                                        <td>
                                        <button onClick={ () => editDriver(driver.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => deleteDriver(driver.id)} className="btn btn-danger">Delete </button>
                                        {/* <button style={{marginLeft: "10px"}} onClick={ () => viewVehicle(vehicle.id)} className="btn btn-info">View </button>  */}
                                    </td>
                                    
                                </tr>
                                 
                                
                                )

                            
                            
                            
                                   
                            }


                        </tbody>
                
                    </table>
                    {/* <div>
                 <button type="button" className="btn btn-info" onClick={ () =>print({
	                printable: drivers,
                    properties: [   { field: 'dfirstName', displayName: 'driver name'},
                                    { field: 'license', displayName: 'license number'},
                                    { field: 'email', displayName: 'Email Id'},
                                   

                        ],
	                    type: 'json'
                        })}>
                    Print The Driver List 
                    </button>
                 </div> */}

               
              

            </div>
        );
    
}

export default ListDriverComponent;