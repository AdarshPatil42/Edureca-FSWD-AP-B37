const Restaurant = require("../models/restaurant");

exports.add = async (restaurant)=>{
    try{
        const result = await Restaurant.create(restaurant);
        return result;
    }catch(err){
        console.log(err);
    }
    return null;
}

exports.get = async (page)=>{
    console.log(page);
    console.log((page-1)*5);
    try{
    const result = await Restaurant.aggregate(
        [
            {
                $lookup:{
                    from:"menus",
                    localField : "_id",
                    foreignField: "restaurantID",
                    pipeline: [
                        {$match: {type: "Main course"}},
                        {$project: {restaurantID:0}}
                    ],
                    as :"menus"
                }
            },
            {$skip: (page-1)*5},
            {$limit: 5}
        ]
    );


    return result;
    }catch(err){
        console.log(err);
        return null;
    }
}