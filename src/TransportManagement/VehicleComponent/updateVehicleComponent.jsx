import React, { Component } from 'react';
import VehicleService from '../../API/TransportApi/VehicleService';
import moment from "moment";

class updateVehicleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id, 
            reg_number : '',
            veh_modle : '',
            veh_category : '',
            year : '',
            deparment : ''

         }

         this.save = this.save.bind(this);
         this.changeRegisterNumberHandler = this.changeRegisterNumberHandler.bind(this);
         this.changeVehicaleModleHandler = this.changeVehicaleModleHandler.bind(this);
         this.changeVehicleCategoryHandler = this.changeVehicleCategoryHandler.bind(this);
         this.changeModelyearHandler = this.changeModelyearHandler.bind(this);
         this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);

    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( (res) =>{
            let vehicle = res.data;
            this.setState({
                id: this.props.match.params.id,
                reg_number: vehicle.reg_number,
                veh_modle: vehicle.veh_modle,
                veh_category : vehicle.veh_category,
                year : moment(vehicle.yea).format('YYYY-MM-DD'),
                deparment : vehicle.deparment
            });
        });
    }

    save= (e)=> {
        e.preventDefault();
        let vehicle = {reg_number : this.state.reg_number, 
                        veh_modle : this.state.veh_modle, 
                        veh_category : this.state.veh_category, 
                        year : this.state.year, 
                        deparment : this.state.deparment};

        console.log('vehicle => ' + JSON.stringify(vehicle));
        
        VehicleService.updateVehicle(vehicle,this.state.id).then(res =>{
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
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>update Vehicle</h3> 
                                {/* {
                                    this.getTitle()
                                } */}
                                <div className = "card-body">
                                    <form onSubmit={this.save}>
                                        <div className = "form-group">
                                            <label> Vehicle Register Number: </label>
                                            <input placeholder="Vehicle Register Number" name="reg_number" className="form-control" required
                                                value={this.state.reg_number} onChange={this.changeRegisterNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Vehicale Modle: </label>
                                            <input placeholder="Vehicale Modle" name="veh_modle" className="form-control" required
                                                value={this.state.veh_modle} onChange={this.changeVehicaleModleHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Vehicle Category: </label>
                                            <input placeholder="Vehicle Category" name="VehicleCategory" className="form-control" required
                                                value={this.state.veh_category} onChange={this.changeVehicleCategoryHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Model year: </label>
                                            <input placeholder="Model year" type="date" name="year" className="form-control" required
                                                value={this.state.year} onChange={this.changeModelyearHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name="deparment" className="form-control" required
                                                value={this.state.deparment} onChange={this.changeDepartmentHandler}/>
                                        </div>

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
        );
    }
}

export default updateVehicleComponent;