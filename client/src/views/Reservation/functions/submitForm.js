import axios from "axios";
import Swal from "sweetalert2";

// const webhook = "http://localhost:5678/webhook/e471c043-addf-4b7f-81fe-54b83f6f8497"

const webhook = "http://localhost:5678/webhook-test/e471c043-addf-4b7f-81fe-54b83f6f8497"

export function submitReservation(e,form,day,hours) {
    e.preventDefault()
    const hour = hours.split(':')
    const submitForm = new FormData(form.current)
    const formData = Object.fromEntries(submitForm.entries())
    formData['hour'] = hours;
    formData['day'] = day.toLocaleDateString();
    formData['formated'] = new Date(day).setHours(hour[0],hour[1])


    axios.post(webhook, formData, {
        headers: { "Content-Type": "application/json" }})
        .then(response => {
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
        })
        .catch(error => {
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
        })

    console.log(formData)

}