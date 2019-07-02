import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Drum from './drum';
import Board from './board';
import Boat from './boat';
import Visual from './visual';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <header className="App-header">
            <h1 className="App-logo">KARL'S REACT APP</h1>
            <ul className="App-nav">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/boarding">BOARDING</Link>
                </li>
                <li>
                    <Link to="/boating">BOATING</Link>
                </li>
                <li>
                    <Link to="/drumming">DRUMMING</Link>
                </li>
                <li>
                    <Link to="/visualz">VISUALZ</Link>
                </li>
            </ul>
            <div className="clearfix"></div>
        </header>
        <div className="App wrapper">
            <Route exact path="/" component={App} />
            <Route path="/boarding" component={Board} />
            <Route path="/boating" component={Boat} />
            <Route path="/drumming" component={Drum} />
            <Route path="/visualz" component={Visual} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
