import React from "react"
import { Link } from "react-router-dom"

import { LinkedIn } from "@mui/icons-material"
export default function TeamCard(props) {
    return (
        <div
            // id={props.id}
            className="aspect-auto max-h-80 w-32 md:w-40 lg:w-52 rounded-xl mx-auto my-auto col-span-2 bg-gray-300 border border-black"
        >
            <div className="linkedin-container rounded-t-xl relative min-h-[8rem] md:min-h-[10rem] overflow-hidden">
                {/* You can add padding to the image as per your requirements */}
                <img src={props.image} className="inline-block max-h-40 md:max-h-52 rounded-t-xl w-full object-fill object-center" alt="core image"/>
                <div className="linkedin absolute z-20 opacity-100 -top-[13rem] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]">
                    <Link 
                        to={props.linkedin} 
                        className="cursor-pointer"
                        target="_blank"
                    >
                        <LinkedIn sx={{height: 60, width: 50}} className="text-[#0e76a8] bg-clip-text bg-white"/>
                    </Link>
                </div>

            </div>
            <div className="bg-[#ffffff80] ">
                <h1 className="capitalize text-center text-lg">{props.name}</h1>  
                <h1 className="capitalize text-center text-sm">{props.designation}</h1>
            </div>
        </div>
    )
}