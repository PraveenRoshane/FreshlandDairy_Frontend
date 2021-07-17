import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Authentication from '../Authentication.js';
import './Header.css';

class Header extends Component {
    render() {
        const isUserLoggedin = Authentication.isUserLoggedin();
        return (
            <div class="header2 bg-success-gradiant">
                <div class="">
                    <nav class="navbar navbar-expand-lg h2-nav"> <a class="navbar-brand" href="#">Freshland Dairy</a>
                        <div class="collapse navbar-collapse hover-dropdown" id="header2">
                            <ul class="navbar-nav">                                
                                <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                                {isUserLoggedin && <li class="nav-item"><Link class="nav-link" to="/ProductList">Product List</Link></li>}
                                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                {!isUserLoggedin && <li class="nav-item active"><Link class="nav-link" to="/login">Login</Link></li>}
                                {isUserLoggedin && <li class="nav-item"><Link class="btn rounded-pill btn-dark py-2 px-4" to="/logout" onClick={Authentication.logout}>Logout</Link></li>}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);