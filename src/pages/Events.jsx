import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import {events} from "../data"

import EventCard from "../components/Card/EventCard"
import Event from "../assets/events/watermark-black-opacity-half.png"
import Watermark from "../assets/events/watermark-white.png"

import Hackathon from "../assets/events/hackathon.jpg"
import Gaming from "../assets/events/gaming.jpg"
import HackaWack from "../assets/events/hackawack.jpg"

const imageArr = [Hackathon, Gaming, HackaWack]

const pastEvents = "https://alston-shastra-apis.onrender.com/api/past-events";
const UpcomingEvents = "https://alston-shastra-apis.onrender.com/api/upcoming-events";

export default function Events() {
    const [upcoming_event, setUpcoming_Event] = useState([])


    // Example: 2023-03-31T19:00:00+05:30 --> 31-03-2023
    function convertToDate(apiDate) {
        let timestamp = new Date(apiDate).getTime();
        let dateObj = new Date(timestamp);
        let day = dateObj.getDate().toString().padStart(2, 0);
        let month = (dateObj.getMonth() + 1).toString().padStart(2, 0);
        let year = dateObj.getFullYear();
        let eventDate = `${day}-${month}-${year}`;
        return eventDate;
    }

    // Example: 2023-03-31T19:00:00+05:30 --> 19:00
    function convertToTime(apiDate) {
        let timestamp = new Date(apiDate).getTime();
        let dateObj = new Date(timestamp);
        let hours = dateObj.getHours().toString().padStart(2, 0);
        let minutes = dateObj.getMinutes().toString().padStart(2,0);
        let eventTime = `${hours}:${minutes}`;
        return eventTime;
    }

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="relative mt-32 w-full flex flex-col text-center items-center justify-center py-4">

                <div className="absolute -z-10 grid items-center w-full h-full">
                    <img src={Event} className="w-full "/>
                    {/* You can update the watermark from here */}
                </div>

                <h1 className="font-normal min-[0px]:text-2xl min-[350px]:text-3xl min-[470px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    BRUSH YOUR CALIBRE BY <br/> PARTICIPATING IN <br/>UPCOMING EVENTS<br/> FEATURED BY
                </h1>
                <span className=" font-bold min-[0px]:text-4xl min-[350px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-yellow-500 mt-1">SHASTRA</span>
                <div className="grid grid-cols-2 justify-center items-center space-x-4 mt-4">
                    <button className="bg-pri-blue text-white py-2 px-8 lg:px-12 rounded-full text-lg md:text-xl lg:text-2xl cursor-pointer hover:bg-pri-blueDark transition-all duration-300">
                        Register Now
                    </button>
                    <button className="border border-black  text-black py-2 px-8 lg:px-12 rounded-full text-lg md:text-xl lg:text-2xl cursor-pointer hover:bg-gray-200 transition-all duration-300">
                        Get Details
                    </button>
                </div>
            </div>

            {!(upcoming_event.length) ? <span className="capitalize font-bold ml-2 md:ml-16 text-xl md:text-3xl inline-block w-max">No Upcoming Events!</span> : 
            <div className="flex flex-col my-16">
                <span className="capitalize font-bold ml-2 md:ml-16 text-xl md:text-3xl inline-block w-max">Upcoming Event!</span>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7 self-center
                                md:gap-10 mx-3 md:mx-0 lg:mx-3 md:p-10 p-5"
                >
                    {   
                        upcoming_event && upcoming_event.map(currEvent => (
                            <EventCard 
                                key={nanoid()}
                                name={currEvent.attributes.name}
                                criteria="All"
                                date={convertToDate(currEvent.attributes.startTime) + " " + convertToTime(currEvent.attributes.startTime)}
                                image={imageArr[Math.floor(Math.random()*imageArr.length)]}
                                link={currEvent.attributes.contestLink}   
                            />
                        ))
                    }
                </div>
            </div> }

            <div className="flex flex-col my-16">
                <span className="capitalize font-bold ml-2 md:ml-16 text-xl md:text-3xl inline-block w-max">Past Event!</span>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-7 self-center
                                md:gap-10 mx-3 md:mx-0 lg:mx-3 md:p-10 p-5"
                >
                    {   
                        events && events.map(currEvent => (
                            <EventCard
                                key={nanoid()}
                                id={currEvent.id}
                                name={currEvent.name}
                                criteria="All"
                                date={convertToDate(currEvent.startTime) + " " + convertToTime(currEvent.startTime)}
                                image={imageArr[Math.floor(Math.random()*imageArr.length)]}
                                link={currEvent.contestLink} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
