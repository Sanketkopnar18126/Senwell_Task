import Router from "express";
import {
   RegisterEmploy,
   getEmploys,
   updateEmploy,
} from "../controllers/employ.controller.js";

const router = Router();

router.route("/register").post(RegisterEmploy);
router.route("/get/:id").get(getEmploys);
router.route('/update/"id').post(updateEmploy);

export default router;
