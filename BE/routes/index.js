import express from "express";
import { uploadFiles } from "../middlewares/UploadFile.js";
import WorksController from "../controller/WorksController.js";
import UsersController from "../controller/UsersController.js";

const router = express.Router();

router.post("/works", uploadFiles, WorksController.createWorks);
router.get("/works", WorksController.getAllWorks);
router.get("/works/:worksId", WorksController.getWorksById);
router.put("/works/:worksId", uploadFiles, WorksController.updateWorksById);
router.delete("/works/:id", WorksController.deleteWorksById);

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

export default router;
