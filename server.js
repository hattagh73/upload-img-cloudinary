const express = require('express');
const cloudinary = require('./services/cloudinary').cloudinary;
const upload = require('./services/multer');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/one-image-cloudinary', upload.single('image'), async (req, res) => {
    
    const options = {
        upload_preset: "s31ypadd",
        folder: "folder-project",
        resource_type: "image"
    };
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path, options);
        if(result) {
            console.log(result);
            res.json({
                success: true,
                message: 'Uploaded to cloudinary ;)'
            })
        }
    } catch(err) {
        res.json({
            success: false,
            message: err
        })
        
    }
    
});

/* START Server */
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
    // console.log(upload)
    if (!err) return console.log(`Server is running. PORT::: ${port}`);  

    if (err) return console.log(`Server failed to run. ${err}`);
});