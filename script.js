// current time 
const clock = document.getElementById("now");
const currentTime = new Date();
clock.innerHTML= currentTime;
const title= document.getElementById("appointmentTitle").value;
// create task form generation
 function createTask() {
  // define title for task/Event 
            const parentElement = document.createElement("div");
  const newChildElement = document.createElement("form");
            newChildElement.innerHTML = `
            <h5 class="appointmentTitle">${title}</h5>
             <label><input type="text" class="taskNotes">Add Note</label>
             <label><input type="date" class="deadLine"> Add Deadline</label>
                <button onclick="addTask(this)" class="btn btn-success">Add To Calendar</button>
                <button onclick="remove(this)" class="btn btn-danger">Cancel</button>
            `;
           parentElement.appendChild(newChildElement);

  const existingParent = document.getElementById("formBox");
  existingParent.appendChild(parentElement);
            }
//create event form generation
function createEvent() {
 // define title for task/Event 

            const parentElement2 = document.createElement("div");
  const newChildElement2 = document.createElement("form");
            newChildElement2.innerHTML = `
            <h5 class="appointmentTitle">${title}</h5>
             <label><input type="text" class="eventNotes">Add Note</label>
             <label>Begins<input type="date" class="eventStart"></label>
             <label>Ends<input type="date" class="eventEnd"></label>
                <button onclick="addEvent(this)" class="btn btn-success">Add To Calendar</button>
                <button onclick="remove(this)" class="btn btn-danger">Cancel</button>
            `;
           parentElement2.appendChild(newChildElement2);
 const existingParent2 = document.getElementById("formBox");
  existingParent2.appendChild(parentElement2);
            }
 
            
  function remove(button) {
            const form = button.newChildElement;
            parentElement.removeChild(form);
        }
//process task form 
function addTask(){
 const taskNotes = document.querySelector(".taskNotes").value;
 const deadLine = document.querySelector(".deadLine").value;
 const form = document.querySelector("form");
 formBox.removeChild(form);

}
//process event form 
function addEvent(){
 const taskNotes = document.querySelector(".taskNotes").value;
const form = document.querySelector("form");
 formBox.removeChild(form);
 
}
const colorMode = document.getElementById("colorMode");
const isDark= false;
colorMode.addEventListener= ("change", function(event){ 
var htmlTag = document.documentElement;
if (isDark) { htmlTag.setAttribute("data-bs-theme", "light");
             isDark= false; } 
else { htmlTag.setAttribute("data-bs-theme", "dark");
        isDark = true; }
});


