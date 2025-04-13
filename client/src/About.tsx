import {useState, useEffect, ReactElement} from 'react'
import Hero from './components/Hero/Hero.js'
import axios from "axios";
import { motion } from 'framer-motion'
import heroImg from './assets/hero-img.webp'




export default function About():ReactElement {

        return (
            <>
                <motion.div className="flex flex-col w-full h-fit items-center mt-4 md:mt-16 gap-4"
                            initial={{opacity : 0, transform: 'translateY(20%)'}}
                            animate={{opacity : 1, transform: 'translateY(0%)'}}
                            exit={{opacity : 0, transform: 'translateY(20%)', transition : {duration: 0.1}}}
                >
                    <h3 className={"col-span-3 text-center font-semibold"}>Fusionnel : se dit de deux (ou plusieurs) personnes qui ne peuvent se passer l'une de l'autre ...</h3>
                    <div className="grid  md:grid-cols-3 w-full h-fit items-center gap-2">
                        <p className={"whitespace-pre-line text-xl w-fit"}>Me voilà lancée dans cette nouvelle aventure de l'auto-entreprenariat... Et bien heureusement, je ne suis pas seule...
                            Mon entourage, ma famille, et surtout mon conjoint !
                            <br/><br/>
                            Nous cherchions alors un Nom pour l'entreprise qui nous correspondait et que nous souhaitions partager à travers les massages et l'hypnose...
                            Et l'écoute du cœur nous a aidé : un ami très cher nous comparaît souvent à un "couple fusionnel"!
                            <br/><br/>
                            Voilà le Nom était trouvé 😊
                            <br/><br/>
                            Déjà 25 années de vie commune, marquées par le désir toujours plus fort de continuer à vivre ensemble ! Et aujourd'hui, nous souhaitons collaborer afin de partager l'enseignement de nos expériences vécues...
                            </p>

                        <img src={heroImg} className={"row-start-1 md:col-start-2 h-fit w-fit"} draggable={false}/>
                        <p className={" whitespace-pre-line text-xl w-fit"}>
                            FUSION'AILE correspond exactement à ce que nous souhaitons :
                            - le corps est indissociable de l'esprit
                            - ils doivent être en harmonie, en Fusion, en équilibre, en symbiose afin d'accueillir et de vivre le Bien-être.
                            <br/><br/>
                            LES MASSAGES DE CALINE (c'est mon p'ti nom) tendent le plus possible vers cet état d'équilibre du Corps et de l'Esprit.
                            <br/><br/>
                            Et L'HYPNOMASSAGE va plus profondément dans cette exploration.
                            <br/><br/>
                            Enfin c'est encore le désir de partager et de relier qui nous a amené à donner naissance à FUSION'AILE, une symbiose, une collaboration ouvrant les portes des possibles....</p>

                    </div>



                </motion.div>

            </>
        )
    }