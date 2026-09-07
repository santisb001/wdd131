//date thing

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©${today.getFullYear()}</span>`;



//last modified thing
document.getElementById("lastModified").textContent = document.lastModified;