import {useState, useEffect, ReactElement} from 'react'
import Hero from './components/Hero/Hero.js'
import axios from "axios";
import { motion } from 'framer-motion'
import heroImg from './assets/hero-img.webp'
import maskImg from "@/assets/prestation-mask.jpg";



export default function App():ReactElement {



        return (
            <>
                <motion.div className="flex flex-col w-full h-fit items-center mt-16 gap-4"
                            initial={{opacity: 0, transform: 'translateY(20%)'}}
                            animate={{opacity: 1, transform: 'translateY(0%)'}}
                            exit={{opacity: 0, transform: 'translateY(20%)', transition: {duration: 0.1}}}
                >

                    <div className="hero w-fit rounded-lg ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className=" size-128 bg-center aspect-square object-none overflow-clip rounded-box"
                                 style={{ maskImage: `url(${maskImg})`, maskPosition:"center",maskMode:"luminance",maskSize: "100% 100%", WebkitMaskImage: `url(${maskImg})` }}>

                                <img
                                    src="/pascaline.webp"
                                    alt="pascaline"
                                    className="w-full -translate-y-26"/>
                            </div>

                            <div>
                                <h1 className="text-5xl font-bold">Fusion'Aile</h1>
                                <p className="py-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem beatae nemo non perferendis similique voluptatem? Accusantium autem blanditiis corporis dignissimos doloremque dolorum ea, eligendi error eveniet hic illo ipsa laboriosam molestiae molestias odio officiis quidem quod repellat repellendus similique tempore tenetur vitae voluptate. Ab culpa, dicta dignissimos distinctio molestias provident quisquam saepe temporibus? Consectetur molestiae nisi obcaecati odio praesentium sit tenetur velit voluptas.
                                </p>
                                <a href={"/presta"} className="btn btn-primary">Voir les prestations</a>
                            </div>
                        </div>
                    </div>


                </motion.div>

            </>
        )
}