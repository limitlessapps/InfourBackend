const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/account");
const FamilyController = require("../controllers/family");
const InsuranceController = require("../controllers/insurance");
const BankController = require("../controllers/bank")
const Social_media = require("../controllers/social_media");
const AssetsController = require("../controllers/asset");
const Files = require("../controllers/files");
const Student = require("../controllers/student_occupation");
const Employed = require("../controllers/employed_occupation");
const Self_employed = require("../controllers/self_employed_occupation");
const Occupation = require("../controllers/occupation");
const fileController = require("../controllers/fileHandling");


// =================================================account
router.post("/account",AccountController.create_account);
router.get("/account",AccountController.get_account);
router.patch("/account/:id",AccountController.modify_account);
router.delete("/account/:id",AccountController.delete_account);
//==================================================== family
router.post("/family",FamilyController.create_family);
//==================================================== insurance
router.post("/insurance",InsuranceController.create_insurance);
//===================================================assets
router.post("/assets",AssetsController.create_assets);
//===================================================== bank
router.post("/bank_name",BankController.create_bank_name);
//==================================================== occupation
router.post("/student_occupation",Student.create_Student_occupation);
router.post("/employed_occupation",Employed.create_employed_occupation);
router.post("/self_employed_occupation",Self_employed.create_self_employed_occupation);
router.post("/occupation",Occupation.create_occupation);
//======================================================= social_media
router.post("/social_media",Social_media.create_social_media);
//====================================================== Files (cloudinary)
// router.post("/files_cloudinary",Files.create_files);
//====================================================== files;
// router.post("/no_database",fileController.uploadFile);
//========================================================= files(multer)
router.post("/files_multer",);
module.exports = router;