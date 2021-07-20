import { Component } from 'react';
import ProductCard from './ProductCard';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDataService from '../../API/ProductDataService';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Products: [], message: null
        }
       
        this.refreshProduct = this.refreshProduct.bind(this)
    }

    componentDidMount() {
        this.refreshProduct();
    }

    refreshProduct() {
        ProductDataService.RerieveAllProducts()
            .then(response => { this.setState({ Products: response.data }) })
    }

    render() {
        return (
            <div className="container" onLoad={this.refreshProduct}>
                <div className="grid">
                    {this.state.Products.map
                        (Product => <ProductCard product={Product} />)
                    }
                </div>
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