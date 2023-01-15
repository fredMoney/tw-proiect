const { Sequelize, sequelize } = require('../db')

const Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    repository: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Project;
