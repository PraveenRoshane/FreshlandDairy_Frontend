import axios from "axios";
import {JPA_API_URL } from '../../Constants';

class SalaryServices{
    retriveAllSalarys(){
        return axios.get(`${JPA_API_URL}/users/salary`);
    }

    deleteSalary(id){
        return axios.delete(`${JPA_API_URL}/users/salary/${id}`);
    }

    retriveSalary(id){
        return axios.get(`${JPA_API_URL}/users/salary/${id}`);
    }

    updateSalary(id, Salary){
        return axios.put(`${JPA_API_URL}/users/salary/${id}`, Salary);
    }

    createSalary(Salary){
        return axios.post(`${JPA_API_URL}/users/salary`, Salary);
    }

    getSum(month, year){
        return axios.get(`${JPA_API_URL}/users/salary/salarysum/${month}/${year}`)
    }
    getsendtoAccounts(month, year){
        return axios.get(`${JPA_API_URL}/users/accounts/makesalaryaccount/${month}/${year}`)
    }
    
    
}
export default new SalaryServices();