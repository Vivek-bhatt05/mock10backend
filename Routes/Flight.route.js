const express=require("express")
const {FlightModel}=require("../Models/Flight.model")
const flightRouter=express.Router()



flightRouter.get("/flights",async(req,res)=>{
   try{
      const flights= await FlightModel.find()
      res.send(flights)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})

flightRouter.get("/flights/:id",async(req,res)=>{
    const ID=req.params.id
    try{
       const flights= await FlightModel.findById({_id:ID})
       res.send(flights)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })


flightRouter.post("/flights",async(req,res)=>{
   const payload=req.body
   try{
    const newFlight= new FlightModel(payload)
    await newFlight.save()
    res.send("Created a Flight")
   }catch(err){
    console.log(err)
    res.send({"msg":"Something Went Wrong"})
   }
})

flightRouter.patch("/flights/:id",async(req,res)=>{
   const ID=req.params.id
    const payload=req.body    
    try{
         await FlightModel.findByIdAndUpdate({_id:ID},payload)
         res.send("Updated a flight")    
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
 })

 flightRouter.delete("/flights/:id",async(req,res)=>{ 
   const ID=req.params.id
   try{
     
         await FlightModel.findByIdAndDelete({_id:ID})
         res.send("Deleted a flight")
      
  }catch(err){
     console.log(err)
     res.send("Something Went Wrong")
  }
 })


module.exports={
    flightRouter
}