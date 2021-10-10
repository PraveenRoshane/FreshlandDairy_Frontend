import React, { Component } from 'react';
//import LIstVehicleComponent from './LIstVehicleComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import CreateVehicleComponent from './CreateVehicleComponent';
import updateVehicleComponent from './updateVehicleComponent';

import LIstVehicleComponent from './test';
//import Home1 from '../components/Home1';
//import ListMeterReading from '../MeterReadingComponent/ListMeterReading';
// import CreateMeterRead from '../MeterReadingComponent/CreateMeterRead';
//import ListEmployeeComponent from '../components/ListEmployeeComponent';
// import CreateEmployeeComponent from '../components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from '../components/UpdateEmployeeComponent';
// import FunListMeter from '../MeterReadingComponent/FunListMeter';
import CreateMeterRead from '../MeterReadingComponent/CreateMeterRead';
// import FunListDrivers from '../components/FunListDrivers';

// import FunListDrivers from '../components/FunListDrivers';

import FunListMeter from '../MeterReadingComponent/FunListMeter';
import SendLocation from '../EmailComponent/SendLocation';
// import TSideBar from '../TSideBarComponent/TSideBar';
import ListDriverComponent from '../DriverComponent/ListDriverComponent';
import CreateDriverComponent from '../DriverComponent/CreateDriverComponent';
import UpdateDriverComponent from '../DriverComponent/UpdateDriverComponent'


class TransportHome extends Component {
    render() {
        return (
            <div className= "transportmng">
            <Router>
                  <HeaderComponent />
                    <div className="container">
                    
                        <Switch>

                            {/* <Route path = "/add-vehicle" component = {TSideBar}></Route> */}

                            <Route path = "/transportmanagement/" exact component={LIstVehicleComponent}></Route>
                            <Route path = "/transportmanagement/vehicle" component={LIstVehicleComponent}></Route>
                            <Route path = "/transportmanagement/add-vehicle" component={CreateVehicleComponent}></Route> 
                            <Route path = "/transportmanagement/update-vehicle/:id" component={updateVehicleComponent}></Route> 
                            {/* <Route path = "/add-maintenance" component={AddMaintains}></Route>  */}
                            {/* <Route path = "/add-driver" component={Home1}></Route>  */}
                            {/* <Route path = "/meter-readings" component={ListMeterReading}></Route>  */}

                            <Route path = "/transportmanagement/meter-readings" component={FunListMeter}></Route> 
                            <Route path = "/transportmanagement/add-meter-readings" component={CreateMeterRead}></Route>  
                            {/* <Route path = "/employees" component = {ListEmployeeComponent}></Route> */}
                          

                            <Route path = "/transportmanagement/drivers" component = {ListDriverComponent}></Route> 
                            <Route path = "/transportmanagement/add-drivers" component = {CreateDriverComponent}></Route> 
                            <Route path = "/transportmanagement/update-driver/:id" component = {UpdateDriverComponent}></Route>

                           
                            <Route path = "/transportmanagement/send-location" component = {SendLocation}></Route>


                            {/* <Route path = "/add-vehicle" component = {TSideBar}></Route> */}


                            
                            
                        </Switch>
                        
                    </div>
                
                  <FooterComponent />
            </Router>
        </div>
        );
    }
} 

export default TransportHome;


