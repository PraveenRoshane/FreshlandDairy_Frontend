import react, { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router';
import stockmanagementDataService from '../API/StockManagement';
import printJS from 'print-js';

function StockReportView  (props){
    
    const {month}= useParams();
    const [stock, setstock] = useState([])
    const history = useHistory()

    useEffect(()=>{
        refreshrstocks()
    },[])

    const refreshrstocks=() =>{
    
        stockmanagementDataService.Search(month)
            .then(response => {setstock(response.data)}
            )
        }

    
    
    
    
        return(
            <>
            <br></br>
            <div className = "StockReportView">
                <h1>List OF {month} </h1>
                

                <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Stock SID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Wight</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Arriving QTY</th>
                            <th>Relesing QTY</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            stock.map(
                                stock=>
                                <tr key ={stock.id}>
                                    <td>{stock.sid}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.discription}</td>
                                    <td>{stock.wight}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.date}</td>
                                    <td>{stock.arrQty}</td>
                                    <td>{stock.reQty}</td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>
                <button type="button" className="btn btn-info" onClick={ () =>printJS({
              printable: stock, header: 'Stock Report',
                properties: [  { field: 'sid', displayName: 'Stock Id'},
                                { field: 'name', displayName: 'Stock name'},
                                { field: 'discription', displayName: 'Discription'},
                                { field: 'wight', displayName: 'wight'},
                                { field: 'price', displayName: 'price'},
                                { field: 'date', displayName: 'date'},
                                { field: 'arrQty', displayName: 'arrQty'},
                                { field: 'reQty', displayName: 'reQty'}],
              type: 'json'
                })}>
                Print  Report
                </button>     
        </div><br></br>
        </>
        )
    
}

export default StockReportView;