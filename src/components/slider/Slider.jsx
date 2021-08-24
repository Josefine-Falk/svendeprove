import React from "react";
import Slide1 from '../../assets/Slider1.png';
import Slide3 from '../../assets/frankfurt-skyline-germany3.png';
import Style from './Slider.module.scss';
import Carousel from 'react-material-ui-carousel';

export function Slider() {
    
    //Const med de items jeg skal have i carousel, med en url til img, en description og alt-tekst
    const carouselItems = [
        {
            url: Slide1,
            alt: "velkommen_til_hotel_overlook"
        },
        {
            url: Slide3,
            description: "Velkommen til Hotel Overlook",
            alt: "velkommen_til_hotel_overlook"
        }
    ]

    //Function til hente slidebilleder ned, med description og alt-tekst
    function Item(props){
        return (
            <div className={Style.slide} style={{Height:"65vh"}}>
                <h3>{props.item.description}</h3>
                <img alt={props.item.alt} width="100%" src={props.item.url} />
            </div>
        )
    }

    return(
        <>
        {/* Carousel slide med interval skift efter 5 sekunder */}
        <Carousel animation="fade" interval="5000" indicators={false}>
            {
            carouselItems.map((item, index) => {
                return(
                    <Item key={index} item={item}/>
                )
            })
            }
        </Carousel>
        </>
    )
}