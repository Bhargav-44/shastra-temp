import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"

import Thumbnail from "../assets/teams/thumbnail.png"
import { LinkedIn } from "@mui/icons-material"

export default function Team() {
    const [core, setCore] = useState(null)
    const [subCore, setSubCore] = useState(null)

    useEffect(() => {
        setCore([
            {id: 1, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 2, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 3, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 4, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 5, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 6, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 7, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
        ])
        setSubCore([
            {id: 1, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 2, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 3, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 4, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 5, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 6, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 7, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 8, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 9, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 10, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 11, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 12, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 13, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 14, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 15, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 16, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 17, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
            {id: 18, image: Thumbnail, name: "Shlok Prajapati", designation: "NaN", linkedin: "https://www.linkedin.com/in/shlok-2003s"},
        ])
    }, [])

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] h-20 md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>

            <div className="relative mt-32 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Know the Core</h1>

                <div className="team--core-grid grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-10 mx-3 md:mx-0 lg:mx-3 self-center md:p-10 p-5 lg:p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        core && 
                        core.map(member => (
                            <div
                                key={nanoid()} 
                                id={member.id}
                                className="aspect-auto max-h-64 w-32 md:w-40 lg:w-52 rounded-xl mx-auto my-auto col-span-2 bg-gray-500 overflow-hidden"
                            >
                                <div className="linkedin-container relative min-h-[8rem] md:min-h-[10rem] rounded-b-2xl overflow-hidden">
                                    {/* You can add padding to the image as per your requirements */}
                                    <img src={member.image} className="inline-block max-h-40 md:max-h-52 w-full object-cover object-center" alt="core image"/>
                                    <div className="linkedin absolute z-20 opacity-100 -top-[13rem] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]">
                                        <Link 
                                            to={member.linkedin} 
                                            className="cursor-pointer"
                                        >
                                            <LinkedIn sx={{height: 60, width: 50}} className="text-[#0e76a8]"/>
                                        </Link>
                                    </div>

                                </div>
                                <div className="bg-[#ffffff80] ">
                                    <h1 className="capitalize text-center text-lg">{member.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{member.designation}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="relative mt-8 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Sub-Core</h1>
                
                <div className="team--subcore-grid grid grid-cols-4 md:grid-cols-8 gap-10 mx-3 self-center p-5 md:p-10 
                                bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]
                                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-xl"
                >
                    {
                        subCore && 
                        subCore.map(member => (
                            <div
                                key={nanoid()} 
                                id={member.id}
                                className="aspect-auto max-h-64 w-32 md:w-40 lg:w-52 rounded-xl mx-auto my-auto col-span-2 bg-gray-500 overflow-hidden"
                            >
                                <div className="linkedin-container relative min-h-[8rem] md:min-h-[10rem] rounded-b-2xl overflow-hidden">
                                    {/* You can add padding to the image as per your requirements */}
                                    <img src={member.image} className="inline-block max-h-40 md:max-h-52 w-full object-cover object-center" alt="core image"/>
                                    <div className="linkedin absolute z-20 opacity-100 -top-[13rem] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#ffffff14] to-[#ffffff00] backdrop-blur-[10px]">
                                        <Link 
                                            to={member.linkedin} 
                                            className="cursor-pointer"
                                        >
                                            <LinkedIn sx={{height: 60, width: 50}} className="text-[#0e76a8]"/>
                                        </Link>
                                    </div>

                                </div>
                                <div className="bg-[#ffffff80] ">
                                    <h1 className="capitalize text-center text-lg">{member.name}</h1>  
                                    <h1 className="capitalize text-center text-sm">{member.designation}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}   