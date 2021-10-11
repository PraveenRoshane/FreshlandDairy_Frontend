import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import SalaryService from '../../API/Finance_management/SalaryService';

class SalarySearch extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            month : 'Enter Month',
            year : 'Enter Year'
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleDropdownChangeyear = this.handleDropdownChangeyear.bind(this)
    }

    
    
    onSubmit(values){

        this.props.history.push(`/FinanceManagement/salary/report/${this.state.month}/${this.state.year}`)
        SalaryService.getsendtoAccounts(values.month,values.year)

    }

    handleDropdownChange(e) {
        this.setState({ month: e.target.value });
      }
      handleDropdownChangeyear(e) {
        this.setState({ year: e.target.value });
      }
        
    
    render(){
        let {month, year} =this.state
        return(
            <>
            <h1>Genarate Salary Report</h1>
            <div className="container">
            <Formik
                initialValues ={{month, year}}
                onSubmit = {this.onSubmit}
                enableReinitialize = {true}
            >
                {
                    (props)=> (
                        <Form>

                        <fieldset className = "form-group">
                        
                        <label>Month</label>
                        {/* <Field className="form-control" type="text" name="month" /> */}
                        <select id="dropdown" onChange={this.handleDropdownChange} className="form-control">
                            <option value="">select month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                            </select>
                        <label>Year </label>
                        {/* <Field className="form-control" type="text" name="year" /> */}
                        <select id="dropdown" onChange={this.handleDropdownChangeyear} className="form-control">
                            <option value="">select year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            </select>

                    </fieldset>
                    
                    <button className ="btn btn-success" type ="submit">Search</button> 
                        
                        {/* <fieldset className = "form-group">
                        
                            <label>Month</label>
                            <Field className="form-control" type="text" name="month" placeholder="Month"/>

                            <label>Year </label>
                            <Field className="form-control" type="text" name="year" />
                        </fieldset>
                        
                        <button className ="btn btn-success" type ="submit">Search</button>  */}
                                
                        </Form>
                    )
                }
            </Formik>  
            </div><br></br>
            </>


        )
    }
}

export default SalarySearch;