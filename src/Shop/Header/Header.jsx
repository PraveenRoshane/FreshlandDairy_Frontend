import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Authentication from '../Authentication.js';
import './Header.css';

class Header extends Component {
    render() {
        const isUserLoggedin = Authentication.isUserLoggedin();
        return (
            <div className="header2 bg-success-gradiant">
                <div className="">
                    <nav className="navbar navbar-expand-lg h2-nav">Freshland Dairy
                        <div className="collapse navbar-collapse hover-dropdown" id="header2">
                            <ul className="navbar-nav">                                
                                <li className="nav-item active"><Link className="nav-link">Home</Link></li>
                                {isUserLoggedin && <li className="nav-item"><Link className="nav-link" to="/ProductList">Product List</Link></li>}
                                <li className="nav-item"><Link className="nav-link">Features</Link></li>
                                <li className="nav-item"><Link className="nav-link">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link">Contact</Link></li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                {!isUserLoggedin && <li className="nav-item active"><Link className="nav-link" to="/login">Login</Link></li>}
                                {isUserLoggedin && <li className="nav-item"><Link className="btn rounded-pill btn-dark py-2 px-4" to="/logout" onClick={Authentication.logout}>Logout</Link></li>}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);