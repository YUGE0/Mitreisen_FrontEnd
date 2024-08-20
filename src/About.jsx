import React from "react";
import Info from "./Info";
import Nav from "./NavBar";

export default function About()
{
    return(
        <div>
            <Nav />
            <img className="w-full" src="logo.svg"/>
            <Info />
        </div>
    )
}