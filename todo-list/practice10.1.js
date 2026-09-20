const button = document.getElementById('addBtn');
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
  
            function addTask() {                
                const taskText = taskInput.value.trim();

                if(taskText === '') return;

                const listItem = document.createElement('li');

                const text = document.createElement('span');
                text.textContent = taskText;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';

                deleteBtn.addEventListener('click', () => {                
                    listItem.remove();
                });

                listItem.appendChild(text);                            
                listItem.appendChild(deleteBtn);
                taskList.appendChild(listItem);
            
                taskInput.value = '';
                taskInput.focus();
            }

            button.addEventListener('click', (event) => {
                event.preventDefault();
                addTask();
            });
            
        taskInput.addEventListener('keydown', (event) => {
            if (event.key ==='Enter') {
                event.preventDefault();
                addTask();
            }
        });