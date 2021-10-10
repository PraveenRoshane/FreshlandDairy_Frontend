import React, { Component } from 'react';
// import meterService from '../services/meterService';
import meterService from '../../API/TransportApi/meterService';
// import VehicleService from '../services/VehicleService';
import VehicleService from '../../API/TransportApi/VehicleService';
import Modal from 'react-modal'
import './FormModal.css';



class CreateMeterRead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id, 
            vehicles:[],
            vehicle_number : '',
            date : '',
            start_read : '',
            end_read : '',
            balence : '',
            open: true
          

         }

         this.save = this.save.bind(this);
         this.changeRegisterNumberHandler = this.changeRegisterNumberHandler.bind(this);
         this.changeDateHandler = this.changeDateHandler.bind(this);
         this.changeStartReadHandler = this.changeStartReadHandler.bind(this);
         this.changeEndReadHandler = this.changeEndReadHandler.bind(this);
        //  this.changeBalanceHandler = this.changeBalanceHandler.bind(this);

    }

    
    componentDidMount(){

        console.log("component did mount")
        VehicleService.getVehicle()
        .then((res) => {this.setState({ vehicles: res.data});
        console.log({ vehicles: res.data})
        });

    
    } 

    save= (e)=> {
        e.preventDefault();
        let read = {vehicle_number : this.state.vehicle_number, 
                    date : this.state.date, 
                    start_read : this.state.start_read, 
                    end_read : this.state.end_read, 
                    balence : this.state.end_read-this.state.start_read};

        console.log('reding => ' + JSON.stringify(read));
        
        
        meterService.createRead(read).then(res =>{
             this.props.history.push('/transportmanagement/meter-readings');
         });
    
    } 

    changeRegisterNumberHandler= (event) => {
        this.setState({vehicle_number: event.target.value}); }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value}); }
    
    changeStartReadHandler= (event) => {
        this.setState({start_read: event.target.value}); }
    
    changeEndReadHandler= (event) => {
        this.setState({end_read: event.target.value}); }
    
    // changeBalanceHandler= (event) => {
    //     this.setState({balence: event.target.end_read - start_read}); }

    


    cancel(){
        this.props.history.push('/transportmanagement/meter-readings');
    }


    render() {
        return (
            <Modal isOpen={this.state.open} 
            className="Modal"
           overlayClassName="Overlay"
     
             >
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                            <h3>Add Vehicle Meter Readings</h3> 
                            {/* {
                                this.getTitle()
                            } */}
                            <div className = "card-body">
                               
                                <form onSubmit={this.save}>
                            

                                    <div className = "form-group">
                                            <label> Vehicle Register Number: </label>
                                            {/* <input  placeholder="Department" name="deparment" className="form-control" 
                                                
                                                // value={this.state.deparment} 
                                                onChange={this.changeDepartmentHandler}/> */}
                                                 <select  placeholder="Vehicle Register Number" name="vehicle_number" className="form-control" required
                                                 
                                                 onChange={this.changeRegisterNumberHandler}>
                                                    <option selected>Select register number</option>
                                                   
                                                    {
                                                        this.state.vehicles.map(
                                                            vehicle =>(
                                                                <option key = {vehicle.id} value ={vehicle.reg_number}>{vehicle.reg_number}</option>
                                                            )       
                                                            
                                                            
                                                            
                                                    
                                                    )
                                                        
                                                    }


                       
                                                   
                                                </select>
                                        </div>

                                    <div className = "form-group">
                                        <label> Enter Date: </label>
                                        <input  placeholder="Enter the date" type="date" name="date" className="form-control" required
                                            // value={this.state.veh_modle} 
                                            onChange={this.changeDateHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Start Meter Reading: </label>
                                        <input  placeholder="Start Meter Reading" name="start_read" className="form-control" 
                                            // value={this.state.veh_category} 
                                            pattern="[0-9]+" title="please enter number only and maximum length is 5" required="required" maxlength="5"
                                            onChange={this.changeStartReadHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> End Meter Reading: </label>
                                        <input  placeholder="Enter End Meter Readings" name="end_read" className="form-control" 
                                         pattern="[0-9]+" title="please enter number only and maximum length is 5" required="required" maxlength="5"
                                            // value={this.state.year} 
                                            onChange={this.changeEndReadHandler}/>
                                    </div>
                                    
                                    {/* <div className = "form-group">
                                        <label> Meter Balence: </label>
                                        <input  placeholder="Meter balence" name="balence" className="form-control" 
                                            // value={this.state.deparment} 
                                            onChange={this.changeBalanceHandler}/>
                                    </div> */}

                                    <div>

                                    <button className="btn btn-success" >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                                
                            </div> 
                        </div>
                    </div>

               </div>
        </div>
        </Modal>
        );
    }
}

export default CreateMeterRead;