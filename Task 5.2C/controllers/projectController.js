const projectService = require('../services/projectService');

exports.getHomePage = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.render('index', { projects });
    } catch (error) {
        console.error("Error fetching projects: ", error);
        res.status(500).send("Internal Server Error");
    }
};
