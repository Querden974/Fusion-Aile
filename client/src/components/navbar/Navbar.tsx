import {  NavLink } from 'react-router'
import NavBtn from "@/components/navbar/NavBtn.js";
import React, {ReactElement} from 'react'
import {Drawer} from "../Drawer/Drawer.tsx"
import logoImg from "@/assets/Logo_Fusionailes.webp"

export default function Navbar(): ReactElement {
    return (

            <nav className="grid grid-cols-3 bg-primary-darker text-primary-content rounded-lg shadow-sm w-[65%] mx-auto justify-center p-2 place-items-center relative">
                <NavLink to="/" className="size-32 col-start-1 items-center absolute left-0 -top-4"><img src={logoImg} alt="logo"/></NavLink>


                    <div className="flex w-full gap-1 col-start-2 mx-auto justify-center">
                        <NavBtn name="Accueil" route="/"/>
                        <NavBtn name="Prestations" route="/presta"/>
                        {/*<NavBtn name="resa" route="/reserver"/>*/}

                        <NavBtn name="A propos" route="/about"/>







                </div>
                <Drawer styleBtn={'btn bg-primary hover:bg-primary-hover ml-auto col-start-3 text-white font-bold'}
                        btntxt={"Réserver maintenant"} />

            </nav>


    )
}
