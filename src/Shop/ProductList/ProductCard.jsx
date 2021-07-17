import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import './ProductCard.css'
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <Card style={{ width: '18rem' }} key={props.product.id} className="box">
            <Link to={`product/${props.product.id}`}>
            <Card.Img variant="top" src={props.product.url} />
            </Link>
            <Card.Body>
                <Link class="nav-link link-dark"  to={`product/${props.product.id}`} ><Card.Title>{props.product.name}</Card.Title></Link>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                <Card.Text>
                    Rs.{props.product.price}.00
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard