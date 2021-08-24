import React from "react";
import { Slider } from "../../components/slider/Slider";
import Style from './frontpage.module.scss';

export function Frontpage() {
    return(
        <>
        <Slider/>
        <h3>Sidste nyt</h3>
        <h3>Se vores udvalg af værelser</h3>
        </>
    )
}
