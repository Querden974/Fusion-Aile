import React, {ReactElement} from 'react'
import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import maskImg from './assets/prestation-mask.jpg';
import {PopupRelative, Popup} from "./components/Popup/Popup.js";
import {motion} from "framer-motion";
import prestationImage from './assets/prestation-caline.webp';

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

    const titleElement:(classes:string)=>ReactElement = (classes:string):ReactElement=>{
        return (
            <div className={classes}>
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
        )
    }


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
            <motion.div className={'grid  md:mt-38  w-full mx-auto h-fit relative '}
                        initial={{opacity : 0, transform: 'translateY(20%)'}}
                        animate={{opacity : 1, transform: 'translateY(0%)'}}
                        exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}>
                <div className={`hidden sm:flex flex-col gap-3 mx-auto h-fit w-168]`}>

                    <div className="mx-auto h-128 overflow-clip">
                        <img src={prestationImage} className={'w-186 -translate-y-30'} alt=""/>
                    </div>
                    <div className="w-full h-fit top-45 -left-10 translate-x-1/2 translate-y-1/2 absolute ">
                        {content()}
                    </div>
                    {/*DESKTOP VERSION*/}
                    {titleElement("hidden sm:grid w-fit h-fit gap-4 top-0 mx-auto -translate-y-1/2")}
                </div>
                {/*MOBILE VERSION*/}
                {titleElement("md:hidden grid w-fit h-fit gap-4 top-0 mx-auto")}
            </motion.div>
        </>

    )
}
