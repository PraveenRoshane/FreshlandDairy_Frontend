import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductCard(props) {
    const [products] = useState(
        {
           id:props.product.id,
           name:props.product.name,
           price:props.product.price,
           url:props.product.url 
        }
    )

    const addToCart = (products) => {
        props.cartCount.cartCount(1, products)
    };
    return (
        <Card style={{ width: '18rem' }} key={props.product.id} className="box">
            <Link to={`product/${props.product.id}`}>
                <Card.Img variant="top" src={props.product.url} />
            </Link>
            <Card.Body>
                <Link className="nav-link link-dark" to={`product/${props.product.id}`} ><Card.Title>{props.product.name}</Card.Title></Link>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                <Card.Text>
                    Rs.{props.product.price}.00
                </Card.Text>
            </Card.Body>
            <button className="btn btn-success" onClick={() => addToCart(products)}>Add to Cart</button>
        </Card>
    );
}

export default ProductCard