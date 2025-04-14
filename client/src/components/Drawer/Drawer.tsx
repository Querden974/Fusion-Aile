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
import {PhoneOutgoing, Mail} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export function Drawer({btntxt, styleBtn}:{btntxt:string, styleBtn:string}):ReactElement {
    return (
        <ShadDrawer autoFocus={true}>
            <DrawerTrigger asChild>
                <Button className={styleBtn}>{btntxt}</Button>
            </DrawerTrigger>

            <DrawerContent className="mx-auto items-center bg-neutral md:w-1/3 -translate-y-12 md:translate-y-0">
                <DrawerHeader>
                    <DrawerTitle className="text-2xl">
                        Contactez-moi pour prendre un rendez-vous !
                    </DrawerTitle>

                    {/* Utilisation correcte de DrawerDescription avec texte simple */}
                    <DrawerDescription>
                        Appelez ou écrivez-moi via les moyens ci-dessous :
                    </DrawerDescription>
                </DrawerHeader>

                {/* Le contenu additionnel est séparé du DrawerDescription */}
                <div className="flex flex-col gap-4 px-4 pb-4">
                    <div className="flex flex-col items-center gap-1 md:justify-evenly mx-auto w-full mt-3">
                        <a
                            href="tel:+33602064339"
                            className="inline-flex items-center text-xl gap-1 select-text"
                        >
                            <PhoneOutgoing /> 06 02 06 43 39
                        </a>
                        <a
                            href="mailto:pascaline@outlook.fr"
                            className="inline-flex items-center text-xl gap-1 select-text"
                        >
                            <Mail /> pascaline@outlook.fr
                        </a>
                    </div>

                    <div className="flex gap-2 items-center justify-center">
                        <a
                            href="https://www.instagram.com/fusion_ailes/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out flex items-center gap-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01" />
                                </g>
                            </svg>
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/Fusionailesmassage/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full hover:bg-primary transition duration-200 ease-in-out flex items-center gap-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                                />
                            </svg>
                            Facebook
                        </a>
                    </div>
                </div>

                <DrawerFooter>
                    <DrawerClose asChild>
                        <button
                            className="btn bg-primary hover:bg-primary-hover">
                            Fermer
                        </button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </ShadDrawer>
    )
}
