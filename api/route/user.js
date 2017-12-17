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

route.post('/', (request, response, next) => {
  const users = {};

  users.id = usersList.length + 1;
  users.username = request.body.username;
  users.password = request.body.password;

  usersList.push(users);
  console.log(usersList);

  response.status(201).json(users);
});

module.exports = route;