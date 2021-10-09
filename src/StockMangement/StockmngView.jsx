import React, { useState, useEffect} from 'react'
import stockmanagementDataService from '../API/StockManagement';
import { useHistory } from 'react-router'

const StockView =() =>{
    const [stock, setstocks] = useState([])
    const [message, setMessage] = useState(null)
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=>{
        refreshrstocks()
    },[])

    
    const deletestockClicked = (id) =>{
        stockmanagementDataService.deletestock(id)
        .then(response => {
                setMessage(`Delete Of rawmaterial ${id} successful`)
                refreshrstocks()
            }
        );
    }
    const updaterstockClicked =(id) =>{
        history.push(`/StockManagement/${id}`);
    }

    
    const refreshrstocks=() =>{

        stockmanagementDataService.retriveAllstocks()
            .then(response => {setstocks(response.data)}
            )
    }
    
    
    return(
        <><br></br>
        <div className = "ViewStockDetails">
                <h1>List OF Stocks </h1>
                    {message && <div className ="alert alert-succcess">{message}</div>}

                <br></br>
                 <div>
                     <input type="text" placeholder="search" className="form-control" style={{
                        marginLeft:"10%",marginTop:20, marginBottom:20, width:"40%"}}
                        onChange={
                            (e)=>{
                                setSearch(e.target.value)
                            }
                         }/>
                 </div>

                 <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Stock PID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Net Wight</th>
                            <th>Price</th>
                            <th>Arriving QTY</th>
                            <th>Relesing QTY</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { stock.filter((val) =>
                            {
                                if (search === ""){
                                    return val
                                }
                                else if (
                                    val.name.toLowerCase().includes(search.toLowerCase())||
                                    val.discription.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return val
                                }
                                return 0;
                            }).map(
                                (stock)=>
                                <tr key ={stock.id}>
                                    <td>{stock.sid}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.date}</td>
                                    <td>{stock.discription}</td>
                                    <td>{stock.wight}</td>
                                    <td>{stock.price}</td>
                                    <td>{stock.arrQty}</td>
                                    <td>{stock.reQty}</td>
                                    <td><button className ="btn btn-warning" onClick = {() => deletestockClicked(stock.id)}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick = {() => updaterstockClicked(stock.id)}>Update</button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>

        </div><br></br>
        </>
    );
}
export default StockView;