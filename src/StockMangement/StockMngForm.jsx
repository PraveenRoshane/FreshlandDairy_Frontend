/* eslint-disable */
import moment from 'moment';
import React, {Component} from 'react'
import { Formik , Form , Field, ErrorMessage} from 'formik';
import stockmanagementDataService from '../API/StockManagement';
class StockForm extends Component{

    constructor(props){
        super(props)
        this.state={
            id : this.props.match.params.id,
            sid : 'SID',
            name : 'Enter Name',
            discription : 'Enter Discription',
            wight : 'Enter Wight',
            price: 'Enter Price',
            date : moment(new Date()).format('YYYY-MM-DD'),
            arrQty : 'QTY',
            reQty : 'QTY'
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate(values){
        let errors = {}
        

        return errors
    }
    componentDidMount() {
        if (this.state.id == -1){
            return
        }
        
        stockmanagementDataService.retrivestock(this.state.id)
            .then (response => this.setState({
                sid : response.data.sid,
                name : response.data.name,
                discription : response.data.discription,
                wight : response.data.wight,
                price : response.data.price,
                arrQty : response.data.arrQty,
                date : moment(response.data. date).format('YYYY-MM-DD'),
                reQty : response.data.reQty

            }))
    }


    onSubmit(values){
        if (this.props.match.params.id == -1){
            stockmanagementDataService.createstock({
                sid: values.sid,
                name : values.name,
                discription : values.discription,
                wight : values.wight,
                price : values.price,
                arrQty: values.arrQty,
                reQty: values.reQty,
                date : values.date})
            .then(() => this.props.history.push('/StockManagement/view'))
        }else{
            stockmanagementDataService.updatestock(this.props.match.params.id , {
                sid : values.sid,
                name : values.name,
                discription : values.discription,
                wight : values.wight,
                price : values.price,
                arrQty: values.arrQty,
                reQty: values.reQty,
                date : values.date})
        .then(() => this.props.history.push('/StockManagement/view'))
         }
    }


    render(){

        let {sid,name,discription,wight, price, date, arrQty, reQty} =this.state
        return(
        <div><br></br>
            <h1>Stock</h1>
            <div className = "container">
                <Formik
                    initialValues ={{sid,name,discription,wight, price, date, arrQty, reQty}}
                    onSubmit = {this.onSubmit}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage name = "sid" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>SID</label>
                                        <Field className ="form-control" type ="text" name ="sid"/>
                                    </fieldset>
                                <ErrorMessage name = "name" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>Name</label>
                                        <Field className ="form-control" type ="text" name ="name"/>
                                    </fieldset>
                                <ErrorMessage name = "discription" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>Discription</label>
                                        <Field className ="form-control" type ="text" name ="discription"/>
                                    </fieldset>
                                <ErrorMessage name = "date" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                            <label>date</label>
                                            <Field className="form-control" type="date" name="date" />
                                    </fieldset>
                                <ErrorMessage name = "wight" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>wight</label>
                                        <Field className ="form-control" type ="text" name ="wight"/>
                                    </fieldset>
                                <ErrorMessage name = "price" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>price</label>
                                        <Field className ="form-control" type ="text" name ="price"/>
                                    </fieldset>
                                <ErrorMessage name = "arrQty" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label> Arreival Qty</label>
                                        <Field className ="form-control" type ="text" name ="arrQty"/>
                                    </fieldset>
                                <ErrorMessage name = "reQty" component="div" className = "alert alert-warning"></ErrorMessage>
                                    <fieldset className = "form-group">
                                        <label>Relese Qty</label>
                                        <Field className ="form-control" type ="text" name ="reQty"/>
                                    </fieldset>
                                    <button className ="btn btn-success" type ="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
        </div>
        <br></br>
        </div>
        )
    }

}
export default StockForm;