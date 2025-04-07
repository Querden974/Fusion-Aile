import React from 'react'

export default function Hero() {
    return (
        <div className="w-full flex flex-col mx-auto h-min justify-center items-center text-3xl text-[#ee826c] overflow-clip">
            <div className="w-[60rem] h-screen absolute m-auto translate-y-1/6 ">
                <svg viewBox="0 0 500 500" width="100%" height="100%" className={"absolute"}>
                    <path
                        id="curve"
                        d="M100,250 A150,200 0 0,1 400,250"
                        fill="transparent"
                    />
                    <text width="500" >
                        <textPath href="#curve" startOffset="50%" textAnchor="middle" fill={"#ee826c"} className={"font-selima text-5xl"}>
                            Il était une fois
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className=" w-1/4 bg-no-repeat bg-center bg-cover rounded-full aspect-square bg-[url(./home-picture.webp)] my-8"></div>
            <div className="w-screen h-screen absolute m-auto translate-y-1/6">
                <svg viewBox="0 0 500 500" width="100%" height="100%" className={"absolute   w-full "}>
                    <path
                        id="curve2"
                        d="M50,100 A200,200 0 0,0 450,100"
                        fill="transparent"
                    />
                    <text width="500" >
                        <textPath href="#curve2" startOffset="50%" textAnchor="middle" fill={"#ee826c"} className={"font-selima text-6xl relative "}>
                            Fusion'Aile
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    )
}
