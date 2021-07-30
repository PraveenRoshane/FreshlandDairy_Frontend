import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Authentication from '../Authentication.js';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
    render() {
        const isUserLoggedin = Authentication.isUserLoggedin();
        return (
            <>
                {isUserLoggedin && <MenuItem> <Link className="nav-link" to="/ProductList">Product List</Link> </MenuItem>}
                {!isUserLoggedin && <MenuItem> <Link className="nav-link" to="/login">Login</Link></MenuItem>}
                {isUserLoggedin && <MenuItem> <Link className="btn rounded-pill btn-dark py-2 px-4" to="/logout" onClick={Authentication.logout}>Logout</Link></MenuItem>}
            </>
        );
    }
}

export default withRouter(Header);