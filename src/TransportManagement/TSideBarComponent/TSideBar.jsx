import React, {Component} from 'react'
import {BrowserRouter as Route, Link} from 'react-router-dom'
import './TSideBarDesign.css';
// import WeclomeComponent from "./WelcomeComponenet.jsx";
// import AuthenticatedRoute from './AuthenticatedRoute.jsx'
// import MyAppComponent from "./MyAppComponent.jsx";
// import AttendanceComponent from "./AttendanceComponent.jsx";
// import HeaderComponent from "./HeaderComponent"
import CreateVehicleComponent from '../VehicleComponent/CreateVehicleComponent';

class TSideBar extends Component{
    render(){

        return(
            <div class="wrapper">
    <div class="sidebar">
        <h2>Freshland</h2>
        <ul>
            <li><Link class="nav-link" to="/transportmanagement/add-vehicle">Employee Details</Link></li>
            <li><Link class="nav-link" to="/transportmanagement/Attendlist">Employee Attendance</Link></li>
            <li><Link class="nav-link" to="/transportmanagement/Home">Logout</Link></li>
           
        
        </ul>
        
    </div>
    <div class="main_content">
        <div class="header"> </div>
        <div class="info">
       
        <Route path = "/transportmanagement/add-vehicle" component={CreateVehicleComponent}></Route> 
        {/* <Route path="/Attendlist/:aid" component={AttendanceComponent}/>
        <Route path="/MyApplist/:id" component={MyAppComponent}/> */}
       
            
        </div>
    </div>
</div>
        )
    }


}
export default TSideBar

