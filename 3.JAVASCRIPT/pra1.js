// function hello(){
//     document.write("welcome dear");
// }
// hello();
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// function sum(){
//     var a=2;
//     var x=8;
//     var add= a+x;
//     document.write("The sum is "+add);
// }
// sum();
// document.write("<br>");
// document.write("<br>");

// function addi(a , b){
//     var plus = a + b;
//     document.write("this is ans "+plus+"<br>");
// }
// addi(10 , 56);
// document.write("<br>");
// addi(105 , 5);
// document.write("<br>");
// addi(40 , 560);
// document.write("<br>");
// addi(105 , 50);
// document.write("<br>");



// Solution - 1

class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }]

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }

    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(restaurant => restaurant.city == cityName);
    }
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames();       // ['KFC', 'Domino', 'Burger King']
restaurantObj.filterRestaurantByCity('Pune');  // [{},{}]