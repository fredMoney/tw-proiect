const { Sequelize, sequelize } = require('../db')

const Bug = sequelize.define('bug', {
    project: {
        type: Sequelize.STRING,
        allowNull: false
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IDAsignee: {
        type: Sequelize.STRING,
        allowNull: true
    },
    severity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    commitLink: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Bug;