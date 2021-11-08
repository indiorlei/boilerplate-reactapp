import { AboutPage } from "pages/About";
import { HomePage } from "pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}
