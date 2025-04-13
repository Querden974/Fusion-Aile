import React, {ReactElement} from 'react'

interface SubArticle {
    titre: string,
    biens:string[]
}
interface ArticleTypes{
    bienfaits: (string | SubArticle)[]
}


export default function Article({ article }:{article:ArticleTypes}):ReactElement {

    const isObject:boolean = typeof article.bienfaits[0] === 'object'
    const isString:boolean = typeof article.bienfaits[0] === 'string'


    return (
        <div className="h-fit w-full">

            <h2 className="font-bold">Bienfaits :</h2>
            <div className={` gap-8 items-start ${isObject ? 'grid grid-cols-2' : 'flex flex-col'}`}>
                {isString &&
                    <ul>
                        {article.bienfaits.map((item:string, index:number):ReactElement => (<li key={index} className="list-disc ml-5">{item}</li>))}
                    </ul>
                }
                {isObject && article.bienfaits.map((item:SubArticle, index:number):ReactElement => {
                            if (typeof item === 'object') {
                                if( "titre" in item && "biens" in item) {
                                    return (
                                        <div key={index} className="flex flex-col gap-1 items-start">

                                            <h3 className="font-semibold">{item.titre}</h3>
                                            <ul className={"flex flex-col gap-1 items-start list-inside"}>
                                                {item.biens.map((bien:string, i:number):ReactElement => (
                                                    <li key={i} className="list-disc">{bien}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                }

                            }
                            return null;
                        })
                }

            </div>
        </div>
    )
}
