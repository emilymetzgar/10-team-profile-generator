//tests that access the classes in the utils folder
//gets user input and runs the test that the data is going where it is supposed to

const Manager = require("../utils/manager");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Dillon", 1, "dillon@dillon.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});



test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Dillon", 1, "dillon@dillon.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Dillon", 1, "dillon@dillon.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});