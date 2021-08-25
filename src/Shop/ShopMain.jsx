import { Component } from 'react';
import AuthenticatedRoute from '../AuthenticatedRoute';
import ProductList from './ProductList/ProductList';
import Product from './ProductList/Product';
import ProductUpdate from './ProductList/ProductUpdate';
import Cart from './Cart/Cart';
import Checkout from './ShopOrder/Checkout';

class ShopMain extends Component {
  render() {
    return (
      <>
        <AuthenticatedRoute path="/Online-Shop" exact component={ProductList} />
        <AuthenticatedRoute path="/Online-Shop/ProductList" exact component={ProductList} />
        <AuthenticatedRoute path="/Online-Shop/product/:id" exact component={Product} />
        <AuthenticatedRoute path="/Online-Shop/productUpdate/:id" exact component={ProductUpdate} />
        <AuthenticatedRoute path="/Online-Shop/cart" exact component={Cart} />
        <AuthenticatedRoute path="/Online-Shop/ShopOrder/Shiping-Address" exact component={Checkout} />
      </>
    );
  }
}

export default ShopMain