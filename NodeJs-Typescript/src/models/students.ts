import {Schema,model,Document} from "mongoose";

export interface StudentDocument extends Document{
    name:string,
    marks:Number,
    branch:string,
    email:string
}

interface Student {
    name:string,
    marks:Number,
    branch:string,
    email:string
}

const schema = new Schema<Student>({
    name:{
        type:String,
         required:true
    },
    marks:{
        type:Number,
         required:true
    },
    branch:{
        type:String,
         required:true
    },
    email:{
        type:String,
         required:true
    }
})

const StudentModel = model<Student>("student",schema)
export default StudentModel;
