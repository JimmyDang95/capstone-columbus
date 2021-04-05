import {Link} from "react-router-dom";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar/Navbar";


export default function OverviewPage() {
    return (
        <BackgroundLayout>
        <Navbar/>
            <Link to="/routesoverview">
                Show all Routes
            </Link>
            <Link to="/newroutepage">
                Add new Route
            </Link>
        </BackgroundLayout>
    )
}
