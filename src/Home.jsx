import React,{useState} from "react";
import Nav from "./NavBar";
import Panel from "./Search";
import Info from "./Info";
import Dest from "./Des_Card";
import Entry from "./JourneyJournal";
import Footer from "./Footer";

export default function Home()
{

    return(
        <div> 
            <div className="rounded-md bg-fixed bg-cover bg-no-repeat bg-[url('/Home_Bg.jpg')]">
                <Nav />
                <h1 className="p-20 text-7xl text-Scolor font-work font-bold text-wrap hover:decoration-Fcolor">Timeless Discoveries Await: Mitreisen - Elevate Your Journey with Grace"</h1>
                <Panel /> 
            </div>
            <Info />
            <Dest />
            <Entry />
        </div>
    )
}