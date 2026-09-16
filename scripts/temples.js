//date thing

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©${today.getFullYear()}</span>`;



//last modified thing
document.getElementById("lastModified").textContent = document.lastModified;

//Hamburguer menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
