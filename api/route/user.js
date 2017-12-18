const express = require('express');
const route = express.Router();
const usersList = [];

function findUserById(id) {
  for (counter = 0; counter < usersList.length; counter++) {
    var _user = usersList[counter];
    if (_user.id == id) {
      return _user;
    }
  }
  return null;
}

route.get('/:id',(request, response, next)=>{
  const id = request.params.id;
          var _user = findUserById(id);

          if (_user) {
            response.status(200).json(_user);
          } else {
            response.status(200).json({
              message: "Not found"
            });
          }

})

function randomID() {
  const _users = usersList;
  const number1 =1;
  const isZeroValue = false;
  const random = Math.floor((Math.random() * 10) + 1);
  if (_users.length == 0){
    return random;
  }
}
  


route.post('/', (request, response, next) => {
  const users = {};

  users.id = randomID();
  users.username = request.body.username;
  users.password = request.body.password;

  usersList.push(users);
  console.log(usersList);

  response.status(201).json(users);
});

module.exports = route;