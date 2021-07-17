import axios from "axios"
import {JPA_API_URL } from '../Constants';

class ProductDataService {

    RerieveAllProducts(){
        return axios.get(`${JPA_API_URL}/shop/products`);
    }

    RerieveProduct(id){
        return axios.get(`${JPA_API_URL }/shop/products/${id}`);
    }

    // deleteTodo(name, id){
    //     return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    // }

    // updateTodo(name, id, todo){
    //     return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    // }

    // addTodo(name, todo){
    //     return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    // }

}

export default new ProductDataService()
