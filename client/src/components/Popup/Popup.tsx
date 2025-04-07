import React, {ReactElement} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.js";
import Article from "@/components/Article/Article.js";

interface SubArticle {
    titre: string,
    biens:string[]
}

interface PrestationTypes{
    couleur: string | string[]
    nom:string
    description: string
    code:string
    prix: string
    bienfaits: string[]
}

type PopupTypes = {
    prestation: PrestationTypes
    index: number
    x:number
    y:number
}

export default function Popup({prestation, index, x, y}:PopupTypes):ReactElement {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button key={index}
                        className={`mask-squircle btn rounded-full aspect-square size-32 bg-neutral-content whitespace-pre-line px-2 absolute hover:size-34 transition-all duration-200`}
                        style={Array.isArray(prestation.couleur)
                            ? {
                                backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,transform: `translate(${x}px, ${y}px)`,
                            }
                            : {backgroundColor: prestation.couleur, transformOrigin: `` ,transform: `translate(${x}px, ${y}px)`}

                        }>
                    {prestation.nom}
                </button>

            </DialogTrigger>
            <DialogContent className={"bg-neutral"}>
                <DialogHeader>
                    <DialogTitle className={"w-fit"} style={Array.isArray(prestation.couleur)
                        ? {
                            backgroundImage: `linear-gradient(to right, ${prestation.couleur[0]}, ${prestation.couleur[1]})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }
                        : {color: prestation.couleur}
                    }>{prestation.nom}</DialogTitle>
                </DialogHeader>
                <DialogDescription className={"text-justify"}>
                    <div className="flex flex-col gap-4 h-fit ">
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <p className={"text-start"}>{prestation.description}</p>
                            <img src={`/massages/${prestation.code}.webp`} className={" rounded-box"} alt=""/>
                        </div>
                        <Article article={prestation} />
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
