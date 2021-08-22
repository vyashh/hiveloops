import { useContext } from "react";
import { Context } from "./Services/Store";
import { Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Services/Auth";
import history from "./Services/history";
import Discover from "./Pages/Discover/Discover";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Services/PrivateRoute";

const App: React.FC = () => {
  const { loadingState } = useContext(Context);
  const [loading, setLoading] = loadingState;

  return (
    <Router history={history}>
      <AuthProvider>
        <Switch>
          {/* <PrivateRoute exact path="/" component={Discover} /> */}
          <Route path="/" component={Discover} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
