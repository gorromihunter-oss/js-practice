
            const factDisplay = document.getElementById("factDisplay");
            const taskList = document.getElementById("taskList");
            const button1 = document.getElementById("addBtn1");
            const taskInput = document.getElementById('taskInput');
            const factDisplay1 = document.getElementById('factDisplay1')

            function wait(ms) {                                 // "whatever gets passed in, call it ms"
                    return new Promise(resolve => setTimeout(resolve, ms));
                    } 

            async function getUsername(){
                try{                           
                    factDisplay.textContent = 'Loading...';
                    //await wait(1500);                           // ms becomes 1500 for this specific call
                    const username = taskInput.value.trim();
                    const response = await fetch(`https://api.github.com/users/${username}`);
                    
                    if (!response.ok) {
                        throw new Error("Username not found!");                     
                    }

                    const data = await response.json();
                    console.log(data);
                    factDisplay.textContent = `${data.login} has ${data.followers} followers`;

                } catch (error){
                    console.log(error.message);
                    factDisplay.textContent = error.message;
                }
            }

            button1.addEventListener("click", (event => {
            event.preventDefault();
            getUsername();
            }))