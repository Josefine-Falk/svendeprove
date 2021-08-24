import React from "react";
import Carousel from "react-material-ui-carousel";
import Slider5 from '../../assets/Slider5.png';
import Slider6 from '../../assets/Slider6.png';

export function Hero() {
    const carouselItems = [
        {
            url: Slider5,
            alt: "Hoteller_og_Destinationer"
        },
        {
            url: Slider6,
            alt: "Hoteller_og_Destinationer"
        }
    ]

    function Items(props){
        return(
            <div style={{height:"65vh"}}>
                <h3>{props.items.description}</h3>
                <img alt={props.items.alt} width="100%" src={props.items.url} />
            </div>
        )
    }

    return(
        <>
        <Carousel animation="fade" interval="5000" indicators={false}>
            {
                carouselItems.map((items, index) => {
                    return(
                        <Items key={index} items={items}/>
                    )
                })
            }
        </Carousel>
        </>
    )
}