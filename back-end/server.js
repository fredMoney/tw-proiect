const express = require("express");
const cors = require("cors");
const { Sequelize, sequelize } = require("./db");

const User = require("./models/user.model");
const Bug = require("./models/bug.model");
const Test = require("./models/test.model");
const Project = require("./models/project.model");

const testRouter = require("./routers/test.router");
const bugRouter = require("./routers/bug.router");
const projectRouter = require("./routers/project.router");
const userRouter = require("./routers/user.router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/test-api", testRouter);
app.use("/bug-api", bugRouter);
app.use("/project-api", projectRouter);
app.use("/user-api", userRouter);

app.listen(8080, async () => {
    try {
        await sequelize.authenticate();
        console.warn("connected");
        console.warn("creating test");
        await Test.create({text: "test"});
    } catch(error) {
        console.warn("error occured");
        console.warn(error);
    }
});