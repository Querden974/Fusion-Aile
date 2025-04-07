import React, {ReactElement} from 'react'

interface SubArticle {
    titre: string,
    biens:string[]
}
interface ArticleTypes{
    bienfaits: (string | SubArticle)[]
}


export default function Article({ article }:{article:ArticleTypes}):ReactElement {


    return (
        <div className="h-fit">
            <h2 className="font-bold">Bienfaits :</h2>
            <div className="flex flex-col gap-2 items-start">
                {article.bienfaits.map((item:string|SubArticle, index:number):ReactElement => {
                    if (typeof item === 'string') {
                        return <li key={index} className="list-disc ml-5">{item}</li>;
                    } else if (typeof item === 'object' && 'title' in item && 'biens' in item) {
                        return (
                            <div key={index} className="flex flex-col gap-1 items-start">
                                <h3 className="font-semibold">{item.titre}</h3>
                                <ul>
                                    {item.biens.map((bien:string, i:number):ReactElement => (
                                        <li key={i} className="list-disc ml-10">{bien}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}
