class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}.abc`;
  }

  changeName() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new user("jhone", "jhone@gamil.com", "456");
console.log(user1.encryptPassword());
console.log(user1.changeName());

//or we can declare class and also behind the class that is internal implementation

function user3(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user3.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
user3.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};

const user2= new user3("user2", "user2@gmail.com", "123");

console.log(user2.encryptPassword());
console.log(user2.changeName());
