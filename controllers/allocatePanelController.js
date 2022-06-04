import asyncHandler from "express-async-handler";
import AllocatePanel from "../models/allocatePanelModel.js";

 
const allocatePMember = asyncHandler(async (req, res) => {
    const {
        groupId,
        topic,
        pmember
    } = req.body;
  
    const newallocatePanel = new AllocatePanel({
        groupId,
        topic,
      pmember,
    });
    try {
      await newallocatePanel.save();
      res.send("Panel Member Allocated Successfully");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error });
    }
  });

  const getAllAllocatePanels = asyncHandler(async (req, res) => {
    const allocatePanel = await AllocatePanel.find({});
    res.json(allocatePanel);
  });

  const deleteAllocatePanel = asyncHandler(async (req, res) => {
    const allocatePanel = await AllocatePanel.findById(req.params.id);
  
    if (allocatePanel) {
      await allocatePanel.remove();
      res.json({ message: "Allocated Panel Member removed" });
    } else {
      res.status(404);
      throw new Error("Allocated Panel Member  not found");
    }
  });


  export { allocatePMember, getAllAllocatePanels, deleteAllocatePanel};