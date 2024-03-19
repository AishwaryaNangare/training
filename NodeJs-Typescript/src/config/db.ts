import mongoose,{connect} from "mongoose"

function connects(){
    return connect("mongodb://0.0.0.0:27017/students").then(()=>console.log("db connected")).catch((e)=>console.log("error",e))
}

export default connects