const express = require("express");
const User = require("../models/user.model");
const Op = Sequelize.Op;

const router = express.Router();

router.get('/users', async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
})

router.post('/users', async (req, res, next) => {
    console.warn('post');
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
})

router.get('/users/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.put('/users/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            await user.update(req.body, { fields: ["email", "password", "type", "team"] })
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/users/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            await user.destroy()
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
});

router.get("/login", async (req, res, next) => {
    try {
        const query = {};
        if(Object.keys(req.query).length !== 0) {
            const { email, password } = req.query;
            query.where = {};
            if(email) {
                query.where.email = { [Op.gt]: req.query.email };
            }
            if(password) {
                query.where.password = { [Op.gt]: req.query.password };
            }
        }
        const user = await User.findAll(query);
        res.status(200).json(user);
    } catch(err) {
        console.warn(err);
    }
});

module.exports = router;