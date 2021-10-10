import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../Finance_Management/commoncomponents/lahirucommoncss.css'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StockView from './StockmngView';
import StockForm from './StockMngForm';
import StockReportSearch from './StockSearch';
import StockReportView from './StockPrintView';

class StockMngSidebar extends Component{
  render(){
      return (
        <div className="FinanceManagementRoute">
        <div className="encloser">
        <div className="fmwrapper">
        <div className="fmsidebar">
            <h4>Stock Management</h4>
            <ul>
                <li><i></i><Link className="nav-link" to="/Home">Home Page</Link></li>
                <li><i></i><Link className="nav-link" to="/StockManagement/view">View Stock</Link></li>
                <li><i></i><Link className="nav-link" to="/StockManagement/-1"> Create New Stock</Link></li>
                <li><i></i><Link className="nav-link" to="/StockManagement/report"> Create Monthy report</Link></li>
                
                <li><i></i><Link className="nav-link" to="/"> LogOut</Link></li>
                <li><i ></i></li>
            </ul>
            </div>
            <div className="fmmain_content">
            <div className="fminfo">
            <Switch>
                <Route path = "/StockManagement/report/:month" exact component = {StockReportView}/>
                <Route path = "/StockManagement/report" exact component = {StockReportSearch}/>

                <Route path = "/StockManagement" exact component = {StockView}/>
                <Route path = "/StockManagement/view" exact component = {StockView}/>
                <Route path = "/StockManagement/:id" exact component = {StockForm}/>
            </Switch>
            </div>
        </div>
        </div>
        </div>
        </div>
   );
}

}
export default StockMngSidebar;