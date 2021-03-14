const Engineer = require('../lib/engineer');

test ("can I set a name with the constructor", () => {
  const name = "austen"
  const x = new Engineer(name);
  expect(x.name).toBe(name);
});

test ("can I set an id with the constructor", () => {
  const id = 5
  const x = new Engineer("name", id);
  expect(x.id).toBe(id);
});

test ("can I set an email with the constructor", () => {
  const email = "austen.hughes.91@gmail.com"
  const x = new Engineer("name", 5, email);
  expect(x.email).toBe(email);
});

test ("can I set a github profile with the constructor", () => {
    const github = "https://github.com/austenhughes"
    const x = new Engineer("name", 5, "email", github);
    expect(x.github).toBe(github);
});