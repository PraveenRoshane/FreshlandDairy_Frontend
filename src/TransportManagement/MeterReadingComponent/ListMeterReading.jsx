import React, { Component } from 'react';
import meterService from '../services/meterService';
import moment from "moment";

class ListMeterReading extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            reads: [],
            massage : null,
            
         }
        

         this.addReads = this.addReads.bind(this)
        //  this.editVehicle = this.editVehicle.bind(this)
        //  this.deleteVehicle = this.deleteVehicle.bind(this)
     
         
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
        meterService.getRead()
        .then((res) => {this.setState({ reads: res.data});
        console.log({ reads: res.data})
        });
    } 

    addReads(){
        this.props.history.push("/transportmanagement/add-meter-readings");
    }
    // editReads(id){
    //     this.props.history.push(`/update-vehicle/${id}` );
    // }

    deleteRead=(id)=>{

        // swal({
        //     title: "Good Job!",
        //     text: "Successfully Added!",
        //     icon: "success",
        //     button: "OK"
        //   });
        meterService.deleteRead(id).then( res => {
            this.setState({massage: `Delete of todo ${id} Successful`})
            this.setState({reads: this.state.reads.filter(read => read.id !== id)})}
           
        );
    }
    


    render() {
        return (
            <div>
            <h2 className="text-center"> Vehicle Meter Reading List</h2>
            {this.state.massage && <div className="alert alert-success">{this.state.massage}</div>}
            <div className="row">
            <button className="btn btn-primary" onClick={this.addReads}> Add Readings  </button>

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
                           <th> Date </th>
                           <th> Vehicle Start Meter Reading</th>
                           <th> Vehicle End Meter Reading</th>
                           <th> Meter balence</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.reads.map(
                               read =>       
                               <tr key = {read.id}>
                               <td> {read.vehicle_number} </td> 
                               <td> {moment(read.date).format('YYYY-MM-DD')}</td>  
                               <td> {read.start_read}</td>
                               {/* <td> {read.end_read}</td> */}
                               <td> {read.start_read-read.end_read}</td>
                               <td>
                                   {/* <button onClick={ () => this.editVehicle(vehicle.id)} className="btn btn-info">Update </button> */}
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRead(read.id)} className="btn btn-danger">Delete </button>
                                   {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button>  */}
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

export default ListMeterReading;