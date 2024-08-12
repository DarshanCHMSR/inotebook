const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1:Get all the notes using :GET"/api/auth/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
//Route 2:Add a new note using :POST"/api/auth/addnotes".Login required
router.post(
  "/addnotes",
  fetchuser,
  //its is to get and valid the title and description of the note
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast of 5 chacters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are error returns bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //we are getting title, description, tag, and user id 
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      //finally saving the things of user entered
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
module.exports = router;
