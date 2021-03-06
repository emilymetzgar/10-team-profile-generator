//tests that access the classes in the utils folder
//gets user input and runs the test that the data is going where it is supposed to

const Employee = require("../utils/employee");
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});


test("Can set name via constructor arguments", () => {
  const name = "Debbie";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});


test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Debbie", testValue);
  expect(e.id).toBe(testValue);
});


test("Can set email via constructor argument", () => {
  const testValue = "debbie@debbie.com";
  const e = new Employee("Debbie", 1, testValue);
  expect(e.email).toBe(testValue);
});


test("Can get name via getName()", () => {
  const testValue = "Debbie";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});


test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Debbie", testValue);
  expect(e.getId()).toBe(testValue);
});


test("Can get email via getEmail()", () => {
  const testValue = "debbie@debbie.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});


test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Debbie", 1, "debbie@debbie.com");
  expect(e.getRole()).toBe(testValue);
});