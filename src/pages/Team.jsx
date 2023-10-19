import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import {core, sub_core} from "../data"

import TeamCard from "../components/Card/TeamCard"


export default function Team() {


    console.log(sub_core)

    return (
        <div className="relative z-10 min-h-[100%]">
            <div className="fixed rounded-b-[30px] md:rounded-b-[40px] top-0 z-10 sm:h-[5.5rem] h-20 md:h-24 w-full bg-home shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]"></div>

            <div className="relative mt-32 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Know the Core</h1>

                <div className="team--core-grid team-card"
                >
                    {
                        core && 
                        core.map(member => (
                            <TeamCard 
                                key={nanoid()}
                                id={member.id}
                                image={member.image}
                                name={member.name}
                                designation={member.designation}
                                linkedin={member.linkedin}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="relative mt-8 mb-16 w-full flex flex-col">
                <h1 className="uppercase font-bold text-2xl mx-auto w-max md:text-4xl mb-7 gradient-txt">Sub-Core</h1>
                
                <div className="team--subcore-grid team-card"
                >
                    {

                        sub_core.map(member => (
                            <TeamCard 
                                key={nanoid()}
                                id={member.id}
                                image={member.image}
                                name={member.name}
                                designation={member.designation}
                                linkedin={member.linkedin}
                            />
                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}   