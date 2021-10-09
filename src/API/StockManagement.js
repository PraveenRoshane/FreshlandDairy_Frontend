import axios from "axios";

class stockmanagementDataService{
    retriveAllstocks(){
        return axios.get('http://localhost:8080/users/stockmanagement');
    }

    deletestock(id){
        return axios.delete(`http://localhost:8080/users/stockmanagement/${id}`);
    }

    retrivestock(id){
        return axios.get(`http://localhost:8080/users/stockmanagement/${id}`);
    }

    updatestock(id, stock){
        return axios.put(`http://localhost:8080/users/stockmanagement/${id}`, stock);
    }

    createstock(stock){
        return axios.post('http://localhost:8080/users/stockmanagement', stock);
    }
    
    
    Search(month){
        return axios.get(`http://localhost:8080/users/stockmanagement/search/${month}`)
    }
    
}
export default new stockmanagementDataService();