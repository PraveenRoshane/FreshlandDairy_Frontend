import React, { Component } from 'react';
import VehicleService from '../../API/TransportApi/VehicleService';
import swal from 'sweetalert'
import moment from 'moment';
// import { Helmet } from 'react-helmet';

import TSideBar from '../TSideBarComponent/TSideBar';

class CreateVehicleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id, 
            reg_number : '',
            veh_modle : '',
            veh_category : '',
            year : moment(new Date()).format('YYYY-MM-DD'),
            deparment : ''

         }

         this.save = this.save.bind(this);
         this.changeRegisterNumberHandler = this.changeRegisterNumberHandler.bind(this);
         this.changeVehicaleModleHandler = this.changeVehicaleModleHandler.bind(this);
         this.changeVehicleCategoryHandler = this.changeVehicleCategoryHandler.bind(this);
         this.changeModelyearHandler = this.changeModelyearHandler.bind(this);
         this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);

    }

    save= (e)=> {
        swal({
            title: "Successfully deleted!",
            icon: "success",
            button: "OK"
          });
        e.preventDefault();
        
                 
        let vehicle = {reg_number : this.state.reg_number, 
                        veh_modle : this.state.veh_modle, 
                        veh_category : this.state.veh_category, 
                        year : this.state.year, 
                        deparment : this.state.deparment};

        console.log('vehicle => ' + JSON.stringify(vehicle));
        
        
        VehicleService.createVehical(vehicle).then(res =>{
             this.props.history.push('/transportmanagement/vehicle');
         });
    
    } 

    changeRegisterNumberHandler= (event) => {
        this.setState({reg_number: event.target.value}); }

    changeVehicaleModleHandler= (event) => {
        this.setState({veh_modle: event.target.value}); }
    
    changeVehicleCategoryHandler= (event) => {
        this.setState({veh_category: event.target.value}); }
    
    changeModelyearHandler= (event) => {
        this.setState({year: event.target.value}); }
    
    changeDepartmentHandler= (event) => {
        this.setState({deparment: event.target.value}); }

    


    cancel(){
        this.props.history.push('/transportmanagement/vehicle');
    }

    
                           
                                    




    render() {
        return (
            <div>
                 {/* <TSideBar/> */}
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>Add Vehicle</h3> 
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className = "card-body">
                                <form onSubmit={this.save}>
                                        
                                        
                                        <div className = "form-group">
                                            <label for="validationServer03"> Vehicle Register Number: </label>
                                            <input  placeholder="Vehicle Register Number" name="reg_number" className="form-control " 
                                                value={this.state.reg_number} 
                                                onChange={this.changeRegisterNumberHandler} required/>

                                        
                                        </div>
                                        <div className = "form-group">
                                            <label> Vehicale Modle: </label>
                                            <input  placeholder="Vehicale Modle" name="veh_modle" className="form-control" required
                                                // value={this.state.veh_modle} 
                                                onChange={this.changeVehicaleModleHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Vehicle Category: </label>
                                            <input  placeholder="Vehicle Category" name="VehicleCategory" className="form-control" required
                                                // value={this.state.veh_category} 
                                                onChange={this.changeVehicleCategoryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Model year: </label>
                                            <input  placeholder="Model year" type="date" name="year" className="form-control" required
                                                // value={this.state.year} 
                                                onChange={this.changeModelyearHandler}/>
                                        </div>
                                        
                                        
                                       
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            {/* <input  placeholder="Department" name="deparment" className="form-control" 
                                                
                                                // value={this.state.deparment} 
                                                onChange={this.changeDepartmentHandler}/> */}
                                                 <select  name="deparment" className="form-control" required
                                                 
                                                 onChange={this.changeDepartmentHandler}>
                                                    <option selected>Select Department</option>
                                                    <option value="FINANCIAL DEPARTMENT">FINANCIAL DEPARTMENT</option>
                                                    <option value="IT DEPARTMENT">IT DEPARTMENT</option>
                                                    <option value="STOCK DEPARTMENT">STOCK DEPARTMENT</option>
                                                    <option value="INVETORY DEPARTMENT">INVETORY DEPARTMENT</option>
                                                </select>
                                        </div>

                                        <div>

                                        <button className="btn btn-success" type="submit" >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                       
                                        </form>
                            
                                </div> 
                            </div>
                        </div>

                   </div>
            </div>

            

            
        );
    }
}

export default CreateVehicleComponent;

