import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class MyHeader extends Component{
    
    render(){
        return (
            <header >
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <span className="text-muted">Freshland Milk</span>
                
                <ul className = "navbar-nav">
                    <li className ="nav-link"><Link className="nav-link" to="/Home">home</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/FinanceManagement/bills">Bill Function</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/FinanceManagement/salary">Salary Function</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/FinanceManagement/accounts">Accounts</Link></li>
                </ul>
                <ul className = "navbar-nav navbar-collapse justify-content-end">
                    <li className ="nav-link">Logout</li>
                    <li className ="nav-link">Swith account</li>
                </ul>
                </nav>
            </header>
        );
    }

}


export default MyHeader;