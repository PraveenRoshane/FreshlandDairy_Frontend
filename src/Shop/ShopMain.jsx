import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorMessage from './ErrorMessage';
import ProductList from './ProductList/ProductList';
import Product from './ProductList/Product';
import ProductUpdate from './ProductList/ProductUpdate';
import Cart from './Cart/Cart';
import PrimarySearchAppBar from './Header/newHeader';

class ShopMain extends Component {
  render() {
    return (
      <div className="ShopMain">
        <Router>
          <>
          <PrimarySearchAppBar></PrimarySearchAppBar>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" exact component={Login} />
              <AuthenticatedRoute path="/ProductList" exact component={ProductList} />
              <AuthenticatedRoute path="/product/:id" exact component={Product} />
              <AuthenticatedRoute path="/productUpdate/:id" exact component={ProductUpdate} />
              <AuthenticatedRoute path="/cart" exact component={Cart} />
              <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
              <Route component={ErrorMessage} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default ShopMain