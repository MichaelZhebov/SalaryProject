import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './NavBar.css';
import About from '../about/About';
import Contacts from '../contacts/Contacts';

const history = createBrowserHistory();

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <ul class="topnav">
                        {/* <li><a class="active" href="#news">Salary</a></li>
                    <li class="right"><a href="#about">About</a></li>
                    <li class="right"><a href="#contact">Contact</a></li> */}
                        <li><Link to='/' class="active">Salary</Link></li>
                        <li class="right"><Link to='/about'>About</Link></li>
                        <li class="right"><Link to='/contacts'>Contact me</Link></li>
                    </ul>

                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contacts' component={Contacts}/>
                </div>
                
                
            </BrowserRouter>
        );
    }
}

export default NavBar;