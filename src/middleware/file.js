// const multer = require("multer")
// module.exports = (req, res, next) => {
//     let imageName;
//     let uploadStorage = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, './uploads');
//         },
//         filename: (req, file, cb) => {
//             imageName = new Date().getTime() + "_" + file.originalname;
//             cb(null, imageName);
//         }
//     });

//     let uploader = multer({ storage: uploadStorage });

//     let uploadFile = uploader.array('images', 10);

//     uploadFile(req, res, function (err) {
//         req.imageName = imageName;
//         req.uploadError = err;
//         next();
//     })
// }