import asyncHandler from "express-async-handler";
import SubType from "../models/subTypeModel.js";

const createSubType = asyncHandler(async (req, res) => {
    const {
        subName,
        submissionType,
        deadline,
        explainST,
    } = req.body;
  
    const newsubType = new SubType({
        subName,
        submissionType,
        deadline,
        explainST,
    });
    try {
      await newsubType.save();
      res.send("Submission Type Created Successfully");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error });
    }
  });

  const getAllSubTypes = asyncHandler(async (req, res) => {
    const subType = await SubType.find({});
    res.json(subType);
  });

  const deleteSubType = asyncHandler(async (req, res) => {
    const subType = await SubType.findById(req.params.id);
  
    if (subType) {
      await subType.remove();
      res.json({ message: "Submission Type removed" });
    } else {
      res.status(404);
      throw new Error("Submission Type not found");
    }
  });

  export { createSubType, getAllSubTypes, deleteSubType};