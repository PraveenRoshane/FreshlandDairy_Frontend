import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom';

function Cart({ cart }) {

  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(()=>{
    let item1 = 0;
    let price1 = 0;

    cart.forEach( item => {
      item1 += item.qty;
      price1 += item.qty * item.price
    })

    setTotalPrice(price1)
    setTotalItems(item1) 

  },[cart,totalPrice,totalItems,setTotalPrice,setTotalItems])

  const confirmOrder = () => {
    //console.log("FDO"+"-"+Math.floor(Math.random()*10000))

    // let Order = { transactionID: 1001, customerID: 1, customerName: 'kamal', amount: totalPrice }
    // console.log(Order)
    // ShopOrderService.addOrder(Order)
    // .then()

    history.push("/Online-Shop/ShopOrder/Shiping-Address")
    
  }

  return (
    <div className="Cart">
      <div className="CartItem">
        {cart.map((product, index) => (<CartItem item={product} key={index}/>))}
      </div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
            Cart Summery
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Total
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {totalItems} items
          </Typography>
          <Typography color="initial" gutterBottom>
            Rs.{totalPrice}.00
          </Typography>
          <button className="btn btn-primary" onClick={confirmOrder}>Confirm oder</button>
        </CardContent>
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