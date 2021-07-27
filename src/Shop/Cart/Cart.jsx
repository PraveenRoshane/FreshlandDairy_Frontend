import { Component } from 'react';
import { Card } from 'react-bootstrap'

class Cart extends Component {

  constructor(props){
    super(props)

    this.state = {
        cart: [this.props.match.params.uniqCart]
    }

    this.show = this.show.bind(this)

  }

  show(){
    console.log(this.props.match.params.uniqCart)
  }


  render() {
    return (
      <div className="Cart">

        <button onClick={this.show}></button>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant="top"/>
            <Card.Text></Card.Text>
          </Card.Body>          
        </Card>
      </div>
    );
  }
}

export default Cart;