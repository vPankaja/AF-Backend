import express from 'express';
import asyncHandler from "express-async-handler";
import fs from 'fs';
import Document from '../models/documentSaveModel.js'

// Save the upload in database
const saveDocInDB = asyncHandler(async (req, res) => {
    const {
        groupName,
        researchName,
        documentName,
        attachment
    } = req.body;

    const newDoc = new Document({
        groupName,
        researchName,
        documentName,
        attachment
    });

    newDoc.save()
    .then(() => {
        res.json("Doc created");
    })
    .catch((err) => {
        console.log(err);
      });
})

export { saveDocInDB };