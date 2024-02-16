//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    averageScore() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum/this.scores.length)/10;
    }

    crewStatus() {
       let avg = this.averageScore();
       if (avg >= 90) {
        return "Accepted";
       } else if (avg >= 80) {
        return "Reserved";
       } else if (avg >= 70) {
        return "Probationary";
       } else {
        return "Rejected";
       }
    }
}

let BubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
console.log(BubbaBear);

let MerryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
console.log(MerryMaltese);

let GladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(GladGator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

BubbaBear.addScore(83);
console.log(BubbaBear.scores);
console.log(MerryMaltese.averageScore());

let candidates = [BubbaBear, MerryMaltese, GladGator];
for (let i = 0; i < candidates.length; i++)
console.log(`'\n${candidates[i].name} earned an average test score of ${candidates[i].averageScore()}% and has a status of ${candidates[i].crewStatus()}.'.`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.let reserveCount = 0
while (GladGator.crewStatus() !== "Reserve") {
    GladGator.addScore(100);
    reserveCount++;
}

console.log(`\nIt took ${reserveCount} perfect scores to get Glad Gator up to Reserve status!`);

let acceptedCount = 0
while (GladGator.crewStatus() !== "Accepted") {
    GladGator.addScore(100);
    acceptedCount++;
}

console.log(`\nIt took ${acceptedCount} perfect scores to get Glad Gator up to Accepted status!`)