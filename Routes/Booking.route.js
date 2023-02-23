const express=require("express")
const { BookingModel } = require("../Models/Booking.model")

const bookingRouter=express.Router()



bookingRouter.get("/dashboard",async(req,res)=>{
   try{
      const bookings= await BookingModel.find()
      res.send(bookings)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})

bookingRouter.post("/booking",async(req,res)=>{
    const payload=req.body
    try{
     const newBooking= new BookingModel(payload)
     await newBooking.save()
     res.send("Created a Booking")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })

 module.exports={
    bookingRouter
}