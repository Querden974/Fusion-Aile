import React, {useEffect, useState, useRef} from 'react'
import 'cally'
import {motion} from "framer-motion";
import axios from "axios";
import {isBefore} from "date-fns";
import { Calendar } from "@/components/ui/calendar.js"
import {fr} from "date-fns/locale/fr"
import {handleHour, HandleInputs} from "@/views/Reservation/functions/Handle.js";
import {submitReservation} from "./functions/submitForm.js"


export default function Reservation() {
    const [prestations, setPrestations] = useState([])
    const [day, setDay] = useState();
    const [hours, setHours] = useState();
    const [email, setEmail] = useState({value:null, error:false});
    const [nom,setNom] = useState({value:null, error:false});
    const [prenom, setPrenom] = useState({value:null, error:false});
    const [presta, setPresta] = useState();
    const form = useRef(null);

    const fetchPrestations = async () => {
        const res = await axios.get('./articleData.json')
        setPrestations(res.data.presta)
    }

    const hoursList= ["09:00", "09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"];

    const confirm = () => {
        return !!(hours && day && nom.value && !nom.error && prenom.value && !prenom.error && presta && email && !email.error);
    }

    useEffect(() => {
        fetchPrestations()
    },[])



    return (

    <>
        <motion.div className="flex flex-row w-fit h-fit gap-6 bg-neutral-content border border-base-300 mx-auto p-4 rounded-box "
                    initial={{opacity : 0, transform: 'translateY(20%)'}}
                    animate={{opacity : 1, transform: 'translateY(0%)'}}
                    exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}>

            <form ref={form} id="resa-form" method="POST" className="flex-col" onSubmit={(e)=>submitReservation(e,form,day,hours)}>
                <fieldset className="flex  w-full gap-6">
                    <div className="">
                        <legend className="fieldset-legend mx-auto">Reservez votre prestation!</legend>
                        <div className="flex flex-col gap-1">
                            <label className="fieldset-label">Nom</label>
                            <input type="text" name="nom" className={`input ${nom.error ? "input-error" : ""}`} value={nom.value} onChange={(e) => HandleInputs(e,nom,setNom)} placeholder="Quel est votre nom?" required/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="fieldset-label">Prénom</label>
                            <input type="text" name="prenom" className={`input ${prenom.error ? "input-error" : ""}`} value={prenom.value} onChange={(e) => HandleInputs(e,prenom,setPrenom)} placeholder="Quel est votre prénom?" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className={`input ${email.error ? "input-error" : ""}`} value={email.value} onChange={(e) => HandleInputs(e,email,setEmail)} placeholder="Entrer une adresse mail." required/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="fieldset-label">Prestation</label>
                            <select value={presta} onChange={(e) => setPresta(e.target.value)} name="presta" className="select">
                                <option disabled={true} value="none" selected>Selectionner une prestation</option>
                                {prestations.map((item, index) => (
                                    <option key={index} value={item.code}>{item.nom}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <Calendar
                        locale={fr}
                        mode="single"
                        selected={day}
                        onSelect={setDay}
                        className="rounded-md border shadow"
                        // disabled={(date) => isBefore(date, new Date())}
                    />

                    <div className="grid grid-cols-2 h-fit w-fit gap-2">
                        {hoursList.map((item, index) => (
                            <button key={index} onClick={(e)=>handleHour(e,hours, setHours)} type="button" value={item}
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
