import Router from "express";
import {
   RegisterEmploy,
   deleteEmploy,
   getEmploys,
   updateEmploy,
} from "../controllers/employ.controller.js";

const router = Router();

router.route("/register").post(RegisterEmploy);
router.route("/get/:id").get(getEmploys);
router.route("/update/:id").post(updateEmploy);
router.route("/delete/:id").post(deleteEmploy);

export default router;
