import React from "react";
import { Cities } from "../../components/Cities/Cities";
import { News } from "../../components/News/News";
import { Slider } from "../../components/slider/Slider";
import Style from './frontpage.module.scss';

export function Frontpage() {
    return(
        <>
        <Slider/>
        <News/>
        <h3>Se vores udvalg af værelser</h3>
        <Cities/>
        </>
    )
}
