const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

router.get('/',(request, response, next)=>{
  User.find()
  .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0) {
        response.status(200).json(docs);
      } else {
        response.status(404).json({
          message: 'No data'
        });
      }

    })
  .catch(()=>{
    console.log("Something wrong! GET/user");
  });

});

router.get('/:userId',(request, response, next)=>{
  var id = request.params.userId;

  User.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        response.status(200).json(doc);
      } else {
        response.status(404).json({ message: "No valide entry found" });
      }
    })
    .catch(err => {
      console.log(err);
      response.status(500).json({ error: err });
    });
  
});

router.post('/', (request, response, next) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username:request.body.username,
      password:request.body.password
    });
    user.save()
    .then(()=>{
      console.log("Sucessfuly save data in database");
    })
    .catch(()=>{
      console.log("Error: data not save ");
    });
});

router.post('/:userId', (request, response, next) => {
  var id = request.params.userId;

});

router.patch('/', (request, response, next) => {

});

router.patch('/:userId', (request, response, next) => {
  var id = request.params.userId;

});

router.delete('/', (request, response, next) => {

});

router.delete('/:userId', (request, response, next) => {
  var id = request.params.userId;

});

module.exports = router;