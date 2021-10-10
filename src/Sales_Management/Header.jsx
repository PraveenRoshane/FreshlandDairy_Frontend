
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    
    
    render(){
        return (
            <header >
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <span className="text-muted">  Freshland Milk</span>
                
                <ul className = "navbar-nav">
                    <li className ="nav-link"><Link className="nav-link" to="/Home">Home</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/Sales-management">Sales Management Home</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/Sales-management/create">create Bill Function</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/Sales-management/newview">view bill Function</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/FinanceManagement/accounts">Accounts</Link></li>
                </ul>
                <ul className = "navbar-nav navbar-collapse justify-content-end">
                    <li className ="nav-link" ><Link className="nav-link" to="/">Logout</Link></li>
                    <li className ="nav-link"><Link className="nav-link" to="/">Switch Account</Link></li>
                </ul>
                </nav>
            </header>
        );
    }

}


export default Header;