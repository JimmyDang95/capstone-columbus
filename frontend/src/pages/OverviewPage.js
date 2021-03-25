
import {Link} from "react-router-dom";
import React from "react";

export default function OverviewPage() {
    return (
        <div>
            <button>
                <Link to="/routesoverview">
                    Show all Routes
                </Link>
            </button>
            <button>
                <Link to="/newroutepage">
                    Add new Route
                </Link>
            </button>
        </div>
    )
}