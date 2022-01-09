const createUser = ({ firstName, lastName, eMail }) => ({
  firstName,
  lastName,
  eMail,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  eMail: "johndoe@mail.com",
});

console.log(user1.fullName());
