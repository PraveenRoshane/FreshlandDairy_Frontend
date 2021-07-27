import { Component } from 'react';
import ProductCard from './ProductCard';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDataService from '../../API/ProductDataService';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { map } from 'jquery';

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Products: [],
            Count: 0,
            cart: []
        }
       
        this.refreshProduct = this.refreshProduct.bind(this)
        this.cartCount = this.cartCount.bind(this)
        this.cart = this.cart.bind(this)
    }

    componentDidMount() {
        this.refreshProduct();
    }

    refreshProduct() {
        ProductDataService.RerieveAllProducts()
            .then(response => { this.setState({ Products: response.data }) })
    }

    cartCount(count, cartProduct){
        this.setState({Count: this.state.Count + count});
        this.state.cart.push(cartProduct)
    }

    

    cart(){
        const cart = this.state.cart        
        const uniqCart = [...cart.reduce( (map, obj) => map.set(obj.id, obj),new Map() ).values()];

        this.props.history.push(`/cart/${uniqCart}`)       
    }

    render() {
        return (
            <div className="container" onLoad={this.refreshProduct}>
                <button onClick={this.cart}>cart({this.state.Count})</button>
                <Grid container spacing={3}>
                    {this.state.Products.map((Product,key1) => <div key={key1}><ProductCard product={Product} cartCount={{cartCount: this.cartCount.bind(this)}}/></div>)}
                </Grid>
                <Link to={`productUpdate/-1`} style={{ textDecoration: 'none' }}>
                <Fab color="primary" aria-label="add" variant="extended">
                    <AddIcon />Add New Product
                </Fab>
                </Link>
                <br/><br/>
            </div>
        );
    }
}

export default withRouter(ProductList)