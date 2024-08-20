import React from "react";
import Nav from "./NavBar";

export default function PageNot(){
    return(
        <>
        <Nav />
        <div className="">
            <img className="w-1/2" src="PageNotFound.svg"/>
            <h1 className="text-pn font-space text-pretty">Page Not Found</h1>
        </div>
        </>
    )
}