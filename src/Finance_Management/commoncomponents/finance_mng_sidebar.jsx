import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './lahirucommoncss.css';
import billform from '../billpayments/billform';
import FmBillView from '../billpayments/fmbillviewfunc';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from '../testcomponents/examlple';
import FinancePic from './finacepic';

class FinanceMngSidebar extends Component{
        //constructor(props){
        // super(props)
        //}
      render(){
          return (
            <div className="fmwrapper">
            <div className="fmsidebar">
            <h4>Bill<br></br> Management</h4>
                <ul>
                    <li><i className="fa fa-home"></i> <Link className="nav-link" to="/FinanceManagement/bills/view">View Bills</Link></li>
                    <li><i className="fa fa-user"></i> <Link className="nav-link" to="/FinanceManagement/bills/-1"> Create New Bill</Link></li>
                    {/*<li><i className="fa fa-user"></i> <Link className="nav-link" to="/FinanceManagement/bills/search">Monthly Bill Report</Link></li>*/}
                    <li><i className="fa fa-user"></i> <Link className="nav-link" to="/FinanceManagement/bills/report">Monthly Bill Report</Link></li>
                    <li><i className="fa fa-user"></i></li>
                </ul>
                </div>
                <div className="fmmain_content">
                <Switch>
                <Route path = "/FinanceManagement/bills/" exact component = {FinancePic}/>
                </Switch>
                {/*<Route path = "/FinanceManagement/bills/" exact component = {FinancePic}/>*/}
                <div className="fminfo">
                <Switch>
                <Route path = "/FinanceManagement/bills/report" exact component = {Example}/>
                <Route path = "/FinanceManagement/bills/view" exact component = {FmBillView}/>
                <Route path = "/FinanceManagement/bills/:id" component = {billform}/>
                </Switch>
                
                
                </div>
                </div>
              
        </div>
       );
  }

}
export default FinanceMngSidebar;

