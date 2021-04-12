const Intern = require("../utils/intern")
const Employee = require("../utils/employee")


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