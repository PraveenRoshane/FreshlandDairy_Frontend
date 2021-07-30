import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import ProductDataService from '../../API/ProductDataService';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { setProducts } from '../../redux/shoping/shopping-action'

function ProductList({ products, setProducts }) {

    const loaddata = () => {

        ProductDataService.RerieveAllProducts()
            .then(response => { setProducts(response.data) })
    }

    useEffect(loaddata, [])

    return (
        <div className="container">
            <Grid container spacing={3}>
                {products.map((Product) => (<ProductCard product={Product} key={Product.id} />))}
            </Grid>
            <Link to={`productUpdate/-1`} style={{ textDecoration: 'none' }}>
                <Fab color="primary" aria-label="add" variant="extended">
                    <AddIcon />Add New Product
                </Fab>
            </Link>
            <br /><br />
        </div>
    );

}

const mapStateProps = (state) => {
    return {
        products: state.shop.products
    }
}

const mapDispatchProps = (dispach) => {
    return {
        setProducts: (data) => dispach(setProducts(data))
    };
}



export default connect(mapStateProps, mapDispatchProps)(ProductList)