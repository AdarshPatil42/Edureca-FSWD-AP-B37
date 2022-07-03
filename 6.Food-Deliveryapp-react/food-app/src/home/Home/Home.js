
import Header from "../Header/Header";

function Home(){

    let location;
    let name;

    function filter(type, data){
        console.log("Filter called")
        if(type==='location'){
            location=data;
        }else{
            name=data;
        }
        filterRestaurant();
    }

    function filterRestaurant(){
        var url = "http://localhost:4400/api/restaurant/filter?";
        if(location){
            url=url+"location="+location;
        }
        if(name){
            url=url+"&name="+name;
        }
        fetch(url)
            .then(res=> res.json())
            .then((res)=>{console.log(res)});
    }

    return(
        <div>
            <Header 
            locationChange={(event)=>filter('location', event)}
            nameChange={(event)=> filter('name', event)} />
        </div>
    )
}

export default Home