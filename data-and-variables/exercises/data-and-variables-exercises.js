// Declare and assign the variables below
let shuttlename="Determination";
let shuttleSpeedMPH=17500; 
let distancetoMarsKM=225000000;
let distancetoMoonkm=38400;
const milesperKM=.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination")
console.log(typeof 17500)
console.log(typeof 225000000)
console.log(typeof 38400)

// Calculate a space mission below
let milesToMars = distancetoMarsKM * milesperKM;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;
console.log(daysToMars)

// Print the results of the space mission calculations below
console.log("Determination will take 332.67857142857144 days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distancetoMoonkm * milesperKM;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon)

// Print the results of the trip to the moon below
console.log("Determination will take .05677714285714286 days to reach Mars.");