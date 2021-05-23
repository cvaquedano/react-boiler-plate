import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="\" component={login}/>
       <Route exact path="\signup" component={signup}/>
       <Route exact path="\master" component={master}/>
     </Switch>

   </Router>
  );
}

export default App;
