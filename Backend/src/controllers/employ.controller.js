import { Employ } from "../models/employ.model.js";
import { asynchHandler } from "../utills/asynchHandler.js";
import { apiResponse } from "../utills/apiResponse.js";
import { apiError } from "../utills/apiError.js";

const RegisterEmploy = asynchHandler(async (req, res) => {
   const { emplyId, name, dob, designation, salary } = req.body;

   console.log(req.body);

   const employ = await Employ.create({
      emplyId,
      name,
      dob,
      designation,
      salary,
   });

   console.log("Myemploy", employ);
   if (!employ) {
      throw new apiError(500, employ, "Employ not created");
   }

   return res
      .status(200)
      .json(new apiResponse(200, employ, "Employ Successfully Created"));
});

const getEmploys = asynchHandler(async (req, res) => {
   const employ = await Employ.findById(req?.params?.id);
   console.log("emply", employ);
   if (!employ) {
      throw new apiError(500, "Emply does not exist");
   }

   return res
      .status(200)
      .json(new apiResponse(200, employ, "Successfully emply getit"));
});

const updateEmploy = asynchHandler(async (req, res) => {
   try {
      const { name } = req.body;

      // Validate the request payload here if needed

      const employ = await Employ.findByIdAndUpdate(
         req.params.id,
         { name },
         { new: true }
      );

      if (!employ) {
         return res
            .status(404)
            .json(new apiResponse(404, null, "Employee not found"));
      }

      return res
         .status(200)
         .json(new apiResponse(200, employ, "Successfully updated employee"));
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json(new apiResponse(500, null, "Internal Server Error"));
   }
});

const deleteEmploy = asynchHandler(async (req, res) => {
   try {
      const employ = await Employ.findByIdAndDelete(req.params.id);
      console.log("Employy delete", employ);
      if (!employ) {
         return res
            .status(404)
            .json(new apiResponse(404, null, "Employee not found"));
      }

      return res
         .status(200)
         .json(new apiResponse(200, employ, "Successfully deleted employee"));
   } catch (error) {
      console.error(error);
      return res
         .status(500)
         .json(new apiResponse(500, null, "Internal Server Error"));
   }
});

export { RegisterEmploy, getEmploys, updateEmploy, deleteEmploy };
//  saurabhnayyar.senwell@gmail.com
