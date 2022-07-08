



import './RestaurantCard.css';
// import { useNavigate } from "react-router-dom";

function RestaurantCard(props){

    // const navigate = useNavigate();

    // const redirectToDetail = (id)=>{
    //     navigate("restaurant/"+id);
    // }

    const restaurant = props.item;
    return(
        // <a href='' onClick={()=>{redirectToDetail(restaurant._id)}}>
        <div className="card">
            <div className="row">
                <div className="col-md-3">
                <img className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zSh9UXlqxfTWkjsrqNTZYKA7_katZ74-jS42lUsCe9MWS8sFy12eKNQKXm8N5HdrrrE&usqp=CAU"></img>
                </div>
                <div className="col-md-9">
                    <p>{restaurant.name}</p>
                    <p>Location : {restaurant.location}</p>
                    <p>{restaurant.contact}</p>
                </div>
            </div>
        </div>
        // </a>
    )
}

export default RestaurantCard;