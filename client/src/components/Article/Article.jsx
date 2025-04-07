import React from 'react'

export default function Article({ article }) {


    return (
        <div className={"h-fit"}>
            <h2 className={"font-bold"}>Bienfaits :</h2>
            <div className="flex flex-col gap-2 items-start">
                {Array.isArray(article.bienfaits) &&
                    <ul>
                        {article.bienfaits.map((item, index) => (
                            typeof item !== "object" && <li key={index} className={"list-disc ml-5"}>{item}</li>
                        ))}
                    </ul>
                }
                {Array.isArray(article.bienfaits) && article.bienfaits.map((item, index) => (
                    typeof item === "object" &&
                    <div className="flex flex-col gap-1 items-start ">
                        <h3 key={index} className={'font-semibold'}>{item.titre}</h3>
                        <ul>
                            {Array.isArray(item.biens) &&
                                <ul>
                                    {item.biens.map((item, index) => (
                                        typeof item !== "object" && <li key={index} className={"list-disc ml-10"}>{item}</li>
                                    ))}
                                </ul>
                            }
                        </ul>
                    </div>
                ))
                }
            </div>
        </div>

    )
}


// {Array.isArray(article.bienfaits) && article.bienfaits.map((item, index) => (
//     typeof item !== "object" && <li key={index} className={"list-disc ml-5"}>{item}</li>
//
// ))}