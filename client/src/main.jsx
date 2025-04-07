import { BrowserRouter, Routes, Route} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Prestations from './Prestations.jsx'
import Reservation from './views/Reservation/Reservation.jsx'
import Navbar from "@/components/navbar/Navbar.jsx";
import React from "react";
import { Toaster } from "@/components/ui/sonner.js";
import {motion} from "framer-motion";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<App />} />
                <Route path="/presta" element={<Prestations />} />
                <Route path="/about" element={<About />} />
                <Route path="/reserver" element={<Reservation />} />
            </Routes>


                <Toaster className={"text-black"}/>

        </BrowserRouter>
    </React.StrictMode>

)
