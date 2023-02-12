// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");
let image = document.createElement("img");
image.src = "/img/codelogo_v2.svg"

copyright.innerHTML = `&copy ${fullName} ${thisYear}`;
footer.appendChild(image)
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
const messageSection = document.getElementById("messages");
const messageHeader = messageSection.querySelector("h2");
console.log("messageList is " + messageHeader)



document.addEventListener("submit", function(event) {
    event.preventDefault();
    //hideMessageHeader()
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;

    //Start message display
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${message}</span>  `;

    // Remove button (to remove message display)
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "remove"; 
    removeButton.addEventListener("click", () => {
        // const entry = event.target.parentElement;
        // entry.remove();
        // below works as streamlined code
        newMessage.remove();
    });
    // Make the button
    const editButton = document.createElement("button")
    editButton.innerHTML = "edit";

    editButton.addEventListener("click", () => {
        let editPrompt = prompt("What edit would you like to make? ", `${message}`)
        //const entry = event.target.parentElement;
        //entry.remove();
        // below works as streamlined code
        newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${editPrompt}</span>  `;
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
    });

    //functionality to add the removeButton, newMessage, and reset the form
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});
    // End Messages
