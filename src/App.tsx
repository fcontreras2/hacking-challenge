import { Switch, BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from "shared/RouteOutlet";
import routes from "./pages/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <RouterOutlet key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
