"use srict";

// const age = +prompt("How old are you");

// if (age > 25) {
//   console.log("Horror films");
// } else if (age > 18) {
//   console.log("Boyevik films");
// } else {
//   console.log("Cartoons");
// }

// age > 20 ? console.log("Horror films") : console.log("Cartoons");

const colors = prompt("Select  color of traffic light");
switch (colors) {
  case "green":
    console.log("Start");
    break;
  case "yellow":
    console.log("Slowly");
    break;
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("Traffic Jam");
    break;
}
