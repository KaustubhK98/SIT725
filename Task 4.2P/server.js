const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);

const Project1 = new Project({
    title: "Kitten 2",
    image: "kitten 2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
});
Project1.save().then(() => console.log("Sample project saved!"));

const Project2 = new Project({
    title: "Kitten 3",
    image: "kitten 3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
});
Project2.save().then(() => console.log("Sample project saved!"));

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
    console.log("App listening to: " + port)
})

