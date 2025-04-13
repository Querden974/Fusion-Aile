import React, {ReactElement} from 'react'
import {NavLink, NavLinkRenderProps} from "react-router";

export default function NavBtn({route, name} : {route: string, name:string}):ReactElement {
    return (
        <NavLink to={route} className={({ isActive }:NavLinkRenderProps):string =>
            `h-[85%] rounded px-2 font-bold transition duration-200 items-center inline-flex  ${isActive ? " bg-primary   " : " opacity-75 hover:opacity-100 hover:bg-primary-hover"}`
        } >{name}</NavLink>
    )
}
