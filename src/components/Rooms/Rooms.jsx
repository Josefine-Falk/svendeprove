import { useEffect, useState } from "react"
import { doFetch } from "../../helpers/fetch";

export const Rooms = () => {
    const[apiData, setApiData] = useState('');

    const getRooms = async () => {
        const url = `https://api.mediehuset.net/overlook/rooms/by_hotel/4`;
        const result = await doFetch(url)
        setApiData(result);
        console.log(result)
    }
    useEffect(() => {
        getRooms();
    }, [])
    console.log(apiData);

    return(
        <>
        <h3>Værelser</h3>
        <ul>{apiData && apiData.items.map((item, key) => {
            return(
                <li key={key}>
                    <h4>{item.hotel_name}</h4>
                    <p>{item.room_title}</p>
                    <p>Beskrivelse {item.description}</p>
                    <p>Antal personer {item.num_persons}</p>
                    <p>Pris {item.day_price_normal}</p>
                    <img src={item.image} alt="" />
                </li>
            )
        })}</ul>
        </>
    )
}