import { useState, useEffect } from 'react'
import Hero from './components/Hero/Hero.jsx'
import axios from "axios";
import { motion } from 'framer-motion'
import heroImg from './assets/hero-img.webp'



export default function App() {



        return (
            <>
                <motion.div className="flex flex-col w-full h-fit items-center mt-16 gap-4"
                            initial={{opacity: 0, transform: 'translateY(20%)'}}
                            animate={{opacity: 1, transform: 'translateY(0%)'}}
                            exit={{opacity: 0, transform: 'translateY(20%)', transition: {duration: 0.1}}}
                >

                    <div className="hero border w-fit rounded-lg ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"/>
                            <div>
                                <h1 className="text-5xl font-bold">Fusion'Aile</h1>
                                <p className="py-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem beatae nemo non perferendis similique voluptatem? Accusantium autem blanditiis corporis dignissimos doloremque dolorum ea, eligendi error eveniet hic illo ipsa laboriosam molestiae molestias odio officiis quidem quod repellat repellendus similique tempore tenetur vitae voluptate. Ab culpa, dicta dignissimos distinctio molestias provident quisquam saepe temporibus? Consectetur molestiae nisi obcaecati odio praesentium sit tenetur velit voluptas.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>


                </motion.div>

            </>
        )
}