const router = require("express").Router();

// root directory for /api
router.get("/", (req, res) => {
  console.log("we have been hit!");
  res.json({
    msg: "success",
    status: 200,
    data: { user: "Thomas", title: "Instructor" },
  });
});

// route for '/api/isActive'
router.get("/isActive", (req, res) => {
  console.log("we have been hit!");
  res.json({
    msg: "success",
    status: 200,
    data: { active: true },
  });
});

// accepts an id and includes the passed in id in the response object
router.put("/putexample", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  res.json({
    msg: "success",
    status: 200,
    data: { id: id },
  });
});

// looks for everything after ? in the URL
router.post("/queryString", (req, res) => {
  console.log(req.params);
  res.json(req.query);
});

// looks for everything after /parameter and adds it to an object ex
router.patch("/parameter/:id/:name", (req, res) => {
  console.log(req.params);
  res.json({ msg: "success" });
});

module.exports = router;