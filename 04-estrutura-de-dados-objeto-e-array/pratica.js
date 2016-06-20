// ARRAYS
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);
console.log("\n");

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
console.log(doh.toLowerCase());
console.log("\n");

var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);
console.log("\n");

// OBJETOS
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log("\n");

var anObject = {
  left: 1,
  right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
