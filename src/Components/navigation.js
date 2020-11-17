import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import HomePage from './HomePage';


export default class Navi extends Component{
    render(){
        return(
        <header className = 'navButtons'>
          <Router>
              <nav>
                <ul className='navDisplay'> 
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/experience">Experience</Link></li>
                    <li><Link to ="/protfolio">Protfolio</Link></li>
                    <li><Link to ="/contact">Contact</Link></li> 
                </ul>

                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/experience" component={Experience} />
                </Switch>
            </nav> 
          </Router>
        </header>
      );
    }
}


