import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../components/login/AuthProvider'
import { doFetch, myCostumFeth } from '../../helpers/fetch'

export const CommentsList = (props) => {
    const [apiData, setApiData] = useState()
    const { loginData } = useContext(AuthContext)
    console.log(loginData);
    const id = props.itemId;

    const getData = async () => {
        const url = `https://api.mediehuset.net/snippets/comments/${id}`
        const options = {
            method: 'GET',
            headers: {
                'Authorization' : `Baerer ${loginData.access_token}`
            }
        }
        try{
            const result = await myCostumFeth(url, options);
            setApiData(result);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(loginData) {
            getData();
        }
    }, [loginData, id])

    return (
        <>
            <h4>Kommentarer</h4>
            <ul>
            {apiData && apiData.items.map((item, key) => {
                return (
                    <li key={key}>{item.title}</li>
                )
            })}
            </ul>
        </>
    )
}