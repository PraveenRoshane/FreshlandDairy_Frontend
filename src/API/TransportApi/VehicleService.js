import axios from "axios";

const URL = "http://localhost:8080/api/v1/vehicle";

class VehicleService{

    getVehicle(){
        return axios.get(URL);
    }
    createVehical(vehicle){
        return axios.post(URL, vehicle);
    }
    getVehicleById(vehicleId){
        return axios.get(URL + '/' + vehicleId);
    }
    updateVehicle(vehicle, vehicleId){
        return axios.put(URL + '/' + vehicleId, vehicle);
    }
    deleteVehicle(vehicleId){
        return axios.delete(URL + '/' + vehicleId);
    }




}
export default new VehicleService() 