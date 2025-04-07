import React, {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import maskImg from './assets/prestation-mask.jpg';
import Popup from "./components/Popup/Popup.js";
import {motion} from "framer-motion";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button"

interface PrestationsProps {
    presta:object[]
    nom: string,
    code: string,
    couleur: string | string[],
    prix: string,
    description: string,
    bienfaits: string[] | object[]
}

export default function Prestations():ReactElement {
    const [prestations, setPrestations] = useState<object[]>([])
    const fetchPrestations:()=>Promise<void> = async ():Promise<void> => {
        const res:AxiosResponse<PrestationsProps> = await axios.get('./articleData.json')
        setPrestations(res.data.presta)
    }
    useEffect(():void => {
        fetchPrestations()
    },[])

    const content:()=> ReactElement[] = ():ReactElement[] => {
        const liste:ReactElement[] = []
        prestations.map((prestation: PrestationsProps, index:number):void => {
            const dist:number = 300;
            const x:number = -Math.cos(index/2)*dist;
            const y:number = -Math.sin(index/2)*dist;
            const btn:ReactElement = <Popup key={index} prestation={prestation} index={index} x={x} y={y}/>
            liste.push(btn)

        })
        return liste
    }
    return (
        <>
            <motion.div className={'grid m-36 h-fit '}
                        initial={{opacity : 0, transform: 'translateY(20%)'}}
                        animate={{opacity : 1, transform: 'translateY(0%)'}}
                        exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}>
                <div className={"flex flex-col gap-3 m-auto bg-cover bg-[center_top_-5rem] w-168 h-[400px] bg-[url(./prestation-caline.webp)]"}>
                    <div className="m-auto -translate-x-13 translate-y-10">
                        {content()}
                    </div>
                </div>
                <div className={"grid w-fit gap-4 -translate-y-1/5 mx-auto"}>
                    <div className={"flex flex-col justify-center items-center "}>
                        <div className={'flex bg-neutral-content px-6 py-2 text-6xl h-full -rotate-4 font-selima'}
                            style={{ maskImage: `url(${maskImg})`, maskPosition:"center",maskMode:"luminance",maskSize: "110% 110%", WebkitMaskImage: `url(${maskImg})` }}>
                            <p className={"-translate-y-1/4 text-[#ba7b81] select-none"}>Les massages</p>
                        </div>
                        <div className={'flex bg-neutral-content px-6 py-2 w-fit text-6xl h-full rotate-3 font-selima'}
                             style={{ maskImage: `url(${maskImg})`, maskPosition:"center",maskMode:"luminance",maskSize: "110% 110%", WebkitMaskImage: `url(${maskImg})` }}>
                            <p className={"-translate-y-1/4 text-[#ba7b81] select-none "}>de Caline</p>
                        </div>
                    </div>


                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button className={'btn btn-primary mx-auto w-fit'}>Reserver votre prestation!</Button>
                        </DrawerTrigger>
                        <DrawerContent className={'mx-auto items-center bg-neutral w-1/3'}>
                            <DrawerHeader>
                                <DrawerTitle className={"text-2xl"}>Contactez moi pour prendre un rendez-vous!</DrawerTitle>
                                <DrawerDescription>
                                    <div className="flex justify-evenly mx-auto w-full mt-3">
                                        <p className={"inline-flex items-center text-xl gap-1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                                            </svg> 06 02 06 43 39
                                        </p>
                                        <p className={"inline-flex items-center text-xl gap-1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg> pascaline@outlook.fr
                                        </p>
                                    </div>
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button className={"btn bg-primary"}>Fermer</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </motion.div>
        </>

    )
}
