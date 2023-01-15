const { Sequelize, sequelize } = require("../db");

const Test = sequelize.define("test", {
    text: Sequelize.STRING
});

module.exports = Test;