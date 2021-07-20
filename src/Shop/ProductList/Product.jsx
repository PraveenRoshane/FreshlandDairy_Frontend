import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ProductDataService from '../../API/ProductDataService';

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: null,
            description: '',
            url: ''
        }

        this.deleteProductClick = this.deleteProductClick.bind(this)
        this.updateProductClick = this.updateProductClick.bind(this)
    }

    componentDidMount() {
        ProductDataService.RerieveProduct(this.state.id)
            .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url }))
    }

    deleteProductClick(id) {
        ProductDataService.deleteProduct(id)
            .then(this.props.history.push('/ProductList'))

    }

    updateProductClick(id) {
        this.props.history.push(`/productUpdate/${id}`)
    }

    render() {
        return (
            <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }} key={this.state.id} className="box">
                <Card.Img variant="top" src={this.state.url} />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Card.Text>
                        Rs.{this.state.price}.00
                    </Card.Text>
                    <Button variant="success" style={{ float: 'left' }} onClick={() => this.updateProductClick(this.state.id)}>Update</Button>
                    <Button variant="warning" style={{ float: 'Right' }} onClick={() => this.deleteProductClick(this.state.id)}>Delete</Button>
                </Card.Body>
            </Card>
        );
    }

}

export default withRouter(Product)