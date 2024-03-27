import express from "express";
import mongoose from "mongoose";
import Product from "./model/product.model.js";
import productRouter from "./routes/productRouter.js";
import { logIn,signUp,logOut, checkAuth } from "./controllers/UserController.js";
import cookieParser from "cookie-parser";
import requireAuth from "./middleware/requireAuth.js";





const app = express();
//middlewares
app.use(express.json());
app.use(cookieParser())

// routes
app.post("/signup",signUp)
app.post("/login",logIn)
app.get("/logout",logOut)
app.get("/check",requireAuth, checkAuth)
app.use("/api/products",productRouter)

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});











mongoose
  .connect("mongodb://127.0.0.1:27017/products")
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(`server started at ${PORT}`);
    });
  })
  .catch(() => console.log("failed"));
