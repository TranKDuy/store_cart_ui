import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from './components/store/Store';
import NotFound from './components/notFoundPage';
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;