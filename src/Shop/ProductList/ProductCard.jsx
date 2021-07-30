import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/shoping/shopping-action'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

function ProductCard({ product, addToCart }) {

    return (
        <Card style={{ width: '18rem' }} key={product.id} className="box">
            <Link to={`product/${product.id}`}>
                <Card.Img variant="top" src={product.url} />
            </Link>
            <Card.Body>
                <Link className="nav-link link-dark" to={`product/${product.id}`} >
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Rs.{product.price}.00
                </Card.Text>
            </Card.Body>
            <Button
                variant="contained"
                color='inherit'
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addToCart(product.id)}
            >
                Add to cart
            </Button>
            {/* <button className="btn btn-success" onClick={() => addToCart(product.id)}>Add to Cart</button> */}
        </Card>
    );
}

const mapDispatchProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchProps)(ProductCard)