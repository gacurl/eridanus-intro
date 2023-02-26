// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"];
const skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
// console.log(skillsList);

skills.forEach(skill => {
    let listItem = document.createElement("li");
    listItem.innerText = skill;
    skillsList.appendChild(listItem);
});
// for (let i = 0; i < skills.length; i++) {
//     let skill = document.createElement("li");
//     skill.innerText = `${skills[i]}`;
//     skillsList.appendChild(skill);
// }
// end Skills

// Messages
const messageForm = document.getElementsByName("leave_message");
const messageSection = document.getElementById("messages");
const messageHeader = messageSection.querySelector("h2");
// console.log("messageList is " + messageHeader);
// hide the messages button
messageHeader.style.display = "none";

document.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;
    messageHeader.style.display = "inherit";
    //Start message display
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${message}</span>  `;

    // Remove button (to remove message display)
    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"; 
    removeButton.addEventListener("click", () => {
        // const entry = event.target.parentElement;
        // entry.remove();
        // below works as streamlined code
        newMessage.remove();
        messageHeader.style.display = "none";
    });
    // Make the button
    const editButton = document.createElement("button");
    editButton.innerText = "edit";

    editButton.addEventListener("click", () => {
        let editPrompt = prompt("What edit would you like to make? ", `${message}`)
        //const entry = event.target.parentElement;
        //entry.remove();
        // below works as streamlined code
        newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${editPrompt}</span>  `;
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);
    });

    //functionality to add the removeButton, newMessage, and reset the form
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});
// End Messages

// Fetch GH repos

const projectSection = document.getElementById("projects");
let projectList = projectSection.querySelector("ul");

fetch('https://api.github.com/users/gacurl/repos', {
    mode: 'cors'
})
.then(function (response) {
    return response.json();
})
.then(function (response) {
    // console.log("this response is from fetch block: " + response[0].name);
    for (let i = 0; i < response.length; i++) {
        // console.log(repositories[i].name)
        let project = document.createElement("li");
        project.innerText = response[i].name;
        projectList.appendChild(project)
    }
});
// End Fetch GH repos

// Footer
const renderFooter = () => {
    const fullName = "Greg Curl";
    const footer = document.querySelector("footer");
    // generate year for copyright
    let today = new Date();
    let thisYear = today.getFullYear();
    // create DOM elements
    const footerDiv = document.createElement("div");
    let copyright = document.createElement("p");
    let image = document.createElement("img");
    // image source
    image.src = "img/logo_v2.svg"

    footerDiv.classList.add('footerDiv');
    copyright.innerText = `\u00A9 ${fullName} ${thisYear}`;
    footer.appendChild(footerDiv).appendChild(image);
    footer.appendChild(footerDiv).appendChild(copyright);
};

renderFooter();
// End footer








// console.log("copyright is: " + copyright);
// console.log(image.src)
// footer.appendChild(image)
// footer.appendChild(copyright)
// end Footer
//   const renderCopyright = () => {

//       // DOM selection
//       const copyright = document.querySelector('#copyright')

//       // DOM manipulation (modify)
//       copyright.innerHTML = `&copy; Elliot Thompson ${thisYear}`
//   }