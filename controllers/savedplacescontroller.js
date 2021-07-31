const { UniqueConstraintError } = require("sequelize/lib/errors");
const router = require("express").Router();
//const { UniqueConstraintError } = require("sequelize/types");
const { SPModel }  = require("../models"); //SP = Saved Places
// get, put, delete
router.post("/create", async (req, res) => {
    let { destination, description, name, attractions, rating } = req.body;
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
        save: savedplaces
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

router.get("/get", async (req, res) => {
    let { destination, description, name, attractions, rating } = req.body;
    try{
    const savedplaces = await SPModel.findAll({
        destination,
        description,
        name,
        attractions,
        rating
    });

    
    res.status(201).json({
        message: "Location succesfully displayed",
        save: savedplaces
    });
} catch (err) {
    if (err instanceof UniqueConstraintError) {
        res.status(409).json({
            message: "Location already displayed",
        });
    } else {
    res.status(500).json({
        message: "Failed to display location",
    });
    }
}
});

router.put("/update", async (req, res) => {
    let { destination, description, name, attractions, rating } = req.body;
    try{
    const savedplaces = await SPModel.update({
        destination,
        description,
        name,
        attractions,
        rating
    });

    
    res.status(201).json({
        message: "Location succesfully updated",
        save: savedplaces
    });
} catch (err) {
    if (err instanceof UniqueConstraintError) {
        res.status(409).json({
            message: "Location already updated",
        });
    } else {
    res.status(500).json({
        message: "Failed to update location",
    });
    }
}
});

router.delete("/delete", async (req, res) => {
    let { destination, description, name, attractions, rating } = req.body;
    try{
    const savedplaces = await SPModel.destroy({
        destination,
        description,
        name,
        attractions,
        rating
    });

    
    res.status(201).json({
        message: "Location succesfully deleted",
        save: savedplaces
    });
} catch (err) {
    if (err instanceof UniqueConstraintError) {
        res.status(409).json({
            message: "Location already deleted",
        });
    } else {
    res.status(500).json({
        message: "Failed to delete location",
    });
    }
}
});

module.exports = router;