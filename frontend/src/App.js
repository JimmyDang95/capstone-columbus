import OverviewPage from "./pages/OverviewPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from "react";
import NewRoutePage from "./pages/NewRoutePage";
import RoutesOverview from "./components/RoutesOverview";
import RouteDetails from "./pages/RouteDetails";
import AuthProvider from "./auth/AuthProvider";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import Navbar from "./components/Navbar";


function App() {
    return (
        <Router>
        <AuthProvider>
            <Navbar/>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
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

