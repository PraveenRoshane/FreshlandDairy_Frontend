import React, {Component} from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import UpdateBill from './UpdateBill.jsx';
import ViewProduct from './ViewProduct.jsx';
import AddProduct from './AddProduct.jsx';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBill from './CreateBill.jsx';
import ViewNewBill from './ViewNewBill.jsx';
import ViewBillDetails from './ViewBillDetails.jsx';
import UpdateProduct from './UpdateProduct.jsx';
// import { Button,Table,Card,Container,Row,Col} from 'react-bootstrap';
import PrintBill from './PrintBill.jsx';

import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, Zoom, CardHeader } from '@material-ui/core';
import bill from "../asserts/fmbill.jpg"
import udula from "../asserts/bbb.jpg"
import view from "../asserts/viewbill.jpg"
import product from "../asserts/productu.jpg"
 import Header from './Header.jsx';
 import Footer from './Footer.jsx';

class SaleseManagementHome extends Component{
    render(){
        return(
            <>
            <div className="Sales_home">
                    
                <Header/>
                    {/* <Router> */}
                    {/* <Header/> */}
                    {/* <Link to="/Sales-management">hgjhjb</Link>  */}
                        {/* <Switch> */}
                        <Route path="/Sales-management/updatebill/:id" component={UpdateBill}/>
                        {/* <Route path="/view" component={ViewBill}/> */}
                        <Route path="/Sales-management" exact component={Home}/>  
                        {/* <Route path="/insert" component={InsertBill}/>
                        <Route path="/view" component={ViewBill}/> */}
                        
                        <Route path="/Sales-management/ViewProduct" component={ViewProduct}/>
                        <Route path="/Sales-management/AddProduct" component={AddProduct}/>
                        <Route path="/Sales-management/updateproduct/:pid" component={UpdateProduct}/>

                        <Route path="/Sales-management/create" component={CreateBill}/>
                        <Route path="/Sales-management/newview" component={ViewNewBill}/>
                        <Route path="/Sales-management/viewbilldetails/:id" component={ViewBillDetails}/>
                        <Route path="/Sales-management/printBill/:bid" component={PrintBill}/>
                        {/* <Route path="/Sales-management/billview" component={BillView}/> */}
                          
                        {/* </Switch> */}
                    <Footer/>
                    {/* </Router> */}

                    </div>

           
            </>
        )
    }
} 

class Home extends Component{
    constructor(props){
        super(props)
        this.ViewClick = this.ViewClick.bind(this)
        // this.InsertClick = this.InsertClick.bind(this)
        this.ItemClick = this.ItemClick.bind(this)
        this.CreateClick = this.CreateClick.bind(this)
    }
    render(){
        return(
            
                <div className="Home">

<div className="container">
                <Grid container spacing={6} >
                    
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="create bill " />
                                <Link to={`/Sales-management/create`}>
                                    <CardMedia >
                                        <img alt='' src={udula} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="view bill" />
                                <Link to={`/Sales-management/newview`}>
                                    <CardMedia >
                                        <img alt='' src={view} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }} timeout={{ enter: 700 }}>
                            <Card elevation={10}>
                                <CardHeader title="product Management" />
                                <Link to={`/Sales-management/ViewProduct`}>
                                    <CardMedia >
                                        <img alt='' src={product} width="300dp" height="250dp" />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </div>







                    
                     {/* <React.Fragment> 
                    <h1>sales management system</h1>
                     */}
    {/* <Container>
        <div>
        <Card>
            <Row>
               
                <Col md={{ span: 4, offset:8 }}><Card>
            <Card.Header as="h5">create bill</Card.Header>
            <Card.Body>
            
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" onClick={this.CreateClick}>create bill</Button>
            </Card.Body>
            </Card></Col>
            </Row>
            </Card>
           </div> 

            <div>
                <Row>
                            <Col md={{ span: 4, offset: 50}}><Card>
                        <Card.Header as="h5">view bill</Card.Header>
                        <Card.Body>
                        
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary" onClick={this.ViewClick}>view bill</Button>
                        </Card.Body>
                        </Card></Col>

                            <Col md={{ span: 4, offset: 0 }}><Card>
                            <Card.Header as="h5">view product</Card.Header>
                            <Card.Body>
                            
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary" onClick={this.ItemClick}>view item</Button>
                            </Card.Body>
                            </Card></Col>

                            <Col md={{ span: 4, offset: 0 }}><Card>
                            <Card.Header as="h5">income</Card.Header>
                            <Card.Body>
                            
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary" onClick={this.CreateClick}>create bill</Button>
                            </Card.Body>
                            </Card></Col>

                
                    
                </Row>
                </div>
  
  
        </Container>  */}


{/* <Card style={{ width: '18rem',left:950 }}>
  <Card.Header as="h5">create bill</Card.Header>
  <Card.Body>
   
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" onClick={this.CreateClick}>create bill</Button>
  </Card.Body>
</Card> */}


                    {/* <button className="btn btn-success" onClick={this.InsertClick}>insert bil</button>
                    <button className="btn btn-success" onClick={this.ViewClick}>view bil</button>
                    <button className="btn btn-success" onClick={this.ItemClick}>view item</button>


                    <button className="btn btn-success" onClick={this.CreateClick}>create bil</button> */}
                    {/* this.props.history.push("/InsertBill") */}
                    {/* </React.Fragment>  */}
                   
                   
                </div>
                
        )
    }

    ViewClick () {
         { this.props.history.push("/Sales-management/newview") }
        console.log('aaaaaaaaaaaaa')   
    }

    // InsertClick () {
    //     { this.props.history.push("/Sales-management/update/-1") }
    //     console.log('beeeee')   
    //   }

      ItemClick(){
        { this.props.history.push("/Sales-management/ViewProduct") }
      }


      CreateClick(){
          {this.props.history.push("/Sales-management/create")}
      }


} 






class HeaderCom extends Component{
    render(){
        return(
                <div className="HeaderCom">
                   <Header/>
                    
                </div>
        )
    }
} 

class FooterCom extends Component{
    render(){
        return(
                <div className="FooterCom">
                    <hr/>
                    <footer>footerrr</footer>
                   
                </div>
        )
    }
} 

export default SaleseManagementHome