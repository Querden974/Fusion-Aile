import {  NavLink } from 'react-router'
import NavBtn from "@/components/navbar/NavBtn.js";
import React, {ReactElement} from 'react'

export default function Navbar(): ReactElement {
    return (
        <>
            <nav className="navbar bg-primary text-primary-content rounded-lg shadow-sm w-fit h-fit px-4 mx-auto mb-5 ">
                <NavLink to="/" className="navbar-brand mr-16"><img src={"./Logo_Fusionailes.webp"} className={"w-32"} alt={"logo"}/></NavLink>
                <div className="flex gap-1">
                    <NavBtn name="Accueil" route="/"/>
                    <NavBtn name="Prestations" route="/presta"/>
                    <NavBtn name="resa" route="/reserver"/>

                    <NavBtn name="A propos" route="/about"/>
                </div>

                <div className="flex ml-16 gap-2">
                    <a href="https://www.instagram.com/fusion_ailes/" target="_blank"  className={"p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/Fusionailesmassage/" target="_blank" className={"p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z" />
                        </svg>
                    </a>
                </div>


            </nav>
        </>

    )
}
