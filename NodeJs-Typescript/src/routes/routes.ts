import  express, {Request,Response} from "express";
const router = express.Router()
import { HomeDetails } from "../controllers/studentController";

router.get('/home',HomeDetails)

export {router}