import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Library from './components/library/Library';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import Profile from './components/profile/Profile';
import { loadUser } from './actions/authActions';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/library' component={Library} />
              <Route path='/sign-up' component={Signup} />
              <Route path='/sign-in' component={Signin} />
              <Route path='/profile' component={Profile} />
              <Route path='/explore' component={Explore} />
            </Switch>
          </div>
        </Router>
        {/* <AppFooter /> */}
      </Provider>
    );
  }
}

export default App;
