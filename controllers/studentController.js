import express from "express";

import StudentGroup from "../models/studentGroupModel.js";
import researchTopic from "../models/researchTopicModel.js";
import User from "../models/userModel.js";

import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateTokens.js'

const router = express.Router();

// Register Student
const createStudent = asyncHandler(async (req, res) => {
  const { name, nic, gender, contactNo, email, password } = req.body

  const userExists = await User.findOne({ email })

  if(userExists) {
      res.status(400)
      throw new Error('Student already exists')
  }

  const type = "STUDENT";

  const user = await User.create({
      name,
      nic,
      gender,
      contactNo,
      email,
      password,
      type
  })

  if(user) {
      res.status(201).json({
       _id: user._id,
       name: user.name,
       nic: user.nic,
       gender: user.gender,
       contactNo: user.contactNo,
       email: user.email,
       type: user.type,
       token: generateToken(user._id),
      })
  } else {
      res.status(400)
      throw new Error('Invalid user data')
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
  const studentEmail = req.params.email;

  const studGroup1 = await StudentGroup.findOne({ member1: studentEmail });
  const studGroup2 = await StudentGroup.findOne({ member2: studentEmail });
  const studGroup3 = await StudentGroup.findOne({ member3: studentEmail });
  const studGroup4 = await StudentGroup.findOne({ member4: studentEmail });

  if (studGroup1 || studGroup2 || studGroup3 || studGroup4) {
    res.json({
      available: false,
    });
  }
});

// Register research topic
const registerTopic = asyncHandler(async (req, res) => {
  const topic = req.body.topic;
  const groupId = req.body.groupId;
  const supervisor = req.body.supervisor;
  const status = false;

  const topicResearch = new researchTopic({
    topic,
    groupId,
    supervisor,
    status,
  });

  topicResearch
    .save()
    .then(() => {
      res.json("Topic requested");
    })
    .catch((err) => {
      console.log(err);
    });
});

export { createStudent, getStudents, createGroup, getGroups, checkStudentinGroup, registerTopic };
