import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";
import Style from './news.module.scss'

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
        <ul className={Style.grid_container}>{apiData && apiData.items.splice(0,3).map((item, key) => {
            return(
                       
                <li key={key}>  
                <figure>
                    <img className={Style.images} src={item.image} alt="" />
                    <figcaption>{item.title}</figcaption>
                 </figure>    
                </li>
               
            )
        })}</ul>
        </>
    )
}