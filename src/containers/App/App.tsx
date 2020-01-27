import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import './App.scss';
import { Home } from '../Home/Home';
import { Explore } from '../Explore/Explore';
import { Subscriptions } from '../Subscriptions/Subscriptions';
import { Channels } from '../Channels/Channels';
import { NotFoundRoute } from '../NotFoundRoute/NotFoundRoute';
import { Details } from '../Details/Details';

export class App extends BaseComponent {
  public render() {
    return (
      <Router>
        <div className="app">
          <Navbar/>
          <main>

            <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/feed/:id" exact component={Details}/>
            <Route path="/explore" exact component={Explore}/>
            <Route path="/subscriptions" exact component={Subscriptions}/>
            <Route path="/channels" exact component={Channels}/>
            <Route component={NotFoundRoute}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
