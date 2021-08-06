import ProductDataService from "../../API/ProductDataService";
import { setProducts } from "./shopping-action";
import { connect } from 'react-redux';

export const loaddata = () => {
    // ProductDataService.RerieveAllProducts()
    //     .then(response => { setProducts(response.data) });

    console.log('loadData')    
}

// const mapDispatchProps = (dispach) => {
//     return {
//         setProducts: (data) => dispach(setProducts(data))
//     };
// }

//export default connect(null, mapDispatchProps)(loaddata)