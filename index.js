const express = require("express");
const Project = require("./dbconn/connection");
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json()); // For parsing application/json

const port = 5000;

// POST route to add a new project
app.post("/", async (req, res) => {
    const myProject = new Project(req.body);
    try {
        const dataSave = await myProject.save();
        res.status(201).send(dataSave);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put("/projects/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get("/projects/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send('प्रोजेक्ट नहीं मिला');
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});
// GET route to fetch all projects
// Express सर्वर कोड
app.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
