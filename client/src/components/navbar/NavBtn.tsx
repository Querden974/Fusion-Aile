import React, {ReactElement} from 'react'
import {NavLink} from "react-router";

export default function NavBtn({route, name} : {route: string, name:string}):ReactElement {
    return (
        <NavLink to={route} className={({ isActive }) =>
            `py-1 px-2 font-bold rounded-box transition duration-200  ${isActive ? " text-primary-text   " : "hover:ring-2 hover:ring-primary-hover hover:text-secondary-content"}`
        } >{name}</NavLink>
    )
}
