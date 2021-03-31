import OverviewPage from "./pages/OverviewPage";
import AppHeader from "./components/AppHeader";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from "react";
import NewRoutePage from "./pages/NewRoutePage";
import RoutesOverview from "./components/RoutesOverview";
import RouteDetails from "./pages/RouteDetails";
import AuthProvider from "./auth/AuthProvider";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import styled from 'styled-components/macro'


function App() {
    return (
        <Router>
        <AuthProvider>
            <PageLayout>
                <AppHeader/>
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
            </PageLayout>
        </AuthProvider>
        </Router>
    )
}

const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;

  background: #eee;
`


export default App;

