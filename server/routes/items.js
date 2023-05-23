const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items  all items
router.get("/", async (req, res, next) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch (error) {
        next(error);
    }
});

// GET /category  all items
router.get("/:category", async (req, res, next) => {
    try {
        const items = await Item.findAll({where : {category:req.params.category}});
        res.send(items);
    } catch (error) {
        next(error);
    }
});

// GET /id  one item
router.get("/:id", async (req, res, next) => {
    try {
        const items = await Item.findOne({where : {id:req.params.id}});
        res.send(items);
    } catch (error) {
        next(error);
    }
});



module.exports = router;