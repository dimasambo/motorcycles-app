import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./Redux/redux-store";
import {MainPage} from "./components/MainPage/MainPage";
import {Header} from "./components/Header/Header"

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className={'bodyWrapper'}>
                <Header />
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={"/unravel"}/>}/>
                    <Route path='/unravel'>
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = () => ({})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const UnravelApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default UnravelApp;