
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees:100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchCode: function (num){
if ((num % 3===0) && (num % 5===0) && (num % 2===0)) { 
return "LaunchCodeRocks!"}

if ((num % 3===0) && (num % 5===0)) { 
return "CodeRocks!"}

if ((num % 2===0) && (num % 5===0)) { 
    return "LaunchRocks!"}

if ((num % 2===0) && (num % 3===0)) { 
return "LaunchCode!"}
        
if (num % 2===0){ 
return "Launch"}
   
if (num % 3===0){ 
return "Code"};
       
if (num % 5===0){ 
return "Rocks"}

if ((!num % 3===0) && (!num % 5===0) && (!num % 2===0)) { 
    return "Rutabagas! That doesn't work."}

}};

module.exports = launchcode;

