const Manager = require('../lib/manager');

test ("can I set a name with the constructor", () => {
  const name = "austen"
  const x = new Manager(name);
  expect(x.name).toBe(name);
});

test ("can I set an id with the constructor", () => {
  const id = 5
  const x = new Manager("name", id);
  expect(x.id).toBe(id);
});

test ("can I set an email with the constructor", () => {
  const email = "austen.hughes.91@gmail.com"
  const x = new Manager("name", 5, email);
  expect(x.email).toBe(email);
});

test ("can I set an office # with the constructor", () => {
    const office = 555-555-5555
    const x = new Manager("name", 5, "email", office);
    expect(x.office).toBe(office);
});