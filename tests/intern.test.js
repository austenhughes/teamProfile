const Intern = require('../lib/intern');

test ("can I set a name with the constructor", () => {
  const name = "austen"
  const x = new Intern(name);
  expect(x.name).toBe(name);
});

test ("can I set an id with the constructor", () => {
  const id = 5
  const x = new Intern("name", id);
  expect(x.id).toBe(id);
});

test ("can I set an email with the constructor", () => {
  const email = "austen.hughes.91@gmail.com"
  const x = new Intern("name", 5, email);
  expect(x.email).toBe(email);
});

test ("can I set a school with the constructor", () => {
    const school = "DU"
    const x = new Intern("name", 5, "email", school);
    expect(x.school).toBe(school);
});