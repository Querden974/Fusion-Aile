import {Input as ShadInput}  from "../ui/input"
import React, {ChangeEvent, ReactElement, SetStateAction, Dispatch} from "react";
import {HandleInputs} from "@/views/Reservation/functions/Handle.ts";
import {InputPropsType, SelectPropsType} from "@/types/ReservationTypes.ts";

export function Input({state, setState, type, name} : InputPropsType):ReactElement {
    const labelName : string = name.slice(0,1).toUpperCase()+name.slice(1)
    return (
        <div className="flex flex-col gap-1">
            <label className="fieldset-label">{labelName}</label>
            <ShadInput type={type} name={name} className={`input bg-base-100 ${state.error ? "input-error" : ""}`} value={state.value}
                   onChange={(e:ChangeEvent<HTMLInputElement>):void => HandleInputs(e,setState)} placeholder="Quel est votre nom?" required/>
        </div>
    )
}

export function Select({state, setState, name, options} : SelectPropsType) : ReactElement {
    return (
        <div className="flex flex-col gap-1">
            <label className="fieldset-label">Prestation</label>
            <select value={state} defaultValue="none"
                    name={name}  className="select"
                    onChange={(e:ChangeEvent<HTMLSelectElement>):void => setState(e.target.value)}>

                <option disabled value={'none'}>Selectionner une prestation</option>
                {options.map((item:{code:string,nom:string}, index:number):ReactElement => (
                    <option key={index} value={item.code}>{item.nom}</option>
                ))}
            </select>
        </div>
    )
}
