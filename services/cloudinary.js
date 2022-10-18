// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;

import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';


config();
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloudinary_url: process.env.CLOUDINARY_URL
});

export default cloudinary;