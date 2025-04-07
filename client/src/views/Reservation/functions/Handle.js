// import { useState } from "react";

// const [hours, setHours] = useState();
// const [email, setEmail] = useState({value:null, error:false});
// const [nom,setNom] = useState({value:null, error:false});
// const [prenom, setPrenom] = useState({value:null, error:false});

export function handleHour (e, state, setState){
    e.preventDefault()
    setState(e.currentTarget.value)
}

export function HandleInputs(e, state, setState){
    const {name, value} = e.target;
    if (name === "nom") {
        // Vérification instantanée avec e.target.value
        if (/\d/.test(value)) {
            // console.log("Number in string");
            setState({ value, error: true });
        } else {
            setState({ value, error: false });
        }
    }
    if (name === "prenom") {
        // Vérification instantanée avec e.target.value
        if (/\d/.test(value)) {
            // console.log("Number in string");
            setState({ value, error: true });
        } else {
            setState({ value, error: false });
        }
    }

    if (name === "email") {

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

            setState({ value, error: false });
        } else {
            // console.log("Not an email address");
            setState({ value, error: true });
        }
    }
    // console.log(e.target)
}

