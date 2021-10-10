import axios from 'axios';

const URL = "http://localhost:8080/api/v1/drivers";

class DriverService{
   
    getDriver(){
        return axios.get(URL);
    }
    createDriver(driver1){
        return axios.post(URL, driver1);
    }

    getDriverById(driverId){
        return axios.get(URL + '/' + driverId);
    }

    updateDriver(driver, driverId){
        return axios.put(URL + '/' + driverId, driver);
    }
    deleteDriver(driverId){
        return axios.delete(URL + '/' + driverId);
    }

}
export default new DriverService()