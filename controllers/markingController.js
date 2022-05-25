import asyncHandler from "express-async-handler";
import Marking from '../models/markingModel.js';

 
const createMarking = asyncHandler(async (req, res) => {
    const {
        moduleName,
        assignmentName,
        overallMark,
        description,
    } = req.body;
  
    const newmarking = new Marking({
      moduleName,
      assignmentName,
      overallMark,
      description,
    });
    try {
      await newmarking.save();
      res.send("Marking Sheme Created Successfully");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

  export {createMarking};
  