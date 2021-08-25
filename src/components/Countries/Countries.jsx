import { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router";
import { Link } from "react-router-dom";
import { doFetch } from "../../helpers/fetch";
import Style from './countries.module.scss';

export const Countries = () => {
    const [apiData, setApiData] = useState('');
    const [apiData_cities, setApiData_cities] = useState("");
    const [apiData_hotels, setApiData_hotels] = useState("");
    
    const {id, city } = useParams()

    const getCountries = async () => {
        const url = "https://api.mediehuset.net/overlook/countries";
        const result = await doFetch(url)
        setApiData(result);
    };

    const getCities = async () => {
        const url = `https://api.mediehuset.net/overlook/cities/by_country/${id}`;
        const result = await doFetch(url)
        setApiData_cities(result);
    };

    const getHotels = async () => {
        const url = `https://api.mediehuset.net/overlook/hotels/by_city/${city}`;
        const result = await doFetch(url);
        setApiData_hotels(result);
    }

    useEffect(() => {
        getCountries();
        getCities();
        getHotels();
    }, [id, city]);
    console.log(id);

    return(
        <Switch>
            <Route exact path="/hotels">
                <p>Lande</p>
                <ul className={Style.lande}>
                    {apiData && 
                    apiData.items.map((item, key) => {
                        return(
                            <>
                            <Link to={`hotels/${item.id}`}>
                                <li key={key}>
                                    <h4>{item.key}</h4>
                                </li>
                                <img src={item.image} width="200px" alt="" />
                            </Link>
                            <p>{item.description}</p>
                            </>
                        )
                    })
                    }
                </ul>
            </Route>

            <Route exact path="/hotels/:id">
                <p>Byer i</p>
                <ul className={Style.byer}>
                    {apiData_cities && 
                    apiData_cities.items.map((item, key) => {
                        return(
                            <>
                            <Link to={`/hotels/${id}/${item.id}`}>
                                <li key={key}>
                                    <h4>{item.name}</h4>
                                </li>
                                <img src={item.image} width="200px" alt="" />
                            </Link>
                            <p>{item.description}</p>
                            </>
                        );
                    })
                    }
                </ul>
            </Route>

            <Route exact path="/hotels/:id/:city">
                <p>Hoteller i {id} </p>
                <ul className={Style.hoteller}>
                    {apiData_hotels && 
                    apiData_hotels.items.map((item, key) => {
                        return(
                            <>
                            <Link to={`hotels/${id}/${city}/`}>
                                <li key={key}>
                                    <h4>{item.title}</h4>
                                </li>
                                <img src={item.image} width="200px" alt="" />
                            </Link>
                            <p>{item.teaser}</p>
                            </>
                        );
                    })
                    }
                </ul>
            </Route>

        </Switch>
    )
}