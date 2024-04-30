
import Tour from '..models/Tour.js'


//create new tour
export const createTour = async(req,res)=>{

    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save()
        res.status(200).json({success: true,message:'Successfully created',data: savedTour,});
    }
    catch(err){
        res.status(500).json({success: false,message:'Failed to created'});
    }
}


//update  tour
export const updateTour = async (req,res)=>{
    const id = req.params.id
    try{
        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true});

        res.status(200).json({
            success: true,
            message: "Sucessfully Updated",
            data : updateTour,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to Update",
        });
    }
};

//delete  tour
export const deleteTour = async (req,res)=>{
    const id = req.params.id
    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Sucessfully deleted",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to delete",
        });
    }
};

//getSingleTour  tour
export const getSingleTour = async (req,res)=>{
    const id = req.params.id
    try{
        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true,
            message: "Sucessfully deleted",
            data: tour,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//get all Tour 
export const getAllTour = async (req,res)=>{
    const page = parseInt(req.query.page);
    console.log(page);
    try{
        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page * 8)
        .limit(8);

        res.status(200).json({
            success: true,
            count: tours.length,
            message : "Successful",
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            sucess: false,
            message : "not found",
        });
    }
};

//get tour by serach
export const getTourBySearch = async(req,res)=>{

    const city = new RegExp(req.query.city,'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try{
        const tours = await Tour.find({
            city ,distance:{$gte:distance},
            maxGroupSize:{$gte:maxGroupSize}
        }).populate("reviews");

        res.status(200).json({
            success: true,
            message:"Successful",
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            sucess: false,
            message : "not found",
        });
    }
}

//get featured  tour
export const getFeaturedTour = async (req,res)=>{

    try{
        const tours = await Tour.find({featured:true}).populate("reviews").limit(8);

        res.status(200).json({
            success: true,
            message : "Successful",
            data: tours
        });
    }
    catch(err){
        res.status(404).json({
            sucess: false,
            message : "not found",
        });
    }
};

//get tour counts

export const getTourCount = async(req,res) =>{
    try{
        const tourCount = await Tour.estimatedDocumentsCount();

        res.status(200).json({
            success: true,
            data: tourCount
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "failed to fetch",
        });
    }
};
