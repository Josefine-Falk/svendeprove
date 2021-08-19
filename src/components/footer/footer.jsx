import React from "react";
import SocialMedia from '../../assets/Social Media Icons.png';
import Style from './footer.module.scss';

export function Footer() {
    return(
        <footer className={Style.container}>
            <p>© 2019 Hotel Overlook Alle rettigheder forbeholdt.</p>
            <img src={SocialMedia} alt="Social_media_" />
            <ul className={Style.navul}>
                <li>Forside</li>
                <li>Hoteller og destinationer</li>
                <li>Værelser</li>
                <li>Reservation</li>
                <li>Login</li>
            </ul>
        </footer>
    )
}