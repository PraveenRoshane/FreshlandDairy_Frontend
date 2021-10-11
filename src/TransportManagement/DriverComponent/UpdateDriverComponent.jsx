import React, { Component } from 'react';
import DriverService from '../../API/TransportApi/DriverService';

class UpdateDriverComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            dfirstName: '',
            license: '',
            email: ''
          }

          this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
          this.changeLicenseHandler = this.changeLicenseHandler.bind(this);
          this.changeEmailHandler = this.changeEmailHandler.bind(this);
          this.UpdateDriver = this.UpdateDriver.bind(this);
    }



    componentDidMount(){
        DriverService.getDriverById(this.state.id).then( (res) =>{
            let driver = res.data;
            this.setState({
                dfirstName: driver.dfirstName,
                license: driver.license,
                email : driver.email
            });
        });
    }
    
    UpdateDriver= (e)=> {
        e.preventDefault();
        let driver = {dfirstName: this.state.dfirstName, license: this.state.license, email: this.state.email};
        //console.log('employee => ' + JSON.stringify(employee));
        
        DriverService.updateDriver(driver, this.state.id).then( res => {
            this.props.history.push('/transportmanagement/drivers');
        });
    
    } 
    
    
    
    //add values for first name feild while click the add button
        changeFirstNameHandler= (event) => {this.setState({dfirstName: event.target.value});
        }

        changeLicenseHandler= (event) => {this.setState({license: event.target.value});
        }

        changeEmailHandler= (event) => {this.setState({email: event.target.value});
        }

        cancel(){
            this.props.history.push('/transportmanagement/drivers');
        }





render() {
    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3>Update driver</h3>
                            {/* {
                                this.getTitle()
                            } */}
                            <div className = "card-body">
                                <form onSubmit={this.UpdateDriver}>
                                    <div className = "form-group">
                                        <label> Driver Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" required
                                            value={this.state.dfirstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> enter license number: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                        pattern="[0-9]+" title="please enter number only and maximum length is 12" required="required" maxlength="12"
                                            value={this.state.license} onChange={this.changeLicenseHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" required
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div>

                                    <button className="btn btn-success" >Update</button>
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
export default UpdateDriverComponent;