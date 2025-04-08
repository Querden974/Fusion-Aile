import axios from "axios";
import Swal from "sweetalert2";
import {FormEvent, RefObject} from "react";
import {any} from "zod";

interface FormProps extends FormEvent {
    nom: string;
    prenom: string;
    email: string;
    hour: string;
    day: string;
    formated: string;
}

// const webhook = "http://localhost:5678/webhook/e471c043-addf-4b7f-81fe-54b83f6f8497"

// const webhook = "http://localhost:5678/webhook-test/e471c043-addf-4b7f-81fe-54b83f6f8497"

const webhook:string = import.meta.env.VITE_RESERVATION;

export async function submitReservation(e:FormEvent<HTMLFormElement>,form:RefObject<HTMLFormElement>,day:Date,hours:string) {
    e.preventDefault()


    const hour:number[] = hours.split(':').map((i:string):number => parseInt(i));

    const formDataToObj:(formData:FormData)=> FormProps = (formData: FormData) :FormProps =>{
        const data: { [key: string]: any } = {};
        formData.forEach((value:FormDataEntryValue, key:string):void=> {
            data[key] = value
        })
        return data as FormProps;
    }


    const submitForm:FormData = new FormData(form.current)
    const formData:FormProps = formDataToObj(submitForm) ;
    formData['hour'] = hours;
    formData['day'] = day.toLocaleDateString();
    formData['formated'] = new Date(day).setHours(hour[0],hour[1]).toString()

    try {
        await axios.post(webhook, formData, {
            headers: { "Content-Type": "application/json" }})

                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                // console.log("Réponse reçue : ", response); // Vérifier la réponse du serveur
                Toast.fire({
                    icon: "success",
                    title: "Réservation effectuée",
                    text: `${day.toLocaleDateString()} - ${hours}`
                });

    } catch (error) {
        console.log("TEST ERROR MESSAGE :", error.message);
        const errorMessage = error.response?.data?.errorMessage || error.message;
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "error",
            title: "Une erreur est survenue",
            text: `${error.message}`
        })
    }

    // console.log(formData)

}