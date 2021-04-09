import OverviewPage from "./pages/OverviewPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from "react";
import NewRoutePage from "./pages/NewRoutePage";
import RoutesOverview from "./pages/RoutesOverview";
import RouteDetails from "./pages/RouteDetails";
import AuthProvider from "./auth/AuthProvider";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <ProtectedRoute exact path="/">
                        <OverviewPage/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/newroutepage">
                        <NewRoutePage/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/routesoverview">
                        <RoutesOverview/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/routes/:name">
                        <RouteDetails/>
                    </ProtectedRoute>
                </Switch>
            </AuthProvider>
        </Router>
    )
}


export default App;

