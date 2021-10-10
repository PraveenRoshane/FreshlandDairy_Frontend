import axios from 'axios';

const URL = "http://localhost:8080/api/v1/read";

class MeterService{
    
    
    getRead(){
        return axios.get(URL);
    }
    createRead(read){
        return axios.post(URL, read);
    }
    // getVehicleById(vehicleId){
    //     return axios.get(URL + '/' + vehicleId);
    // }
    // updateVehicle(vehicle, vehicleId){
    //     return axios.put(URL + '/' + vehicleId, vehicle);
    // }
    deleteRead(vehicleId){
        return axios.delete(URL + '/' + vehicleId);
    }

}
export default new MeterService()