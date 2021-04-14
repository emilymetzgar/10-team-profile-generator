//tests that access the classes in the utils folder
//gets user input and runs the test that the data is going where it is supposed to

const Intern = require("../utils/intern")


test("Can set school via constructor argument", () => {
    const testValue = "NMSU";
    const e = new Intern("Jake", 3, "jake@jake.com", testValue);
    expect(e.school).toBe(testValue);
});



test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Jake", 3, "jake@jake.com", "NMSU");
    expect(e.getRole()).toBe(testValue);
});




test("Can get get school from getSchool()", () => {
    const testValue = "NMSU";
    const e = new Intern("Jake", 3, "jake@jake.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});