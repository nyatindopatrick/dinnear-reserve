import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Loading from "./components/Loader/Loading";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search Loading={Loading} />
        </Route>
        <Route path="/hotel/:id" exact component={Products} />

        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
