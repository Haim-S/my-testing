const router = require("express").Router();
const picturesController = require("../controllers/picControllers");



router.get("/all",picturesController.getAllPictures);
router.post("/create",picturesController.CreateOne);
router.delete("/del/:id",picturesController.deleteOne);

module.exports = router;