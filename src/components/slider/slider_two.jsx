import React from 'react';
import Slide2 from '../../assets/frankfurt-skyline-germany3.png';
import Slideshow3 from '../../assets/slider3.png';
import Style from './slider_two.module.scss';
import Carousel from 'react-material-ui-carousel';

export function SliderTwo() {
    
    const carouselItems = [
        {
            url: Slide2,
            alt: "velkommen_til_hotel_overlook"
        },
        {
            url: Slideshow3,
            description: "Velkommen til Hotel Overlook",
            alt: "velkommen_til_hotel_overlook"
        }
    ]

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
        <Carousel animation="fade" interval="5000">
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