const Project = require('../models/project');

exports.getAllProjects = async () => {
    try {
        const projects = await Project.find({});
        return projects;
    } catch (error) {
        throw new Error("Error retrieving projects");
    }
};
