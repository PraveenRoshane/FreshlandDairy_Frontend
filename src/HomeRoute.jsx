import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login'
import LogoutComponent from './Login/LogoutComponent'
import ErrorMessage from './Login/ErrorMessage'
import AuthenticatedRoute from './AuthenticatedRoute';
import ShopMain from './Shop/ShopMain';
import Layout from './Shop/Layout';

function HomeRoute() {
    return (
        <div className="HomeRoute">
            <Router>
                <>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" exact component={Login} />
                            <ShopMain/>
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <Route component={ErrorMessage} />
                        </Switch>
                    </Layout>
                </>
            </Router>
        </div>
    )
}

export default HomeRoute
