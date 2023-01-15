const express = require("express");
const Bug = require("../models/bug.model");
const Op = Sequelize.Op;

const router = express.Router();

router.get('/bugslist', async (req, res, next) => {
    try {
        const bugs = await Bug.findAll()
        res.status(200).json(bugs)
    } catch (err) {
        next(err)
    }
})

router.post('/bugslist', async (req, res, next) => {
    try {
        const bug = await Bug.create(req.body)
        res.status(201).json(bug)
    } catch (err) {
        next(err)
    }
})

router.get('/bugslist/:eid', async (req, res, next) => {
    try {
        const bug = await Bug.findByPk(req.params.eid)
        if (bug) {
            res.status(200).json(bug)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.put('/bugslist/:eid', async (req, res, next) => {
    try {
        const bug = await Bug.findByPk(req.params.eid)
        if (bug) {
            await bug.update(req.body, { fields: ['project', 'summary', 'IDAsignee', 'severity', 'priority', 'description', 'commitLink'] })
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/bugslist/:eid', async (req, res, next) => {
    try {
        const bug = await Bug.findByPk(req.params.eid)
        if (bug) {
            await bug.destroy()
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.get("/find-bug", async (req, res, next) => {
    try {
        const query = {};
        if(Object.keys(req.query).length !== 0) {
            const summary = req.query;
            query.where = {};
            if(summary) {
                query.where.summary = { [Op.like]: `%${req.query.summary}%` };
            }
        }
        const bugs = await Bug.findAll(query);
        res.status(200).json(bugs);
    } catch(err) {
        console.warn(err);
    }
})

module.exports = router;