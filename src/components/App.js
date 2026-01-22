
import React from "react";
import './../styles/App.css';
import { Route, Switch } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <h1>Item List</h1> */}
       
        <Switch>
      <Route exact path="/" component={ItemList} />
      <Route path="/item/:id" component={ItemDetail} />
    </Switch>
    </div>
  )
}

export default App
