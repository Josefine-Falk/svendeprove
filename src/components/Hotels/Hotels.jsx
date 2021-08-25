import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";

export const Hotels = () => {
    const [apiData, setApiData] = useState('');

    const getHotels = async () => {
        const url = 'https://api.mediehuset.net/overlook/hotels/by_city/1';
        const result = await doFetch(url)
        setApiData(result);
    }

    useEffect(() => {
        getHotels();
    }, [])
    console.log(apiData)

    return(
        <>
        <p>Hoteller</p>
        <ul>{apiData && apiData.items.map((item,key) => {
            return(
            <li key={key}>
                <h4>{item.title}</h4>
                <p>
                    {item.description}
                </p>

            </li>
            )
        })}
        </ul>
        </>
    )
}