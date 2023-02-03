let today = new Date();
let thisYear = today.getFullYear();
// console.log(thisYear);
const fullName = "Greg Curl";
const footer = document.querySelector("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `${fullName} ${thisYear} & copy`;
// console.log(copyright);
footer.appendChild(copyright)

