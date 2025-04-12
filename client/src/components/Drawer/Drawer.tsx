import React, {ReactElement} from 'react'
import {
    Drawer as ShadDrawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Button} from "@/components/ui/button.tsx";

export function Drawer({btntxt, styleBtn}:{btntxt:string, styleBtn:string}):ReactElement {
    return (
        <ShadDrawer>
            <DrawerTrigger asChild>
                <Button className={styleBtn}>{btntxt}</Button>
            </DrawerTrigger>
            <DrawerContent className={'mx-auto items-center bg-neutral w-1/3'}>
                <DrawerHeader>
                    <DrawerTitle className={"text-2xl"}>Contactez moi pour prendre un rendez-vous!</DrawerTitle>
                    <DrawerDescription>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-evenly mx-auto w-full mt-3">
                                <p className={"inline-flex items-center text-xl gap-1 select-text"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2m10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                                    </svg> 06 02 06 43 39
                                </p>
                                <p className={"inline-flex items-center text-xl gap-1 select-text"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg> pascaline@outlook.fr
                                </p>
                            </div>
                            <div className="flex gap-2 items-center justify-center ">
                                <a href="https://www.instagram.com/fusion_ailes/" target="_blank"  className={"p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out  flex items-center gap-1"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01" />
                                        </g>
                                    </svg>
                                    Instagram
                                </a>
                                <a href="https://www.facebook.com/Fusionailesmassage/" target="_blank" className={"p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out flex items-center gap-1"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z" />
                                    </svg>
                                    Facebook
                                </a>
                            </div>
                        </div>

                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button className={"btn bg-primary hover:bg-primary-hover"}>Fermer</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </ShadDrawer>
    )
}
