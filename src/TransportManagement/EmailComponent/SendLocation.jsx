// import React, { Component } from 'react';
import emailjs from "emailjs-com";

const SendLocation = () => {

    function sendemail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_te9rdrw',
            'template_t7wgl5z',
            e.target,
            'user_82jopq3UFMlV5szQ1YBg1'
            ).then(res =>{
                console.log(res);
            });

    }

        return (
        

            <div style = {{marginBottom:"100px"}}>
                <br></br>
                   <div className = "needs-validation" >
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" >
                                <h3>Send Locations to driver</h3> 
                               
                                <div className = "card-body" >
                                    <form 
                                    onSubmit={sendemail}>

                                        <div className = "form-group">

                                            <label > Date: </label>

                                            <input type="date" name="date" className="form-control" required
                                                //  value={this.state.bill_number} 
                                                //  onChange={this.changeBill_numberHandler}
                                                 /> 
                                           
                                        </div>

                                        <div className = "form-group">

                                            <label> Vehicale Regiser number: </label>

                                            <input name="veh_number" className="form-control" required
                                                // value={this.state.veh_number}
                                                // onChange={this.changeVeh_numberHandler}
                                                /> 
                                        </div>

                                        <div className = "form-group">

                                            <label> Driver Name: </label>

                                            <input type="text" name="driver_name" className="form-control" required
                                                // value={this.state.date} 
                                                // onChange={this.changeDateHandler} 
                                                // plaintext readOnly 
                                                // defaultValue={this.state.date}
                                                />
                                        </div>

                                        <div className = "form-group">

                                            <label> Dreiver Email: </label>

                                            <input name="driver_email" type="text" className="form-control" required
                                                // value={this.state.veh_number}
                                                // onChange={this.changeVeh_numberHandler}
                                                /> 
                                            </div>

                                            <div className = "form-group">

                                            <label> Delivery Location: </label>

                                            <input name="location" type="text" className="form-control" required
                                                // value={this.state.veh_number}
                                                // onChange={this.changeVeh_numberHandler}
                                                /> 
                                            </div>


                                            <div className = "form-group">
                                            <label> Order Number: </label>

                                                <input name="order_num" type="text" className="form-control" required
                                                    // value={this.state.veh_number}
                                                    // onChange={this.changeVeh_numberHandler}
                                                    /> 
                                            </div>

                                            <div className = "form-group">
                                            <label> Note: </label>

                                                
                                                  <textarea class="form-control" name="note" rows="3"
                                                    // value={this.state.veh_number}
                                                    // onChange={this.changeVeh_numberHandler}
                                                    /> 
                                            </div>
                                      
                                                                   
                                        <div>

                                            {/* <button className="btn btn-success" onClick={this.save}>Submit</button>                               
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                            <button className="btn btn-success">Submit</button>    
                                        </div>

                                    </form>
                                    
    

                                </div> 
                            </div>
                        </div>

                   </div>
            </div>
      
        );
    
}

export default SendLocation;