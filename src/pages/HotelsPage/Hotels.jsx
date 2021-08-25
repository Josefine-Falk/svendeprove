import React from "react";
import { Hero } from "../../components/hotel_hero/hotel_hero";
import { HotelMenu } from "../../components/hotel_nav/hotel_nav";
import {Countries} from "../../components/Countries/Countries";

export function HotelsPage() {
    return(
        <>
        <Hero/>
        <HotelMenu/>
        <Countries/>
        </>
    )
}