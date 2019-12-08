import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"

import Users from "./Users/Pages/Users"
import NewPlace from "./places/Pages/Newplace"
const App=()=> {
  return <Router>
  <Switch>
<Route path="/" component={Users} exact/>
<Route path="/new"  exact component={NewPlace}/>

<Redirect to="/" />
</Switch>
  </Router>
}

export default App;
