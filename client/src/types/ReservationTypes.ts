import {Dispatch, SetStateAction} from "react";

export interface InputPropsType{
    state: {value: string, error: boolean}
    setState: Dispatch<SetStateAction<{value: string, error: boolean}>>
    type?:string
    name?:string
}

export interface SelectPropsType{
    state: string
    setState: Dispatch<SetStateAction<string>>
    name?:string
    options?: object[]
}

export interface PropsTypes{
    value:string,
    error:boolean,
}