## 📌 Upload Image To Cloudinary
In this project we will explore on how to connect, integrate and upload image to **Cloudinary** using technology like Node, Express and etc. Please take note that this is not an online project and for the time being we will only do by locally . Also you may refer to the **Table of Contents** below for your guidance of this project. 


**Table of Contents:**
- [Project Title](#-upload-image-to-cloudinary)
- [Technology Stack](#-technology-stack)
- [API List](#-api-list)
  - [Upload Single Image](#upload-single-image)
  - [Upload Multiple Images](#upload-multiple-images)
  - [Check Single Image Details](#check-single-image-details)
  - [Check List Of Folders](#check-list-of-folders)
- [Results](#-results) 
  - [Single Img Result](#single-img-result)
  - [Multiple Imgs Result](#multiple-imgs-result)
- [Reference](#%EF%B8%8F-reference) 

## 🚀 Technology Stack
A list of technology stack that we applied in this project. There are as listed below:
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [Postman](https://postman.com/)


## 📚 API List
A list of API that we have created so far. We will be adding more API soon as we discover more stuffs from **Cloudinary**.
#### Upload Single Image

| Method    | API                                          | Body    | Type   | Description            |
| :-------- | :------------------------------------------- | :-------| :------| :----------------------|
| `POST`    | `http://localhost:4000/one-image-cloudinary` | `image` | `file` | **Required** One Image |

#### Upload Multiple Images

| Method    | API                                          | Body    | Type   | Description               |
| :-------- | :------------------------------------------- | :-------| :------| :------------------------ |
| `POST`    | `http://localhost:4000/upload-three-img`     | `image` | `file` | **Required** Multi Images |

#### Check Single Image Details
| Method    | API                                             | Description                        |
| :-------- | :---------------------------------------------- | :----------------------------------| 
| `GET`     | `http://localhost:4000/get-single-image-detail` | **Required** public_id in the code |

#### Check List Of Folders
| Method    | API                                             |
| :-------- | :---------------------------------------------- |
| `GET`     | `http://localhost:4000/get-list-folders`        |

## 📷 Results
Here are some results of this project.

#### Single Img Result
![Frame 14](https://user-images.githubusercontent.com/92319348/196485724-c90e0e8f-c23b-450c-890a-2dea07607652.png)

#### Multiple Imgs Result
![Frame 15](https://user-images.githubusercontent.com/92319348/196729187-22a6380f-f19a-4301-ba73-e2e61d145d24.png)


## ✏️ Reference 
A list of references that is helpful in this project on connecting, integrating to **Cloudinary**. Also some codes as well.
- [Reference 1](https://www.topcoder.com/thrive/articles/using-cloudinary-for-image-storage-with-express)
- [Reference 2](https://medium.com/the-andela-way/how-to-upload-multiple-images-using-cloudinary-and-node-js-2f053b167b80s)
- [Reference 3](https://stackoverflow.com/questions/53853827/async-await-for-cloudinary-upload-not-working)
- [Reference 4](https://stackoverflow.com/questions/69565984/trying-to-wait-until-multiple-images-upload-to-cloudinary)
