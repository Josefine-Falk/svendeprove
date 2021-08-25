import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/ContextProvider';
import { doFetch } from '../../helpers/fetch';
import Style from './login.module.scss';


export function Login() {
    
    const {loginData, setLoginData} = useContext(AppContext)

    const {message, setMessage } = useState("Indtast login oplysninger")

    const { register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = (data, e) => sendLoginRequest(data, e);
    
    const sendLoginRequest = async (data, e) => {
        e.target.reset()
        let formData = new FormData()
        formData.append('username', data.username)
        formData.append('password', data.password)

        let url = 'https://api.mediehuset.net/token';

        console.log(formData)
        let res = await doFetch(url, 'POST', formData)
        handleSessionData(res)
    }

    const handleSessionData = (res) => {
        if (!res.message) {
            setLoginData(res)
            console.log(res)
            sessionStorage.setItem('token', JSON.stringify(res))
        }

        if (res.message === "No authorization") {
            setMessage("Forkert brugernavn eller password - prøv igen")
        }
    }
    //En funktion til at logge ud
    const logOut = () => {
        setLoginData([])
        sessionStorage.removeItem('token');
        setMessage("Du er nu logget ud")

        let timer = setTimeout(() => {
            setMessage("Indtast login oplysninger")
            clearTimeout(timer)
        }, 3500);
    }

    return (
        <>
        <h1>Login</h1>
        <p>Indtast dit brugernavn og adgangsode for at logge ind</p>
          <p>{message}</p>
          {!loginData && !loginData.username ?  
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <input type="text" id="username" name="username" {...register("username", { required: true })} placeholder="Brugernavn" />
                          {errors.username && <span>Udfyld brugernavn</span> }
                  </div>
                  <div>
                      <input type="password" id="password" name="password" {...register("password", { required: true })} placeholder="Adgangskode" />
                          {errors.password && <span>Udfyld adgangskode</span> }
                  </div>
                  <div>
                      <button className={Style.annuler} type="reset">Annuller</button>
                      <button className={Style.Send} type="submit">Login</button>
                  </div>
              </form> 
          :
          <form>
              <p>Du er logget ind som {loginData.username}</p>
              <button onClick={() => {logOut()}}>Log ud</button>
          </form>
          }  
        </>
    )

}