// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  
 test("check organization", function(){
expect(launchcode.organization).toBe("nonprofit");
});
 test("executive director Jeff", function(){
expect(launchcode.executiveDirector).toBe("Jeff");
});
 test("Percentage of Cool Employees 100", function(){
expect(launchcode.percentageCoolEmployees).toBe(100);
});
 test("ProgramsOffered Should be array", function(){
expect(launchcode.programsOffered).toContain("Web Development")
expect(launchcode.programsOffered).toContain("Data Analysis")
expect(launchcode.programsOffered).toContain("Liftoff")
expect(launchcode.programsOffered.length).toBe(3)
});
 test("launchCode is Passed number divisible by 2 return Launch", function(){
expect(launchcode.launchCode(4)).toBe("Launch")
});
test("launchCode is Passed number divisible by 3 return Code", function(){
  expect(launchcode.launchCode(9)).toBe("Code")
  });
test("launchCode is Passed number divisible by 5 return Rocks", function(){
    expect(launchcode.launchCode(25)).toBe("Rocks")
    });
test("launchCode is Passed number divisible by 2 and 3 return LaunchCode", function(){
      expect(launchcode.launchCode(12)).toBe("LaunchCode!")
});

test("launchCode is Passed number divisible by 3 and 5 return Code Rocks!", function(){
  expect(launchcode.launchCode(15)).toBe("CodeRocks!")
});

test("launchCode is Passed number divisible by 2 and 5 return Launch Rocks!", function(){
  expect(launchcode.launchCode(10)).toBe("LaunchRocks!")
});

test("launchCode is Passed number divisible by 2, 3, and 5 return Launch Code Rocks!", function(){
  expect(launchcode.launchCode(30)).toBe("LaunchCodeRocks!")
});

test("launchCode is Passed number not divisible by 2, 3, or 5 return Rutabagas! That doesn't work.", function(){
  expect(launchcode.launchCode(17)).toBe("Rutabagas! That doesn't work.")
});
});