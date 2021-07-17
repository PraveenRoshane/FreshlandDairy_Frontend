import { Component } from 'react';
import ProductCard from './ProductCard';
import Authentication from '../Authentication';
import ProductDataService from '../../API/ProductDataService';

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Products: [], message: null
        }

        // this.deleteTodoClick = this.deleteTodoClick.bind(this)
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

    //   deleteTodoClick(id) {

    //     let username = Authentication.getUserLoggedin()
    //     TodoDataService.deleteTodo(username, id)
    //       .then(response => {
    //         this.setState({ message: `Delete of todo ${id} Success` })
    //         this.refreshTodos()
    //       })

    //   }

    //   updateTodoClick(id) {

    //     this.props.history.push(`/todos/${id}`)

    //   }

    //   addClick(){

    //     this.props.history.push(`/todos/-1`)

    //   }


    render() {
        return (
            <div className="container">
                <div className="grid">
                    {this.state.Products.map
                        (Product => <ProductCard product={Product} />)
                    }
                </div>
            </div>
        );
    }
}

export default ProductList


// { id: 1, name: 'Milk', price: 500, description: 'As an agricultural product, dairy milk is collected from farm animals. Dairy farms produced around 730 million tonnes (800 million short tons) of milk in 2011,from 260 million dairy cows.', url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' },
//             { id: 2, name: 'Milk Powder', price: 1000, description: 'As an agricultural product, dairy milk is collected from farm animals. Dairy farms produced around 730 million tonnes (800 million short tons) of milk in 2011,[5] from 260 million dairy cows.', url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' },
//             { id: 3, name: 'Yorget', price: 1200, description: 'As an agricultural product, dairy milk is collected from farm animals. Dairy farms produced around 730 million tonnes (800 million short tons) of milk in 2011,[5] from 260 million dairy cows.', url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' },
//             { id: 4, name: 'Curd', price: 600, description: 'As an agricultural product, dairy milk is collected from farm animals. Dairy farms produced around 730 million tonnes (800 million short tons) of milk in 2011,[5] from 260 million dairy cows.', url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' }
            