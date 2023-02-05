// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = ` &copy ${fullName} ${thisYear}`;
footer.appendChild(copyright)
// end Footer

// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"]
const skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")
// console.log(skillsList);
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}
// end Skills

// Messages
const messageForm = document.getElementsByName("leave_message")

document.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;
    // not certain reset is clean, but it worked through testing
    // need test strategy for resetting a nodelist

    //Start message display
    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector("ul")
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a>   <span>${message}</span>`;
    messageList.appendChild(newMessage);
    // console.log(newMessage)
    messageForm[0].reset();
});

// End Messages
