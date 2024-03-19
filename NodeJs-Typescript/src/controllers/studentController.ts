import  express, {Request,Response} from "express";
import StudentModel from "../models/students";
import {findAndUpdate,deleteStudent,CreateStudent} from "../services/students.service"


const HomeDetails = async(req:Request,res:Response)=>{

    // let StudentData = await StudentModel.find()

    //---ADD----
    // const student = await CreateStudent({
    //     name:"John",
    //     marks:35,
    //     branch:"BCom",
    //     email:"xyz@gmail.com"
    // })
    
    //--Update---
    const student = await findAndUpdate("65f97ac8d694997aa6e2a5e1", { branch: "IT" }, { new: true })

    res.json({StudentData:student})
}

export {HomeDetails}