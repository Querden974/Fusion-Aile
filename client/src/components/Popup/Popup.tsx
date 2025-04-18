import React, {ReactElement} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.js";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import Article from "@/components/Article/Article.js";
import {PrestationTypes} from "@/types/PrestationTypes.ts";

interface SubArticle {
    titre: string,
    biens:string[]
}

type PopupTypes = {
    prestation: PrestationTypes
    index: number
    x?:number
    y?:number
    last?:boolean
}

export function Popup({prestation, index, x, y}:PopupTypes):ReactElement {
    const isObject:boolean = typeof prestation.bienfaits[0] === "object";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button key={index}
                        className={`mask-squircle btn rounded-full aspect-square size-32 bg-neutral-content whitespace-pre-line px-2 absolute hover:size-34 transition-all duration-200 font-amaranth text-lg`}
                        style={Array.isArray(prestation.couleur)
                            ? {
                                backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,transform: `translate(${x}px, ${y}px)`,
                            }
                            : {backgroundColor: prestation.couleur, transformOrigin: `` ,transform: `translate(${x}px, ${y}px)`}

                        }>
                    {prestation.nom}
                </button>

            </DialogTrigger>
            <DialogContent className={"bg-neutral min-w-2xl"}>
                <DialogHeader>
                    <DialogTitle className={"w-fit text-xl"} style={Array.isArray(prestation.couleur)
                        ? {
                            backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }
                        : {color: prestation.couleur}
                    }>{prestation.nom}</DialogTitle>
                </DialogHeader>
                <DialogDescription className={"text-justify "}>
                    <div className="flex flex-col gap-4 h-fit ">
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <div className="flex flex-col gap-6">
                                <p className={"container whitespace-break-spaces h-fit text-start text-[clamp(1.5cqh,1.75cqh,4rem)]"}
                                    >{prestation.description}</p>

                                {(!isObject && prestation.bienfaits.length <=4 && prestation.bienfaits.length >1 ) && <Article article={prestation} />}
                            </div>

                            <img src={`/projets/fusionaile/massages/${prestation.code}.webp`} className={" rounded-box"} alt=""/>
                        </div>
                        {(isObject || prestation.bienfaits.length > 4 || prestation.bienfaits.length === 1) && <Article article={prestation} />}
                        <p className={"text-center min-w-1/3 mx-auto  p-4 rounded-box font-semibold"}
                           style={Array.isArray(prestation.couleur)
                               ? {
                                   backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,

                               }
                               : {backgroundColor: prestation.couleur}
                           }>{prestation.prix}</p>
                    </div>

                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export function PopupRelative({prestation, index, last}:PopupTypes):ReactElement {
    const isObject:boolean = typeof prestation.bienfaits[0] === "object";

    return (
        <Drawer autoFocus={true}>
            <DrawerTrigger asChild>
                <button key={index}

                        className={`${last? "col-span-2 " : ""}  mask-squircle  btn rounded-full aspect-square size-32 bg-neutral-content whitespace-pre-line px-2 hover:size-34 transition-all duration-200 font-amaranth text-lg`}
                        style={Array.isArray(prestation.couleur)
                            ? {
                                backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,
                            }
                            : {backgroundColor: prestation.couleur}

                        }>

                        {prestation.nom}


                </button>

            </DrawerTrigger>
            <DrawerContent className={"bg-neutral px-3 z-100 "}>
                <DialogTitle>
                    <DialogTitle className={"w-fit text-xl"} style={Array.isArray(prestation.couleur)
                        ? {
                            backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }
                        : {color: prestation.couleur}
                    }>{prestation.nom}</DialogTitle>
                </DialogTitle>
                <DrawerDescription className={"text-justify overflow-y-scroll "}>
                    <div className="flex flex-col gap-4 h-fit ">
                        <div className=" gap-3 w-full">
                            <div className="flex flex-col gap-6">
                                <p className={"container whitespace-break-spaces h-fit text-start "}
                                >{prestation.description}</p>

                                {(!isObject && prestation.bienfaits.length <=4 && prestation.bienfaits.length >1 ) && <Article article={prestation} />}
                            </div>

                            {/*<img src={`/massages/${prestation.code}.webp`} className={" rounded-box"} alt=""/>*/}
                        </div>
                        {(isObject || prestation.bienfaits.length > 4 || prestation.bienfaits.length === 1) && <Article article={prestation} />}
                        <p className={"text-center min-w-1/3 mx-auto  p-4 rounded-box font-semibold mb-6"}
                           style={Array.isArray(prestation.couleur)
                               ? {
                                   backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,

                               }
                               : {backgroundColor: prestation.couleur}
                           }>{prestation.prix}</p>
                    </div>

                </DrawerDescription>
            </DrawerContent>
        </Drawer>
    )
}
