const express = require("express");
const Test = require("../models/test.model");

const router = express.Router();

router.get("/tests", async (req, res, next) => {
    try {
        const tests = await Test.findAll();
        res.status(200).json(tests);
    } catch(error) {
        next(error);
    }
});

router.post("/tests", async (req, res, next) => {
    try {
        const tests = await Test.create(req.body);
        res.status(201).json(tests);
    } catch(error) {
        next(error);
    }
});

router.get("/tests/:eid", async (req, res, next) => {
    try {
        const test = await Test.findByPk(req.params.eid);
        if(test) {
            res.status(200).json(test);
        } else {
            res.status(404).json({ message: "not found" });
        }
    } catch(error) {
        console.warn(error);
    }
});

router.put('/tests/:eid', async (req, res, next) => {
    try {
      const test = await Test.findByPk(req.params.eid)
      if (test) {
        await employee.update(req.body, { fields: [ 'text' ] })
        res.status(202).json({ message: 'accepted' })
      } else {
        res.status(404).json({ message: 'not found' })
      }
    } catch (err) {
      next(err)
    }
})

router.delete('/tests/:eid', async (req, res, next) => {
    try {
      const test = await Test.findByPk(req.params.eid)
      if (test) {
        await test.destroy()
        res.status(202).json({ message: 'accepted' })
      } else {
        res.status(404).json({ message: 'not found' })
      }
    } catch (err) {
      next(err)
    }
  })

module.exports = router;
