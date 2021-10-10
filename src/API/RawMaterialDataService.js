import axios from "axios";
import {JPA_API_URL } from '../Constants';

class RawMaterialDataService{
    retriveAllrawmaterial(){
        return axios.get(`${JPA_API_URL}/users/rawmaterial`);
    }

    deleterawmaterial(id){
        return axios.delete(`${JPA_API_URL}/users/rawmaterial/${id}`);
    }

    retriverawmaterial(id){
        return axios.get(`${JPA_API_URL}/users/rawmaterial/${id}`);
    }

    updaterawmaterial(id, rawmaterial){
        return axios.put(`${JPA_API_URL}/users/rawmaterial/${id}`, rawmaterial);
    }

    createrawmaterial(rawmaterial){
        return axios.post(`${JPA_API_URL}/users/rawmaterial`, rawmaterial);
    }
    
    

    Search(month){
        return axios.get(`${JPA_API_URL}/users/rawmaterial/search/${month}`)
    }
    
}
export default new RawMaterialDataService();