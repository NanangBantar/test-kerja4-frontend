import "./index.css";
import { Switch, BrowserRouter } from "react-router-dom";
import Publicroute from "./Publicroute";
import Privateroute from "./Privateroute"

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import Layout from "./containers/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Publicroute exact path="/" component={Login} />
        <Publicroute exact path="/create" component={CreateAccount} />
        <Privateroute exact path="/dashboard" component={Layout} />
        <Privateroute exact path="/createfile" component={Layout} />
        <Privateroute exact path="/listfile" component={Layout} />
        <Privateroute exact path="/profile" component={Layout} />
        <Privateroute exact path="/logout" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
