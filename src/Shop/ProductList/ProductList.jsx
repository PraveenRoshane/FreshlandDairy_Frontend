import { Component } from 'react';
import ProductCard from './ProductCard';
import Authentication from '../Authentication';
import { withRouter } from 'react-router';
import ProductDataService from '../../API/ProductDataService';

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Products: [], message: null
        }

        // this.updateTodoClick = this.updateTodoClick.bind(this)
        this.refreshProduct = this.refreshProduct.bind(this)
        // this.addClick = this.addClick.bind(this)
    }

    componentDidMount() {
        this.refreshProduct();
    }

    refreshProduct() {
        ProductDataService.RerieveAllProducts()
            .then(response => { this.setState({ Products: response.data }) })
    }

    //   addClick(){

    //     this.props.history.push(`/todos/-1`)

    //   }


    render() {
        return (
            <div className="container" onLoad={this.refreshProduct}>
                <div className="grid">
                    {this.state.Products.map
                        (Product => <ProductCard product={Product} />)
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ProductList)