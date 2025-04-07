import React, {useEffect, useState, useRef, RefObject, FormEvent, MouseEvent, ReactElement} from 'react'
import {isBefore} from "date-fns";
import 'cally'
import {motion} from "framer-motion";
import axios, {AxiosResponse} from "axios";
import { Calendar } from "@/components/ui/calendar.js"
import {fr} from "date-fns/locale/fr"
import {handleHour} from "@/views/Reservation/functions/Handle.js";
import {submitReservation} from "./functions/submitForm.js"


import { Input, Select } from "@/components/Form/FormInput.tsx"

interface PropsTypes{
    value:string,
    error:boolean,
}

interface PrestationsProps {
    presta:object[]
    nom: string,
    code: string,
    couleur: string | string[],
    prix: string,
    description: string,
    bienfaits: string[] | object[]
}

export default function Reservation(): ReactElement {
    const [prestations, setPrestations] = useState<object[]>([])
    const [day, setDay] = useState<Date>();
    const [hours, setHours] = useState<string>('');
    const [email, setEmail] = useState<PropsTypes>({value:'', error:false});
    const [nom,setNom] = useState<PropsTypes>({value:'', error:false});
    const [prenom, setPrenom] = useState<PropsTypes>({value:'', error:false});
    const [presta, setPresta] = useState<string>();
    const form:RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);


    async function fetchPrestations ():Promise<void> {
        try {
            const res:AxiosResponse<PrestationsProps > = await axios.get('./articleData.json')
            setPrestations(res.data.presta)
        } catch (error) {
            console.log(error);
        }


    }

    const hoursList:string[] = ["09:00", "09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"];

    const confirm:()=>boolean = ():boolean => {
        return !!(hours && day && nom.value && !nom.error && prenom.value && !prenom.error && presta && email && !email.error);
    }

    useEffect(():void => {
        fetchPrestations().catch((err:AxiosResponse):void => {console.log(err)});
    },[])



    return (

    <>
        <motion.div className="flex flex-row w-fit h-fit gap-6 bg-neutral-content border border-base-300 mx-auto p-4 rounded-box "
                    initial={{opacity : 0, transform: 'translateY(20%)'}}
                    animate={{opacity : 1, transform: 'translateY(0%)'}}
                    exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}>

            <form ref={form} id="resa-form" method="POST" className="flex-col" onSubmit={(e:FormEvent<HTMLFormElement>):void=>submitReservation(e,form,day,hours)}>
                <fieldset className="flex  w-full gap-6">
                    <div className="">
                        <legend className="fieldset-legend mx-auto">Reservez votre prestation!</legend>
                        <Input state={nom} setState={setNom} name={"nom"} type={"text"} />
                        <Input state={prenom} setState={setPrenom} name={"prenom"} type={"text"} />
                        <Input state={email} setState={setEmail} name={"email"} type={"email"} />
                        <Select state={presta} setState={setPresta} name={presta} options={prestations}/>

                    </div>


                    <Calendar
                        locale={fr}
                        mode="single"
                        selected={day}
                        onSelect={setDay}
                        className="rounded-md border shadow"
                        disabled={(date:Date):boolean => isBefore(date, new Date())}
                    />

                    <div className="grid grid-cols-2 h-fit w-fit gap-2">
                        {hoursList.map((item:string, index:number):ReactElement => (
                            <button key={index} onClick={(e:MouseEvent<HTMLButtonElement>):void=>handleHour(e, setHours)} type="button" value={item}
                                    className={`btn  ${hours === item ? "btn-primary" : " hover:bg-primary/50"}`}> {item} </button>
                        ))}

                    </div>
                </fieldset>


                <div className="flex mt-3">

                    <input type="submit" value="Réserver"
                           className={`btn btn-primary w-1/3 mx-auto`}
                           disabled={!confirm()}
                    />
                </div>

            </form>
        </motion.div>

    </>

    )
}
