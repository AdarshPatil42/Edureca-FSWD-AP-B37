import "./RestaurantDetail.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RestaurantDetail() {

    var [restaurant, setRestaurant] = useState();
    // 1. read the id form url params.
    const {id} = useParams();


    useEffect(() => {
        // 2. call api to get restaurant details.
        fetch("http://localhost:4400/api/restaurant/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setRestaurant(result);
                }
            );
    }, []);

    return (
        // 3. show the data in component.
        <div className="container">
            <div className="banner"></div>
            <h3 className="name">{restaurant ? restaurant.name : ''}</h3>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link tab-name" data-bs-toggle="tab" href="#overview">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link tab-name" data-bs-toggle="tab" href="#contact">Contact</a>
                </li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="overview">

                    <p>Location/Address: {restaurant ? restaurant.location : ''}</p>

                </div>
                <div role="tabpanel" className="tab-pane" id="contact">
                    <p>Website: {restaurant ? restaurant.website : ''}</p>
                    <p>Contact: {restaurant ? restaurant.contact : ''}</p>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetail;