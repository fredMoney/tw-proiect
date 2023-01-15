const { Sequelize, sequelize } = require("../db");

const User = sequelize.define("user", {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    team: {
        type: Sequelize.STRING
    }
});

module.exports = User;
