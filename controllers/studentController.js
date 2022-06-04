import express from "express";

import StudentGroup from "../models/studentGroupModel.js";
import researchTopic from "../models/researchTopicModel.js";

import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateTokens.js'

const router = express.Router();

// Register Student
const createStudent = asyncHandler(async (req, res) => {
  const { name, nic, gender, contactNo, email, password } = req.body

  const topicResearchExists = await User.findOne({ email })

  if(topicResearchExists) {
      res.status(400)
      throw new Error('Student already exists')
  }

  const type = "STUDENT";

  const topicResearch = await User.create({
      name,
      nic,
      gender,
      contactNo,
      email,
      password,
      type
  })

  if(topicResearch) {
      res.status(201).json({
       _id: topicResearch._id,
       name: topicResearch.name,
       nic: topicResearch.nic,
       gender: topicResearch.gender,
       contactNo: topicResearch.contactNo,
       email: topicResearch.email,
       type: topicResearch.type,
       token: generateToken(topicResearch._id),
      })
  } else {
      res.status(400)
      throw new Error('Invalid topicResearch data')
  }
});

// Get all students
const getStudents = asyncHandler(async(req,res) => {
    const student = await User.find({ type: "STUDENT" });
    res.json(student);
});


// Get all groups
const getGroups = asyncHandler(async(req,res) => {
    const group = await StudentGroup.find({});
    res.json(group);
})

// Create student Group
const createGroup = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const member1 = req.body.member1;
  const member2 = req.body.member2;
  const member3 = req.body.member3;
  const member4 = req.body.member4;

  const newGroup = new StudentGroup({
    name,
    member1,
    member2,
    member3,
    member4,
  });

  newGroup
    .save()
    .then(() => {
      res.json("Group Registered");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Check if a student is in a group
const checkStudentinGroup = asyncHandler(async (req, res) => {
  const studentEmail = req.body.email;

  const studGroup1 = await StudentGroup.findOne({ member1: studentEmail });
  const studGroup2 = await StudentGroup.findOne({ member2: studentEmail });
  const studGroup3 = await StudentGroup.findOne({ member3: studentEmail });
  const studGroup4 = await StudentGroup.findOne({ member4: studentEmail });

  if (studGroup1 || studGroup2 || studGroup3 || studGroup4) {
    res.json({
      available: false,
    });
  }
  else {
    res.json({
      available: true,
    })
  }
});

// Get the group of the student
const checkStudentGroup = asyncHandler(async (req, res) => {
  const studentEmail = req.params.email;

  const studGroup1 = await StudentGroup.findOne({ member1: studentEmail });
  const studGroup2 = await StudentGroup.findOne({ member2: studentEmail });
  const studGroup3 = await StudentGroup.findOne({ member3: studentEmail });
  const studGroup4 = await StudentGroup.findOne({ member4: studentEmail });

  if(studGroup1) {
    res.json(studGroup1);
  }
  else if(studGroup2) {
    res.json(studGroup2);
  }
  else if(studGroup3) {
    res.json(studGroup3);
  }
  else if(studGroup4) {
    res.json(studGroup4);
  }
  else {
    res.json("No group")
  }
})


// Get research by group name
const getTopicByGroup = asyncHandler(async (req, res) => {
  const group = req.params.groupName;

  const research = await researchTopic.findOne({ groupId: group })

  if(research) {
    res.json(research);
  }
  else {
    res.json("No research")
  }
})


// Assign a cosupervisor
const assignCoSup = asyncHandler(async (req, res) => {
  const resId = req.body.id;
  const coSup = req.body.coSupervisor

  const research = await researchTopic.findByIdAndUpdate({ _id:resId }, {coSupervisor: coSup })

  if(research) {
    res.json(research)
  }
  else {
    res.json("No research")
  }
})

// Get research by id
const getResearchByID = asyncHandler(async(req, res) => {
  const resId = req.params.id;

  const research = await researchTopic.findById({ _id:resId })

  if(research) {
    res.json(research);
  }
})

// Update research
const updateResearch = asyncHandler(async(req,res) => {
  const id = req.params.id
  const {topic, groupId, supervisor, status} = req.body
  const coSupervisor = "Not assigned";

  const updateResearch = {
    topic,
    groupId,
    supervisor,
    coSupervisor,
    status,
  }

  const update = await researchTopic.findByIdAndUpdate(id, updateResearch, function(err, doc) {
    if(err) {
      res.status(650);
    }
    else {
      res.json(doc)
    }
  })
})

// Register research topic
const registerTopic = asyncHandler(async (req, res) => {
  const topic = req.body.topic;
  const groupId = req.body.groupId;
  const supervisor = req.body.supervisor;
  const coSupervisor = "Not assigned";
  const status = req.body.status;

  const topicResearch = await researchTopic.create({
    topic,
    groupId,
    supervisor,
    coSupervisor,
    status,
  });

  if(topicResearch) {
    res.json("Topic requested");
  }
  else {
    res.json("unsuccessful")
  }

  // topicResearch
  //   .save()
  //   .then(() => {
  //     res.json("Topic requested");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

//get All Topics
const getAllTopics = asyncHandler(async (req, res) => {
    const topicResearch = await researchTopic.find({});
    res.json(topicResearch);
  });


// get Topic by ID
const getTopicById = asyncHandler(async(req, res) => {
    const topicResearch = await researchTopic.findById(req.params.id)
 
    if(topicResearch){
        res.json({
          _id: topicResearch._id,
          topic: topicResearch.topic,
          groupId: topicResearch.groupId,
          supervisor: topicResearch.supervisor,
          coSupervisor: topicResearch.coSupervisor,
          status: topicResearch.status,
        })
         
    }else {
        res.status(404)
        throw new Error('User not found')
    }
 
 })

export { createStudent, getAllTopics, getTopicById, getStudents, createGroup, getGroups, checkStudentinGroup, checkStudentGroup, getTopicByGroup, assignCoSup, getResearchByID, registerTopic };
