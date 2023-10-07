 const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return; // Ignore empty tasks

            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)" class="btn btn-danger">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }

        function removeTask(button) {
            const li = button.parentElement;
            taskList.removeChild(li);
        }
        
    
<button type="button" class="btn btn-dark">Dark</button>
