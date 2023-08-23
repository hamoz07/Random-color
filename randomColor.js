// the hex code of any color is 6 chars
// 1-9 , A-F

let hexColors = [1, 2, 3, 5, 6, 4, 7, 9, 8, "A", "B", "C", "D", "E", "F"];
let hexLength = 6;
let hexCode = [];

for (let index = 0; index < hexLength; index++) {
  let randomchar = Math.floor(Math.random() * hexColors.length);
  hexCode.push(hexColors[randomchar]);
}

let randomHex = `#${hexCode.join("")}`;

// document.body.append("background color: ", randomHex);
// document.body.style.backgroundColor = randomHex;

// rgb idea
// (r,g,b) --> each part is 3 only with max 255
let rgb = [];
let partLength = 3;

for (let i = 1; i <= partLength; i++) {
  let randomIndex = Math.floor(Math.random() * 256);
  rgb.push(randomIndex.toString()); // Push the converted value as a string
}

// let myBTn = document.querySelector("p");
document.body.append("background color: ", rgb.join(" , "));
document.body.style.backgroundColor = `rgb(${rgb.join(",")})`;
document.body.append(", color: ", randomHex);
document.body.style.color = randomHex;

document.body.append("background color: ", rgb.join(","));
document.body.style.backgroundColor = `rgb(${rgb.join(",")})`;
document.body.append(", color: ", randomHex);
document.body.style.color = randomHex;
