const file = require('fs')

function User(name, age, els) {
  this.name = name;
  this.age = age;
  this.els = els;
  this.json = JSON.stringify(this);
}

let allUser = new Array();
allUser.push(new User("사나이", 15000, 3).json)
allUser.push(new User("울지마라", 150, 3).json)
allUser.push(new User("바보냐", 10, 2).json)

file.writeFile("test.json", "[" + allUser.toString() + "]", 'utf-8', (e) => { });