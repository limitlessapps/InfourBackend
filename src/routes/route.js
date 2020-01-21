const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account");
const FamilyController = require("../controllers/family");
const InsuranceController = require("../controllers/insurance");
const BankController = require("../controllers/bank")
const Social_media = require("../controllers/social_media");
const AssetsController = require("../controllers/asset");
// const Files = require("../controllers/files");
const Student = require("../controllers/student_occupation");
const Employed = require("../controllers/employed_occupation");
const Self_employed = require("../controllers/self_employed_occupation");
const Occupation = require("../controllers/occupation");

// =================================================account
router.post("/account",AccountController.create_account);
router.get("/account",AccountController.get_account);
router.patch("/account/:id",AccountController.modify_account);
router.delete("/account/:id",AccountController.delete_account);
//==================================================== family
router.post("/family",FamilyController.create_family);
router.get("/family",FamilyController.get_family);
router.delete("/family/:id",FamilyController.delete_family);
router.patch("/family/:id",FamilyController.modify_family);
//==================================================== insurance
router.post("/insurance",InsuranceController.create_insurance);
router.get("/insurance",InsuranceController.get_insurance);
router.patch("/insurance/:id",InsuranceController.modify_insurance);
router.delete("/insurance/:id",InsuranceController.delete_insurance);
//===================================================assets
router.post("/assets",AssetsController.create_assets);
router.get("/assets",AssetsController.get_assets);
router.patch("/assets/:id",AssetsController.modify_assets);
router.delete("/assets/:id",AssetsController.delete_assets);
//===================================================== bank
router.get("/bank_name",BankController.get_bank);
router.post("/bank_name",BankController.create_bank_name);
router.patch("/bank/:id",BankController.modify_bank_name);
router.delete("/bank/:id",BankController.delete_bank);
//==================================================== occupation
router.post("/student_occupation",Student.create_Student_occupation);
router.patch("/student_occupation/:id",Student.modify_Student_occupation);
router.delete("/student_occupation/:id",Student.delete_student_occupation);
router.post("/employed_occupation",Employed.create_employed_occupation);
router.patch("/employed_occupation/:id",Employed.modify_employed_occupation);
router.delete("/employed_occupation/:id",Employed.delete_occupation_employed);
router.post("/self_employed_occupation",Self_employed.create_self_employed_occupation);
router.patch("/self_employed_occupation/:id",Self_employed.modify_self_employed_occupation);
router.delete("/self_employed_occupation/:id",Self_employed.delete_occupation_self_employed);
router.post("/occupation",Occupation.create_occupation);
router.patch("/occupation/:id",Occupation.modify_occupation);
router.delete("/occupation/:id",Occupation.delete_occupation);
//======================================================= social_media
router.post("/social_media",Social_media.create_social_media);
router.get("/social_media",Social_media.get_social_media);
router.delete("/social_media/:id",Social_media.delete_social_media);
router.patch("/social_media/:id",Social_media.modify_social_media);

//====================================================== files;
// router.post("/no_database",fileController.uploadFile);
//========================================================= files(multer)
// router.post("/image",upload.array('image',4),Files.create_image);
// router.post("/image",middleware,Files.create_image);
// router.get("/image/:id",Files.get_image);
module.exports = router;