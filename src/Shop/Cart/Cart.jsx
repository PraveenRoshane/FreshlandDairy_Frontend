import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CartItem from './CartItem';

function Cart({ cart }) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(()=>{
    let item1 = 0;
    let price1 = 0;

    cart.forEach( item => {
      item1 += item.qty;
      price1 += item.qty * item.price
      console.log(item.price)
    })

    setTotalPrice(price1)
    setTotalItems(item1)
    console.log(price1)

  },[cart,totalPrice,totalItems,setTotalPrice,setTotalItems])

  return (
    <div className="Cart">
      <div className="CartItem">
        {cart.map((product) => (<CartItem item={product} key={cart.id} />))}
      </div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
            Cart Summery
          </Typography>
          <Typography variant="h7" component="h2" gutterBottom>
            Total
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {totalItems} items
          </Typography>
          <Typography color="initial" >
            Rs.{totalPrice}.00
          </Typography>
        </CardContent>
        <button className="btn btn-primary">Confirm oder</button>
      </Card>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateProps)(Cart);