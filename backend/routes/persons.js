const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// get persons
router.get("/", (req, res) => {
  Person.find()
    .then(persons => res.json(persons))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// create person
router.post("/", (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    surname: req.body.surname,
    city: req.body.city,
    address: req.body.address,
    phone: req.body.phone
  });

  if (
    !newPerson.name ||
    !newPerson.surname ||
    !newPerson.city ||
    !newPerson.address ||
    !newPerson.phone
  ) {
    return res.status(400).json({ message: "Please fill in all the fields" });
  }

  newPerson
    .save()
    .then(() => res.json({ newPerson, message: "New person added!" }))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// get specific person
router.get("/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// delete person
router.delete("/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.json("Person deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// update person
router.post("/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      person.name = req.body.name;
      person.surname = req.body.surname;
      person.city = req.body.city;
      person.address = req.body.address;
      person.phone = req.body.phone;

      person
        .save()
        .then(() => res.json("Person updated!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
