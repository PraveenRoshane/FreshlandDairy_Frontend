import React, { Component } from 'react';

import VehicleService from '../services/VehicleService';
import moment from "moment";


class LIstVehicleComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            vehicles: [],
            massage : null,
            
         }
        

         this.addVehicle = this.addVehicle.bind(this)
         this.editVehicle = this.editVehicle.bind(this)
         this.deleteVehicle = this.deleteVehicle.bind(this)
     
         
    }

    
    componentDidMount(){

        // this.state.vehicles.map(r => 

        //    {const arr = [this.state.bill_number*1,this.state.bill_number*1];
        //     let count1 = 0;
        //     arr.forEach(number => {
        //         count1 += number;5
        //     this.setState({count1: count1});
        //     })
        //     console.log(count1);}
        //     )

      
     
        console.log("component did mount")
        VehicleService.getVehicle()
        .then((res) => {this.setState({ vehicles: res.data});
        console.log({ vehicles: res.data})
        });
    } 

    addVehicle(){
        this.props.history.push("/transportmanagement/add-vehicle");
    }
    editVehicle(id){
        this.props.history.push(`/transportmanagement/update-vehicle/${id}` );
    }

    deleteVehicle(id){
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({massage: `Delete of todo ${id} Successful`})
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)})}
           
        );
    }
    

    
    render() {
        return (
            <div>
                 <h2 className="text-center"> Vehicle List</h2>
                 {this.state.massage && <div className="alert alert-success">{this.state.massage}
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
             </div>}
                 <div className="row">
                 <button className="btn btn-primary" onClick={this.addVehicle}> Add Vehicle </button>

                 </div>
                 <br></br>
                 <div>
                     <input type="texr" placeholder="search" className="form-control" style={{
                         marginTop:20, marginBottom:20, width:"40%"}}
                         onChange={
                             (e)=>{
                                 this.setState(e.target.value)
                             }
                         }/>
                 </div>


                 <div className = "row"></div>
                    <table  className = "table table-striped table-bordered">
                    <thead>
                            <tr>
                                <th> Vehicle Register Number</th>
                                <th> Vehicale Modle</th>
                                <th> Vehicle Category</th>
                                <th> Model year</th>
                                <th> Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicle =>       
                                    <tr key = {vehicle.id}>
                                    <td> {vehicle.reg_number} </td>   
                                    <td> {vehicle.veh_modle}</td>
                                    <td> {vehicle.veh_category}</td>
                                    <td> {moment(vehicle.year).format('YYYY-MM-DD')}</td>
                                    <td> {vehicle.deparment}</td>
                                    <td>
                                        <button onClick={ () => this.editVehicle(vehicle.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button> 
                                    </td>
                                </tr>
                            )
                                
                            }


                        </tbody>
                    </table>
            </div>
        );
    }
}

export default LIstVehicleComponent;


