import axios from "axios";
import {JPA_API_URL } from '../../Constants';

class AccountServices{
    retriveAllAccounts(){
        return axios.get(`${JPA_API_URL}/users/accounts`);
    }

    deleteAccount(id){
        return axios.delete(`${JPA_API_URL}/users/accounts/${id}`);
    }

    retriveAccount(id){
        return axios.get(`${JPA_API_URL}/users/accounts/${id}`);
    }

    updateAccount(id, Account){
        return axios.put(`${JPA_API_URL}/users/accounts/${id}`, Account);
    }

    createAccount(Account){
        return axios.post(`${JPA_API_URL}/users/accounts`, Account);
    }
    
    getAccountReportObjects(accountType, month, year){
        return axios.get(`${JPA_API_URL}/users/accounts/getreportobjects/${accountType}/${month}/${year}`)
    }

    getSum(accountType, month, year){
        return axios.get(`${JPA_API_URL}/users/accounts/getreportsums/${accountType}/${month}/${year}`)
    }
    
}
export default new AccountServices();