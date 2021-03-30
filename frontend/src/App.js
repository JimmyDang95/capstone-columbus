
import './App.css';
import OverviewPage from "./pages/OverviewPage";
import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react";
import NewRoutePage from "./pages/NewRoutePage";
import RoutesOverview from "./components/RoutesOverview";
import RouteDetails from "./pages/RouteDetails";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <AppHeader/>
                <div>
                    <OverviewPage/>
                </div>
            </Route>
            <Route path="/newroutepage">
                <NewRoutePage/>
            </Route>
            <Route path="/routesoverview">
                <RoutesOverview/>
            </Route>
            <Route path="/routes/:name">
                <RouteDetails/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

