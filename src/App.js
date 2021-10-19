import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from './Component/Error/Error';
import Navbar from './Component/Header/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/home/Home';
import Treatments from './Component/Treatments/Treatments';
import Details from './Component/Details/Details';
import Login from './Component/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Component/Login/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/treatments">
              <Treatments></Treatments>
            </PrivateRoute>
            <PrivateRoute path="/details/:detailsId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
