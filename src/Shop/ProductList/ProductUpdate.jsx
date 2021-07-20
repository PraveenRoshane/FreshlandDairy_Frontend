import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductDataService from '../../API/ProductDataService.js';

class ProductUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: null,
            description: '',
            url: ''
        }

        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        } else {
            ProductDataService.RerieveProduct(this.state.id)
                .then(response => this.setState({ name: response.data.name, price: response.data.price, description: response.data.description, url: response.data.url }))
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

        let product = { id: this.state.id, name: values.name, price: values.price, description: values.description, url: values.url }

        if (this.state.id != -1) {
            ProductDataService.updateProduct(this.state.id, product)
                .then(() => this.props.history.push(`/product/${this.state.id}`))
        }
        else {

            ProductDataService.addTodo(product)
                .then(() => this.props.history.push('/ProductList'))
        }
    }

    render() {

        let { name, price, description, url } = this.state

        return (
            <div>
                <br />
                <h1>{this.state.name}</h1>
                <div className="container">
                    <br />
                    <Formik initialValues={{ name, price, description, url }} onSubmit={this.onSubmit} validate={this.validate} enableReinitialize={true} validateOnChange={true} >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" width="100px" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price Rs.</label>
                                        <Field className="form-group" type="text" name="price" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-group" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Image URL</label>
                                        <Field className="form-group" type="text" name="url" />
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