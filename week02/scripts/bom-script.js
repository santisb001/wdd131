const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);
//You "listen" (wait) for the user to make a click
button.addEventListener("click",function(){
//check if the user actually entered something
if (input.value.trim() !== ''){
    const li = document.createElement('li');
    li.textContent = input.value;
    //Create a delete button for the li element
    deleteButton.addEventListener("click", function(){
    list.removeChild(li);
    input.focus();
});
//Add the button to the list
li.appendChild(deleteButton);
list.appendChild(li);
//Clear the user input field
input.value = "";
}
input.focus();
});



