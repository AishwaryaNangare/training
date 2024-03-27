import Product from "../model/product.model.js"

const getProducts=async(req,res)=>{
    try {
        const products = await Product.find({})
         res.status(500).json(products)
     } catch (error) {
        res.status(500).json({message:error.message})
     }
}

const getProduct=async(req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id)
        res.status(500).json(product)
          } catch (error) {
             res.status(500).json({message:error.message})
          }
}

const addProduct=async(req,res)=>{
    try {
        const product= await Product.create(req.body) 
        res.status(200).json(product)
         
     } catch (error) {
        res.status(500).json({message:error.message})
     }
}

const updateProduct=async(req,res)=>{
    try {
        const {id }= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).send("product not found")
        }
        
        res.status(200).json( {message:"updated successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
       await Product.findByIdAndDelete(id)
       res.status(200).json({message:"product deleted successfully"})
    
      } catch (error) {
        res.status(500).json({message:error.message})
      }
}

export {getProducts,getProduct,addProduct,updateProduct,deleteProduct}