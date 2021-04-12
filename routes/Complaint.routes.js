const express = require("express");
const router = express.Router();
const controller = require("../controller/ComplaintController");

router.get("/", (req, res, next) => {
  controller
    .findAll()
    .then((doc) => res.send(doc))
    .catch((err) => res.send({ error: err.message }));
});

router.get("/date", (req, res, next) => {
  const param = req.query.date;
  console.log(param);
  controller
    .findAllBySubmissionDate(param)
    .then((doc) => res.send(doc))
    .catch((err) => res.send({ error: err.message }));
});

router.post("/", (req, res, next) => {
  controller
    .saveComplaint(req.body)
    .then((doc) => res.send(doc))
    .catch((err) => res.send({ error: err.message }));
});

router.delete("/", (req, res, next) => {
  controller
    .deleteComplaint(req.body)
    .then((doc) => res.send(doc))
    .catch((err) => res.send({ error: err.message }));
});

router.put("/", (req, res, next) => {
  controller
    .updateComplaint(req.body)
    .then((doc) => res.send(doc))
    .catch((err) => res.send({ error: err.message }));
});

module.exports = router;
