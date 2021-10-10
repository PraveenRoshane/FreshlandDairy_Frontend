import axios from "axios";
import {JPA_API_URL } from '../Constants';

class stockmanagementDataService{
    retriveAllstocks(){
        return axios.get(`${JPA_API_URL}/users/stockmanagement`);
    }

    deletestock(id){
        return axios.delete(`${JPA_API_URL}/users/stockmanagement/${id}`);
    }

    retrivestock(id){
        return axios.get(`${JPA_API_URL}/users/stockmanagement/${id}`);
    }

    updatestock(id, stock){
        return axios.put(`${JPA_API_URL}/users/stockmanagement/${id}`, stock);
    }

    createstock(stock){
        return axios.post(`${JPA_API_URL}/users/stockmanagement`, stock);
    }
    
    
    Search(month){
        return axios.get(`${JPA_API_URL}/users/stockmanagement/search/${month}`)
    }
    
}
export default new stockmanagementDataService();