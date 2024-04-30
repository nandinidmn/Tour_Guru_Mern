
import Booking from "../models/Booking";

//create new booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body);
    try{
        const savedBooking = await newBooking.save();

        res.status(200).json({
            success: true,
            message: "Your tour is Booked",
            data: savedBooking,
        });
    }
    catch(err){
        res.status(500).json({
            success: true,
            message: "Internal Server error",
        });
    }
};

//get single book
export const getBooking = async(req,res)=>{
    const id = req.params.id

    try{
        const books = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: books,
        });
    }
    catch(err){
        res.status(404).json({
            success: true,
            message: "not found",
        });
    }
}

//get all  booking
export const getAllBooking = async(req,res)=>{

    try{
        const book = await Booking.find();

        res.status(200).json({
            success: true,
            message: "Successful",
            data: book,
        });
    }
    catch(err){
        res.status(500).json({
            success: true,
            message: "Internal server error",
        });
    }
}