const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.db",
    define: {
        timestamps: false
    }
});

sequelize.sync({alter: true})
    .then(() => {
        console.log("models created");
    })
    .catch((error) => {
        console.warn("error creating models");
        console.warn(error);
    })

module.exports = {
    Sequelize, sequelize
};