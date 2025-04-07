import {ChangeEvent, Dispatch, MouseEvent, SetStateAction} from "react";
import {InputPropsType, PropsTypes} from "@/types/ReservationTypes.ts";


export function handleHour (e:MouseEvent<HTMLButtonElement>, setState:Dispatch<SetStateAction<string>>):void{
    e.preventDefault()
    setState(e.currentTarget.value)
}

export function HandleInputs(e:ChangeEvent<HTMLInputElement>, setState:Dispatch<SetStateAction<PropsTypes>>):void{
    const name:string = e.target.name;
    const value:string = e.target.value;
    if (name === "nom") {
        if (/\d/.test(value)) {
            setState({ value, error: true });

        } else {
            setState({ value, error: false });
        }
    }
    if (name === "prenom") {
        if (/\d/.test(value)) {
            setState({ value, error: true });
        } else {
            setState({ value, error: false });
        }
    }

    if (name === "email") {

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

            setState({ value, error: false });
        } else {
            setState({ value, error: true });
        }
    }
}

