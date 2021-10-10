import React, {Component} from 'react'
import stockmanagementDataService from '../API/StockManagement';


class StockReportView extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            stock : [],
            month : this.props.match.params.month
        }
        
    }
    
    componentDidMount (){
        stockmanagementDataService.Search(this.state.month)
            .then(
                response => {
                    this.setState({stock : response.data})
                }
            )
        
    }
    
    
    render(){
        return(
            <>
            <br></br>
            <div className = "StockReportView">
                <h1>List OF {this.state.month} </h1>
                

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
                            this.state.stock.map(
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

        </div><br></br>
        </>
        )
    }
}

export default StockReportView;