import { BrowserRouter, Routes, Route} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import About from './About.js'
import Prestations from './Prestations.tsx'
import Reservation from '@/views/Dashboard/Reservation/Reservation.js'
import Navbar from "@/components/navbar/Navbar.js";
import React from "react";

import { Toaster } from "@/components/ui/sonner.js";


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>

                <Navbar/>


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
