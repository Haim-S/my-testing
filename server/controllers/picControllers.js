const Pictures = require("../schemas/picSchema");



exports.getAllPictures = async(req, res) =>{
    try {
        const AllPictures = await Pictures.find();
        res.status(200).json({
            success: true,
            data: AllPictures
        }) 
    } catch (error) {
        res.staus(500).send(error);
    }
}



exports.CreateOne = async(req,res)=>{
    try {
        const newPic = await Pictures.create(req.body);
        res.status(201).json({
            success: true,
            data: newPic
        }) 
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteOne = async(req, res) => {
    try {
        await Pictures.deleteOne({_id: req.params.id})
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        
    }
}