import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/shoping/shopping-action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography, Zoom } from '@material-ui/core';

function ProductCard({ product, addToCart }) {

    return (
        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: '750ms' }}>
            <Card key={product.id} elevation={10}>
                <CardHeader
                    avatar={<Avatar variant='circle' style={{backgroundColor:'orange'}}>A</Avatar>}
                    title={product.name}
                    action={
                        <IconButton aria-label="share">
                            <ShareIcon color='secondary' />
                        </IconButton>}
                />
                <Link to={`product/${product.id}`}>                    
                    <CardMedia title={product.name}>
                        <img src={product.url} width="75%" />
                    </CardMedia>
                </Link>
                <CardContent>
                    <Typography variant='h6' color='textSecondary' gutterBottom>
                        Rs.{product.price}.00
                    </Typography>
                    <Button
                    variant='contained'
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(product.id)}
                    color='primary'
                >
                    Add to cart
                </Button>
                </CardContent>
                
            </Card>
        </Zoom>
    );
}

const mapDispatchProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchProps)(ProductCard)