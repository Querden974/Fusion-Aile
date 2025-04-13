import React, {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import maskImg from './assets/prestation-mask.jpg';
import {PopupRelative, Popup} from "./components/Popup/Popup.js";
import {motion} from "framer-motion";

import {Drawer} from "./components/Drawer/Drawer";
import {PrestationTypes} from "@/types/PrestationTypes.ts";
import {Button} from "@/components/ui/button"

interface PrestationsProps extends PrestationTypes {
    presta:object[]
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
            <motion.div className={'grid  md:mt-32 w-full mx-auto h-fit '}
                        initial={{opacity : 0, transform: 'translateY(20%)'}}
                        animate={{opacity : 1, transform: 'translateY(0%)'}}
                        exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}>
                <div className={"hidden sm:flex flex-col gap-3 mx-auto bg-cover bg-[center_top_-5rem] w-168 h-[400px] bg-[url(./prestation-caline.webp)]"}>
                    <div className="m-auto -translate-x-13 translate-y-10">
                        {content()}
                    </div>
                </div>
                <div className={"grid w-fit gap-4 md:-translate-y-1/5 mx-auto"}>
                    <div className={"flex flex-col justify-center items-center "}>
                        <div className={'flex bg-neutral-content px-6 py-2 text-6xl h-full md:-rotate-4 font-selima'}
                            style={{ maskImage: `url(${maskImg})`, maskPosition:"center",maskMode:"luminance",maskSize: "110% 110%", WebkitMaskImage: `url(${maskImg})` }}>
                            <p className={"md:-translate-y-1/4 text-[#ba7b81] select-none"}>Les massages</p>
                        </div>
                        <div className={'flex bg-neutral-content px-6 py-2 w-fit text-6xl h-full md:rotate-3 font-selima'}
                             style={{ maskImage: `url(${maskImg})`, maskPosition:"center",maskMode:"luminance",maskSize: "110% 110%", WebkitMaskImage: `url(${maskImg})` }}>
                            <p className={"md:-translate-y-1/4 text-[#ba7b81] select-none  "}>de Caline</p>
                        </div>
                    </div>
                    <div className="sm:hidden grid grid-cols-2 place-items-center">
                        {prestations.map((presta:PrestationsProps, index:number):ReactElement => (

                            <PopupRelative key={index} prestation={presta} index={index} last={index === prestations.length - 1} />
                        ))}
                    </div>


                <Drawer styleBtn={'btn bg-primary h-10 border border-primary hover:bg-primary-hover mx-auto w-full md:w-fit text-white font-bold mb-16'}
                        btntxt={'Planifiez un rendez-vous'}/>
                </div>
            </motion.div>
        </>

    )
}
