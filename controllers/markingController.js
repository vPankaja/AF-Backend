import asyncHandler from "express-async-handler";
import Marking from '../models/markingModel.js';

 
const createMarking = asyncHandler(async (req, res) => {
    const {
        assignmentName,
        overallMark,
        attachment
    } = req.body;
  
    const newmarking = new Marking({
      assignmentName,
      overallMark,
      attachment,
    });
    try {
      await newmarking.save();
      res.send("Marking Sheme Created Successfully");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error });
    }
  });

  const getAllMarkings = asyncHandler(async (req, res) => {
    const marking = await Marking.find({});
    res.json(marking);
  });

  const deleteMarking = asyncHandler(async (req, res) => {
    const marking = await Marking.findById(req.params.id);
  
    if (marking) {
      await marking.remove();
      res.json({ message: "Marking removed" });
    } else {
      res.status(404);
      throw new Error("Marking not found");
    }
  });


  export { createMarking, getAllMarkings, deleteMarking};
  