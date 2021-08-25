/* eslint-disable */

import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductDataService from '../../API/ProductDataService.js';

class ProductUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: null,
            price: null,
            description: null,
            url: null,
            qty: null,
            newproduct: false
        }

        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        if (this.state.id == -1) {
             this.setState({ newproduct: true })
        } else {
            ProductDataService.RerieveProduct(this.state.id)
                .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url, qty: response.data.quantity }))
        }

    }

    validate(values) {
        let errors = {}

        if (!values.name || !values.price || !values.description || !values.url) {
            errors.name = 'All Fields must be filled'
        } else { }

        return errors
    }

    onSubmit(values) {

        let product = { id: this.state.id, name: values.name, price: values.price, description: values.description, url: values.url, quantity: values.qty }

        if (this.state.id !== -1) {
            ProductDataService.updateProduct(this.state.id, product)
                .then(() => this.props.history.push('/ProductList'))
                // .then(() => this.props.history.push(`/product/${this.state.id}`))
        }
        else {

            ProductDataService.addProduct(product)
                .then(() => this.props.history.push('/ProductList'))
        }
    }

    render() {

        let { name, price, description, url, qty } = this.state

        return (
            <div>
                <br />
                {this.state.newproduct && <h1>Add Product</h1>}
                <h1>{this.state.name}</h1>
                <div className="container">
                    <br />
                    <Formik initialValues={{ name, price, description, url, qty }} onSubmit={this.onSubmit} validate={this.validate} enableReinitialize={true} validateOnChange={true} >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price Rs.</label>
                                        <Field className="form-group" type="number" name="price" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-group" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Image URL</label>
                                        <Field className="form-group" type="text" name="url" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Quantity</label>
                                        <Field className="form-group" type="number" name="qty" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                    <br />
                </div>
            </div>
        );
    }
}

export default ProductUpdate