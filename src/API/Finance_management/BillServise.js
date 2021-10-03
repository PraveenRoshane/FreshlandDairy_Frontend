import axios from "axios";

class BillDataService{
    retriveAllBills(){
        return axios.get('http://localhost:8080/users/bills');
    }

    deleteBill(id){
        return axios.delete(`http://localhost:8080/users/bills/${id}`);
    }

    retriveBill(id){
        return axios.get(`http://localhost:8080/users/bills/${id}`);
    }

    updateBill(id, bill){
        return axios.put(`http://localhost:8080/users/bills/${id}`, bill);
    }

    createBill(bill){
        return axios.post('http://localhost:8080/users/bills', bill);
    }
    
    searchBill(searchitem){
        return axios.get(`http://localhost:8080/users/bills/search/${searchitem}`);
    }

    //searchBill(searchitem, DateFrom, DateTo){
    //    return axios.get(`http://localhost:8080/users/bills/search/${searchitem}/${DateFrom}/${DateTo}`);
    //}
    
}
export default new BillDataService();