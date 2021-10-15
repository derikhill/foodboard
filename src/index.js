import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './tailwind.output.css';
import { WindyProvider } from "@webeetle/windy";
import Theme from "./Theme.js";
import NavbarResponsive from './NavbarResponsive';
import Footer from './Footer';
import Home from './Home';
import FoodSingle from './FoodSingle';
import About from './About';
import AddMealForm from './AddMealForm';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render( 
  <React.StrictMode >
    <WindyProvider theme={Theme}>
    <Auth0ProviderWithHistory>
      <Router>
        <NavbarResponsive />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/food/:id"
            render = {(props) => <FoodSingle {...props} /> }>
          </Route>
          <Route path="/addmeal">

              <AddMealForm />

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </Auth0ProviderWithHistory>
    </WindyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();