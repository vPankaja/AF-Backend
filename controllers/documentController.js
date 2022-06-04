import asyncHandler from "express-async-handler";
import Document from '../models/documentModel.js';

 
const uploadDocument = asyncHandler(async (req, res) => {
    const {
        assignmentname,
        document
    } = req.body;
  
    const newdocument = new Document({
      assignmentname,
      document,
    });
    try {
      await newdocument.save();
      res.send("Document Uploaded Successfully");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error });
    }
  });

//   const getAllDocuments = asyncHandler(async (req, res) => {
//     const document = await Document.find({});
//     res.json(document);
//   });

//   const deleteDocument = asyncHandler(async (req, res) => {
//     const document = await Document.findById(req.params.id);
  
//     if (document) {
//       await document.remove();
//       res.json({ message: "Document removed" });
//     } else {
//       res.status(404);
//       throw new Error("Document not found");
//     }
//   });


  export { uploadDocument};
  