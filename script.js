// current time 
const clock = document.getElementById("now");
const currentTime = new Date();
clock.innerHTML= currentTime;
const formBox = document.getElementById("formBox");
// create task form generation
 function createTask() {
  // define title for task/Event 
 const title= document.getElementById(" ").value;
            const taskForm= document.createElement('form');
            taskForm.innerHTML = `
            <h5 class="appointmentTitle">${title}</h5>
             <label><input type="text" class="taskNotes">Add Note</label>
             <label><input type="date" class="deadLine"> Add Deadline</label>
                <button onclick="addTask(this)" class="btn btn-success">Add To Calendar</button>
                <button onclick="remove(this)" class="btn btn-danger">Cancel</button>
            `;
           formBox.appendChild(form);
            }
//create event form generation
function createEvent() {
 // define title for task/Event 
const title= document.getElementById(" ").value;
            const eventForm= document.createElement('form');
            eventForm.innerHTML = `
            <h5 class="appointmentTitle">${title}</h5>
             <label><input type="text" class="eventNotes">Add Note</label>
             <label>Begins<input type="date" class="eventStart"></label>
             <label>Ends<input type="date" class="eventEnd"></label>
                <button onclick="addEvent(this)" class="btn btn-success">Add To Calendar</button>
                <button onclick="remove(this)" class="btn btn-danger">Cancel</button>
            `;
           formBox.appendChild(form);
            }
  function remove(button) {
            const form = button.parentElement;
            formBox.removeChild(form);
        }
//process task form 
function addTask(){
 const title= document.querySelector(".appointmentTitle").innerText;
 const taskNotes = document.querySelector(".taskNotes").value;
 const deadLine = document.querySelector(".deadLine").value;
 const form = document.querySelector("form");
 formBox.removeChild(form);

}
//process event form 
function addEvent(){
 const title= document.querySelector(".appointmentTitle").innerText;
 const taskNotes = document.querySelector(".taskNotes").value;
const form = document.querySelector("form");
 formBox.removeChild(form);
 
}

const isDark= false;
function colorMode(){ 
var htmlTag = document.documentElement;
if (isDark) { htmlTag.setAttribute("data-bs-theme", "light");
             isDark= false; } 
else { htmlTag.setAttribute("data-bs-theme", "dark");
        isDark = true; }
}


