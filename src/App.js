import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListUser from "./components/ListUSer/ListUser";
import ViewUser from "./components/ViewUser/ViewUser";
import AddUser from "./components/AddUSer/AddUser";
import EditUser from "./components/EditUser/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container App">
      <Router>
        <Switch>
          <Route exact path="/" component={ListUser} />
          <Route exact path="/users" component={ViewUser} />
          <Route exact path="/AddUser" component={AddUser} />
          <Route exact path="/EditUser" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
