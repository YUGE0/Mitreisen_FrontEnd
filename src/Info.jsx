import React from "react";
import './App.css'

export default function Info()
{
    // <h1 className=" text-lg">Personalized Experiences</h1>
    // <p className="text-sm font-light">Customise your travel experiences with our bespoke suggestions,which add a unique touch to each itinerary.Your selections determine the adventure, making each journey one-of-a-kind.</p>
    return(
        <div className="p-20 bg-gradient-to-b from-Fcolor from-90% to-Tcolor to-98% h-fit font-inter space-y-28">
            <div>
            <p  className="font-light text-2xl">SPECIAL FEATURES</p>
            <h1 className="text-6xl font-bold">Benefit of joining us</h1>
            </div>
            <ul className="space-y-20">
              <li className="list-image-[url(Plan.svg)] text-3xl text-balance font-normal">Personalized Experiences <p className=" text-xl font-light">Customise your travel experiences with our bespoke suggestions, which add a unique touch to each itinerary. Your selections determine the adventure, making each journey one-of-a-kind.</p> </li>
              <li className="list-image-[url(Plan.svg)] text-3xl text-balance font-normal">Inspiring Exploration    <p className=" text-xl font-light">Mitreisen showcases hidden gems, and cross-cultural activities to provide exceptional travel experiences. Whether you're going to peaceful surroundings or surprising locations, we are your trustworthy travel companion for incredible experiences.</p> </li>
              <li className="list-image-[url(Plan.svg)] text-3xl text-balance font-normal">Seamless and Secure      <p className=" text-xl font-light">Plan your trip with Mitreisen to ensure a smooth and secure journey. On our website, you can conveniently arrange accommodation, airfare, and other necessary things. Since we're dedicated to giving you a seamless and secure booking experience, you can travel with confidence.</p> </li>
            </ul>
        </div>
    )
}