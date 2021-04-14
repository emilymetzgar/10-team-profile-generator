//tests that access the classes in the utils folder
//gets user input and runs the test that the data is going where it is supposed to

const Engineer = require("../utils/engineer")


test("Can set GitHub via constructor argument", () => {
    const testValue = "em12345";
    const e = new Engineer("Emily", 2, "emily@emily.com", testValue);
    expect(e.GitHub).toBe(testValue);
});



test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Emily", 2, "emily@emily.com", "em12345");
    expect(e.getRole()).toBe(testValue);
});




test("Cen get GitHub username from getGitHub", () => {
    const testValue = "em12345";
    const e = new Engineer("Emily", 2, "emily@emily.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});
