import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";

export const News = () => {
    const [apiData, setApiData] = useState('');
    
    const getNews = async () => {
        const url = 'https://api.mediehuset.net/overlook/news';
        const result = await doFetch(url)
        setApiData(result);
    }

    useEffect(() => {
        getNews();
    }, [])
    console.log(apiData)

    return(
        <>
        <h3>Sidst nyt</h3>
        <ul>{apiData && apiData.items.map((item, key) => {
            return(
                <li key={key}>
                    <h4>{item.title}</h4>
                    <p>{item.teaser}</p>
                    <img src={item.image} alt="" />
                </li>
            )
        })}</ul>
        </>
    )
}