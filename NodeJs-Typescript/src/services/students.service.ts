import mongoose, {  FilterQuery,QueryOptions,UpdateQuery,DocumentSetOptions} from "mongoose"

import StudentModel,{StudentDocument} from "../models/students"

export function CreateStudent(input: DocumentSetOptions ){
 return StudentModel.create(input)
}

export function findStudent(query:FilterQuery<StudentDocument>,options:QueryOptions={lean:true}){
  return StudentModel.find(query,{},options)
}

export function findAndUpdate(id: string, update: UpdateQuery<StudentDocument>, options: QueryOptions) {
    return StudentModel.findByIdAndUpdate(id, update, options);
  }

export function deleteStudent(query:FilterQuery<StudentDocument>){
 StudentModel.deleteOne(query)
}