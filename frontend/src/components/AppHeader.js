import React from "react";
import {Link} from "react-router-dom";


export default function AppHeader() {

    return (
        <>
            <Link to="/">
                <img
                    src="/images/BackArrow.svg"
                    alt="logo"
                    style={{
                        position: "absolute",
                        top: -148,
                        height: "100%",
                        width: "100%",
                        strokeOpacity: 30,
                    }}
                />
            </Link>
        </>
    )

}