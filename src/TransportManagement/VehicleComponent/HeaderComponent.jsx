import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
    render() {
        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><h2 className="navbar-brand">Transport Management App</h2></div>
                <ul className="navbar-nav">

                        <li><Link className = "nav-link" to="/transportmanagement/send-location"><h5>Email send</h5></Link></li>
                        <li><Link className = "nav-link" to="/transportmanagement/meter-readings"><h5>Readings</h5></Link></li>
                        <li><Link className = "nav-link" to="/transportmanagement/vehicle"><h5>Vehicle</h5></Link></li>
                        <li><Link className = "nav-link" to="/transportmanagement/drivers"><h5>Driver</h5></Link></li>
                      
                    </ul>

                <ul className="navbar-nav navbar-collapse justify-content-end">
                <li><Link className = "nav-link" to="/transportmanagement/drivers"><h5>Home</h5></Link></li>
                </ul>
                </nav>
            </header>
        </div>
        );
    }
}

export default HeaderComponent;