import mongoose from "mongoose";
import personalInfoSchema from "./Personal.js";
import enrollmentDetailsSchema from "./Enrollment.js";
import academicBackgroundSchema from "./Background.js";
import academicInfoSchema from "./Academicinfo.js";
import careerProgressionSchema from "./Career.js";
import miscellaneousSchema from "./Misc.js";
//import CoCurricular from "./Curricular.js";
import CoCurricularSchema from "./Curricular.js";

const userSchema = new mongoose.Schema(
  { name:String,
    email:String,
    password:String,
    personalInfo: personalInfoSchema,
    enrollmentDetails: enrollmentDetailsSchema,
    academicBackground: academicBackgroundSchema,
    academicInfo: academicInfoSchema,
    curricularInfo:CoCurricularSchema,
    careerProgression: careerProgressionSchema,
    miscellaneous: miscellaneousSchema
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
