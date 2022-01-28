const router = require("express").Router();
const Product = require("../models/Product");
const verify = require("../verifyToken");

//Create product
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin){
        const newProduct = new Product(req.body)
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not authorized to do this action");
    }
})

//Update product
router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin){
        try {
            const updateProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updateProduct);
        } catch (error) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not authorized to do this action");
    }
})

//Delete product
router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin){
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Product has been deleted..");
        } catch (error) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not authorized to do this action");
    }
})

module.exports = router;