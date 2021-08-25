import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";
import Style from './cities.module.scss';

export const Cities = () => {
    const [apiData, setApiData] = useState('');

    const getCities = async () => {
        const url = `https://api.mediehuset.net/overlook/cities/by_country/1`;
        const result = await doFetch(url)
        setApiData(result);
    }
    useEffect(() => {
        getCities();
    }, [])
    console.log(apiData);

    return(
        <>
        <p>Byer</p>
        <ul>{apiData && apiData.items.map((item, key) => {
            return(
                <li key={key}>
                    <h4>{item.name}</h4>
                    <p>
                        <img className={Style.cities_img} src={item.image} alt="" />
                        {item.description}
                    </p>
                </li>
            )
        })}
        </ul>
        </>
    )
}