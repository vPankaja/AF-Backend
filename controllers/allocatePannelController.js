import asyncHandler from "express-async-handler";
import AllocatePannel from "../models/allocatePanelModel";

 
const allocatePMember = asyncHandler(async (req, res) => {
    const {
        groupId,
        topic,
        pmember
    } = req.body;
  
    const newallocatePannel = new AllocatePannel({
        groupId,
        topic,
      pmember,
    });
    try {
      await newallocatePannel.save();
      res.send("Pannel Member Allocated Successfully");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error });
    }
  });

  const getAllAllocatePannels = asyncHandler(async (req, res) => {
    const allocatePannel = await AllocatePannel.find({});
    res.json(allocatePannel);
  });

  const deleteAllocatePannel = asyncHandler(async (req, res) => {
    const allocatePannel = await AllocatePannel.findById(req.params.id);
  
    if (allocatePannel) {
      await allocatePannel.remove();
      res.json({ message: "Allocated Pannel Member removed" });
    } else {
      res.status(404);
      throw new Error("Allocated Pannel Member  not found");
    }
  });


  export { allocatePMember, getAllAllocatePannels, deleteAllocatePannel};