import express from "express";
import {
  addMobile,
  createMobileReview,
  deleteMobile,
  getAllMobile,
  getMobileDetail,
  updateMobile,
} from "../controller/mobileController.js";
import { fetchuser } from "../middleware/fetchuser.js";

const router = express.Router();

router.get("/getAllMobiles", getAllMobile);
router.get("/getMobileDetail/:id", getMobileDetail);
router.post("/addMobile", fetchuser, addMobile);
router.put("/updateMobile/:id", fetchuser, updateMobile);
router.delete("/deleteMobile/:id", fetchuser, deleteMobile);
router.post("/createMobileReview", fetchuser, createMobileReview);

export default router;
