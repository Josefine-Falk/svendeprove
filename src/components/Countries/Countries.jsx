import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../helpers/fetch";

export const Countries = () => {
    const [apiData, setApiData] = useState('');
    const {land} = useParams();

    const getCountries = async () => {
        const url = `https://api.mediehuset.net/overlook/cities/by_country/${land}`;
        const result = await doFetch(url)
        setApiData(result);
        console.log(result)
    }

    useEffect(() => {
        getCountries();
    }, [land])
    console.log(apiData);

    return(
        <>
        <ul>{apiData && apiData.items.map((item, key) => {
            return(
                <li key={key}>
                <h4>{item.name}</h4>
                <p>
                <img src={item.image} width="200px" alt="" />
                {item.description}
                </p>
                </li>
            )
        })}
        </ul>
        </>
    )
}