import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/movie/Home";
import Released from "./components/movie/Released";
import Scheduled from "./components/movie/Scheduled";
import BoxOffice from "./components/movie/BoxOffice";
import News from "./components/movie/News";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends React.Component{
  render() {
    return (
        <Router>
            <div>
                <Header/>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/released"} component={Released}/>
                        <Route exact path={"/scheduled"} component={Scheduled}/>
                        <Route exact path={"/boxoffice"} component={BoxOffice}/>
                        <Route exact path={"/News"} component={News}/>
                    </Switch>
                <Footer/>
            </div>
        </Router>
    );
  }
}
export default App;
