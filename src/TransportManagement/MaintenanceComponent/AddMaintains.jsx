import React, { Component } from 'react';
import moment from 'moment';
 


class AddMaintains extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            bill_number :"",
            veh_number:"",
            date:moment(new Date()).format('YYYY-MM-DD'),
            // count1: "",
           

        }

        this.save = this.save.bind(this);
        this.changeBill_numberHandler = this.changeBill_numberHandler.bind(this);
        this.changeVeh_numberHandler = this.changeVeh_numberHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
    }

    save= (e)=> {

        // const arr = [this.state.bill_number*1,this.state.bill_number*1];
        // let count1 = 0;
        // arr.forEach(number => {
        //     count1 += number;
        // this.setState({count1: count1});
        // })
        // console.log(count1);


        
        e.preventDefault();
        let Bill = {bill_number : this.state.bill_number*1, 
                    veh_number : this.state.veh_number, 
                    date : this.state.date, 
                    // count1: this.state.count1,   
                       
                   }

        console.log('Bill => ' + JSON.stringify(Bill));  
        
        // const arr = [this.state.bill_number*1,this.state.bill_number*1];
        // let result = 0;
        // arr.forEach(number => {
        // result += number;
        // })
        // console.log(result);
    
    }
    
    

    changeBill_numberHandler= (event) => {
        this.setState({bill_number: event.target.value});
        }
    changeVeh_numberHandler= (event) => {
        this.setState({veh_number: event.target.value}); }
    changeDateHandler= (event) => {
        this.setState({date: event.target.value}); }



    
    cancel(){
        this.props.history.push('/transportmanagement/vehicle');
    }
    


    render() {
        return (
           
        


            <div>
        
                 <div>
                <br></br>
                   <div className = "needs-validation">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>Make Quotations</h3> 
                               
                                <div className = "card-body">
                                    <form >
                                        <div className = "form-group">
                                            <label > Bill Number: </label>
                                            <input name="bill_number" className="form-control " type="text"  required
                                                 value={this.state.bill_number} onChange={this.changeBill_numberHandler}/> 
                                           
                                        </div>

                                        <div className = "form-group">
                                            <label> Vehicale Regiser number: </label>
                                            <input name="veh_number" className="form-control" required
                                                value={this.state.veh_number} onChange={this.changeVeh_numberHandler}/> 
                                        </div>

                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input type="date" name="date" className="form-control" required
                                                value={this.state.date} onChange={this.changeDateHandler} plaintext readOnly defaultValue={this.state.date}/>
                                        </div>
                                      
                                                                   
                                        <div>

                                        <button className="btn btn-success" onClick={this.save}>Print</button>
                                  
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                    {/* <script> */}
    
{/* {(function() {
    "use strict";     
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})()};
</script> */}
                                </div> 
                            </div>
                        </div>

                   </div>
            </div>
                
            </div>
        );
    }
}



export default AddMaintains;

