import User from '../models/User.js'


//create new tour
export const createUser = async(req,res)=>{

    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save()
        res.status(200).json({success: true,message:'Successfully created',data: savedUser,});
    }
    catch(err){
        res.status(500).json({success: false,message:'Failed to created'});
    }
}


//update User
export const updateUser = async (req,res)=>{
    const id = req.params.id
    try{
        const updateUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true});

        res.status(200).json({
            success: true,
            message: "Sucessfully Updated",
            data : updateUser,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to Update",
        });
    }
};

//delete User
export const deleteUser = async (req,res)=>{
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id);

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

//getSingleUser User
export const getSingleUser = async (req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            message: "Sucessfully deleted",
            data: user,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//getallTour User
export const getAllUser = async (req,res)=>{
    try{
        const users = await User.find({});

        res.status(200).json({
            success: true,
            message : "Successful",
            data: users,
        });
    }
    catch(err){
        res.status(404).json({
            sucess: false,
            message : "not found",
        });
    }
};