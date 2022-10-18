import express from 'express';
import cloudinary from './services/cloudinary.js';
import upload from './services/multer.js';


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ limit: '30mb', extended: true}));

/* POST Single Image */
app.post('/upload-single-img', upload.single('image'), async (req, res) => {
    
    const options = {
        upload_preset: "s31ypadd",
        folder: "folder-project",
        resource_type: "image"
    };

    // await cloudinary.uploader.upload(req.file.path, options, async function(err, rslt) {
    //     if(rslt) {
    //         res.json({
    //             success: true,
    //             message: rslt.secure_url
    //         })
    //     } 
    //     if(err) {
    //         res.json({
    //             success: false,
    //             message: err
    //         })
    //     }
    // })
    
    try {
        const response = await cloudinary.uploader.upload(req.file.path, options);
        console.log(response)
        if(response) {
            // console.log(result);
            const dateToConvert = new Date(response.created_at);
            const dateConverted = dateToConvert.toLocaleDateString("en-UK", {
                // timeZone: 'Asia/Kuala_Lumpur',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: 'numeric', // hour: numeric - 2-digit
                minute: 'numeric', // hour: numeric - 2-digit
                second: '2-digit', // hour: numeric - 2-digit
                hour12: true,
                timeZoneName: "short",
            });

            res.json({
                success: true,
                message: 'Success upload image to cloudinary',
                public_id: response.public_id,
                folder: response.folder,
                secure_url: response.secure_url,
                created_at: dateConverted
            })
        }
    } catch(err) {
        res.json({
            success: false,
            message: err
        })
        
    }
    
});

/* POST Many Image */
app.post('/upload-three-img', upload.array('image', 6), async (req, res) => {
    
    // const options = {
    //     upload_preset: "s31ypadd",
    //     folder: "folder-project",
    //     resource_type: "image"
    // };
    
    try {
        const options = {
            upload_preset: "s31ypadd",
            folder: "folder-project",
            resource_type: "image"
        };

        const files = req.files;
        
        const filePath = files.map(async item => {
            // const tmp = {};
            // tmp['path'] = item.path;
            // tmp['fieldname'] = item.fieldname;
            // tmp['originalname'] = item.originalname;
            // return tmp;
            
            return await cloudinary.uploader.upload(item.path, options);
        })
        console.log(filePath)

        

        // const result = await cloudinary.uploader.upload(filePath.map(item => item.path), options);
        if(filePath) {
            // console.log(result);
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

/* GET Check Existance of an Image */
app.get('/get-single-image-detail', async(req, res, next) => {

    const options = {
        public_id: 'folder-project/kbr4uqumyuwlmg4uhn5a',
    };

    try {
        // API resource: Accept one parameter
        const resp = await cloudinary.api.resource('folder-project/kbr4uqumyuwlmg4uhn5a');
        console.log(resp)
        if(resp) {
            res.json({
                success: true,
                message: 'Image exist',
                public_id:  resp.public_id,
                secure_url: resp.secure_url,
                created_at: resp.created_at,
                folder: resp.folder,
                rate_limit_allowed: resp.rate_limit_allowed,
                rate_limit_reset_at: resp.rate_limit_reset_at,
                rate_limit_remaining: resp.rate_limit_remaining

            })
        }
        
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
        next();
    }
    

    
    
});

/* START Server */
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
    // console.log(upload)
    // const arrObj = [];
    // arrObj.push({path: 1})
    // arrObj.push({path: 2})
    // console.log(arrObj)

    if (!err) return console.log(`Server is running. PORT::: ${port}`);  

    if (err) return console.log(`Server failed to run. ${err}`);
});