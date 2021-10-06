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
    }

    
    
    onSubmit(values){

        this.props.history.push(`/FinanceManagement/salary/report/${values.month}/${values.year}`)
        SalaryService.getsendtoAccounts(values.month,values.year)

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
                            <Field className="form-control" type="text" name="month" />

                            <label>Year </label>
                            <Field className="form-control" type="text" name="year" />
                        </fieldset>
                        
                        <button className ="btn btn-success" type ="submit">Search</button> 
                                
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