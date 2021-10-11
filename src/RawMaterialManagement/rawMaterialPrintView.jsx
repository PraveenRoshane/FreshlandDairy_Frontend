import react, { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router';
import RawMaterialDataService from '../API/RawMaterialDataService';
import printJS from 'print-js';

function RawmeterialReportView (props) {
    
    const {month}= useParams();
    const [rawmaterial, setrawmaterial] = useState([])
    const history = useHistory()

    useEffect(()=>{
        refreshrstocks()
    },[])
    
    const refreshrstocks=() =>{
    
        RawMaterialDataService.Search(month)
            .then(response => {setrawmaterial(response.data)}
            )
        }

        return(
            <>
            <br></br>
            <div className = "RawmeterialReportView">
                <h1>List OF {month} </h1>
                

                <div className="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Raw Material ID</th>
                            <th>Raw Material Type</th>
                            <th>Raw Material name</th>
                            <th>Date</th>
                            <th>Arriving QTY</th>
                            <th>Relesing QTY</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            rawmaterial.map(
                                rawmaterial=>
                                <tr key ={rawmaterial.id}>
                                    <td>{rawmaterial.rawMID}</td>
                                    <td>{rawmaterial.rawMType}</td>
                                    <td>{rawmaterial.rawMName}</td>
                                    <td>{rawmaterial.date}</td>
                                    <td>{rawmaterial.arrQty}</td>
                                    <td>{rawmaterial.reQty}</td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
                
                </div>
                <div>
              <button type="button" className="btn btn-info" onClick={ () =>printJS({
              printable: rawmaterial, header: 'Stock Report',
                properties: [  { field: 'rawMID', displayName: 'Rawmaterial ID'},
                                { field: 'rawMType', displayName: 'Rawmaterial Type'},
                                { field: 'rawMName', displayName: 'Raw material Name'},
                                
                                { field: 'date', displayName: 'date'},
                                { field: 'arrQty', displayName: 'arrQty'},
                                { field: 'reQty', displayName: 'reQty'}],
              type: 'json'
                })}>
                Print  Report
                </button>
              </div>
        </div><br></br>
        </>
        );
    
}

export default RawmeterialReportView;