const { UniqueConstraintError } = require("sequelize/lib/errors");
const router = require("express").Router();
//const { UniqueConstraintError } = require("sequelize/types");
const { SPModel } = require("../models"); //SP = Saved Places

router.post("/save", async (req, res) => {
    let { destination, description, name, attractions, rating } = req.body.saved;
    try{
    const savedplaces = await SPModel.create({
        destination,
        description,
        name,
        attractions,
        rating
    });

    res.status(201).json({
        message: "Location succesfully saved",
        save: saved
    });
} catch (err) {
    if (err instanceof UniqueConstraintError) {
        res.status(409).json({
            message: "Location already saved",
        });
    } else {
    res.status(500).json({
        message: "Failed to save location",
    });
    }
}
});

module.exports = router;