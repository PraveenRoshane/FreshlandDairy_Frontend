import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountReportView from '../accounts/accountreportview';
import Paysheetview from '../salary/paysheetview';
import SalaryReportView from '../salary/salaryPrintView';

class FinancePrintviewer extends Component {
    render() {
      return (
        <>
        <Switch>
            <Route path = "/FinanceManagement/accounts/report/:month/:year" exact component = {AccountReportView}/>
            <Route path = "/FinanceManagement/salary/report/:id" exact component = {Paysheetview}/>
            <Route path = "/FinanceManagement/salary/report/:month/:year" exact component = {SalaryReportView}/>
            
                
            </Switch>
         </>
      );
    }
  }

export default FinancePrintviewer;