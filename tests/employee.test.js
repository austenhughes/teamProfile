const Employee = require('../lib/employee');

test ("can I set a name with the constructor", () => {
  const name = "austen"
  const x = new Employee(name);
  expect(x.name).toBe(name);
});

test ("can I set an id with the constructor", () => {
  const id = 5
  const x = new Employee("name", id);
  expect(x.id).toBe(id);
});

test ("can I set an email with the constructor", () => {
  const email = "austen.hughes.91@gmail.com"
  const x = new Employee("name", 5, email);
  expect(x.email).toBe(email);
});