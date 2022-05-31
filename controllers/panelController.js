import asyncHandler from "express-async-handler";
import Panel from '../models/panelModel.js';

const getAllPanels = asyncHandler(async (req, res) => {
    const rooms = await Panel.find({});
    res.json(rooms);
  });

const createPanel = asyncHandler(async (req, res) => {
    const {
        panelNo,
        studentgrps,
        panelmembers,
    } = req.body;
  
    const newpanel = new Panel({
        panelNo,
        studentgrps,
        panelmembers,
    });
    try {
      await newpanel.save();
      res.send("Panel Added Successfully");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

  export {createPanel,getAllPanels};