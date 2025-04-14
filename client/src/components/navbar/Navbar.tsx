import {NavLink, NavLinkRenderProps} from 'react-router'
import NavBtn from "@/components/navbar/NavBtn.js";
import React, {ReactElement} from 'react'
import {Drawer} from "../Drawer/Drawer.tsx"
import logoImg from "@/assets/Logo_Fusionailes.webp"
import { House, CircleHelp, ShoppingBasket } from "lucide-react"

export default function Navbar(): ReactElement {
    const baseURL:string = "/projets/fusionaile"
    return (
        <>

            {/*DESKTOP MODE*/}

            <nav className="hidden md:grid grid-cols-3 bg-primary-darker text-primary-content rounded-lg shadow-sm w-[65%] mx-auto justify-center h-12 px-1.5 place-items-center relative">
                <NavLink to="/" className="size-32 col-start-1 items-center absolute left-0 -top-4"><img src={logoImg} alt="logo"/></NavLink>

                <div className="flex w-full h-full items-center gap-1 col-start-2 mx-auto justify-center">
                    <NavBtn name="Accueil" route={`/`}/>
                    <NavBtn name="Prestations" route={`/presta`}/>
                    {/*<NavBtn name="resa" route="/reserver"/>*/}

                    <NavBtn name="A propos" route={`/about`}/>

                </div>
                <Drawer styleBtn={'btn bg-primary hover:bg-primary-hover ml-auto col-start-3 text-white font-bold'}
                        btntxt={"Réserver maintenant"} />
            </nav>


            {/*MOBILE MODE*/}

            <nav className="sm:hidden flex bg-primary-darker text-primary-content  w-full h-1/14 fixed bottom-0 left-0  z-50">
                <div className="flex w-full mx-auto justify-evenly">
                    <NavLink to="/" className={({ isActive }:NavLinkRenderProps):string =>
                        `w-full justify-center rounded  transition duration-200 items-center inline-flex  ${isActive ? " bg-primary   " : " opacity-75 hover:opacity-100 hover:bg-primary-hover"}`
                    }>
                        <House size={32} />
                    </NavLink>
                    <NavLink to="/presta" className={({ isActive }:NavLinkRenderProps):string =>
                        `w-full justify-center rounded  transition duration-200 items-center inline-flex  ${isActive ? " bg-primary   " : " opacity-75 hover:opacity-100 hover:bg-primary-hover"}`
                    }>
                        <ShoppingBasket size={32}/>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }:NavLinkRenderProps):string =>
                        `w-full justify-center rounded  transition duration-200 items-center inline-flex  ${isActive ? " bg-primary   " : " opacity-75 hover:opacity-100 hover:bg-primary-hover"}`
                    }>
                        <CircleHelp size={32}/>
                    </NavLink>
                </div>


            </nav>
        </>



    )
}
