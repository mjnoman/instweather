import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import User from "./Components/User";
import Weather from "./Components/Weather";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>

      <Switch>
        <Route exact path="/login" component={User} />
      </Switch>

      <Switch>
        <Route exact path="/register" component={User} />
      </Switch>

      <Switch>
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;
