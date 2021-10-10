import axios from "axios";
import {JPA_API_URL } from '../../Constants';

class BillDataService{
    retriveAllBills(){
        return axios.get(`${JPA_API_URL}/users/bills`);
    }

    deleteBill(id){
        return axios.delete(`${JPA_API_URL}/users/bills/${id}`);
    }

    retriveBill(id){
        return axios.get(`${JPA_API_URL}/users/bills/${id}`);
    }

    updateBill(id, bill){
        return axios.put(`${JPA_API_URL}/users/bills/${id}`, bill);
    }

    createBill(bill){
        return axios.post(`${JPA_API_URL}/users/bills`, bill);
    }
    
    searchBill(searchitems){
        return axios.get(`${JPA_API_URL}/users/bills/search/${searchitems}`);
    }
    searchBillCount(searchitems){
        return axios.get(`${JPA_API_URL}/users/bills/search/count/${searchitems}`);
    }
    searchBillsum(searchitems){
        return axios.get(`${JPA_API_URL}/users/bills/search/sum/${searchitems}`);
    }

    createBillAccount(month){
        return axios.get(`${JPA_API_URL}/users/accounts/makeBillaccount/${month}`);
    }
    
}
export default new BillDataService();