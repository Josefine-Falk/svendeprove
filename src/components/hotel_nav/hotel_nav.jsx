import React from "react";
import { Link } from "react-router-dom";
import Style from './hotel_nav.module.scss'

export function HotelMenu() {

    return(
        <>
        <div className={Style.hotelNav}>
        <ul>
            <Link to="/hotels/1"><li>Danmark</li></Link>
            <Link to="/hotels/2"><li>Sverige</li></Link>
            <Link to="/hotels/3"><li>Norge</li></Link>
            <Link to="/hotels/4"><li>Finland</li></Link>
            <Link to="/hotels/5"><li>Island</li></Link>
            <Link to="/hotels/6"><li>Tyskland</li></Link>
        </ul>
        </div>
        </>
    )
}