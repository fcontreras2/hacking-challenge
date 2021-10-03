import { Switch, BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from "shared/RouteOutlet";
import Providers from "providers";
import routes from "./pages/routes";

const App = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          {routes.map((route) => (
            <RouterOutlet key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </Providers>
  );
};

export default App;
