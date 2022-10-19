import multer from 'multer';
import path from 'path';
/*
  ! Multer Object:
    * storage
    * fileFilter
    * limits
*/
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".PNG") {
    cb(new Error("Unsupported file type!"), false);
    return;
  }
  cb(null, true);
}

const fileFilter2 = (req, file, cb) => {
  if(
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    // cb(null, false);
    // return cb(new Error("Only .png, .jpg and .jpeg formats is allowed"));
    // cb({message: 'Unsupported file format'}, false)
    cb(new Error("Unsupported file format"), false);
  }
}

const maxSize = 3 * 1024 * 1024; // 5MB

const upload = multer({
  storage: storage,
  fileFilter: fileFilter2,
  limits: { 
    fileSize: maxSize 
  }
});

export default upload;

// const multer = require('multer');
// const path = require('path');

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("Unsupported file type!"), false);
//       return;
//     }
//     cb(null, true);
//   },
// });
// const fileStorageEngine = multer.diskStorage({
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("Unsupported file type!"), false);
//       return;
//     }
//     cb(null, true);
//   },
// })

// const fileStorageEngine = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("Unsupported file type!"), false);
//       return;
//     }
//     cb(null, true);
//   },
// })

