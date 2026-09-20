            const button = document.getElementById("addBtn");
            const taskList = document.getElementById("taskList");
            const factDisplay = document.getElementById("factDisplay");

            async function addTask() {                
                try{
                    button.textContent = 'Loading...';
                    const response = await fetch (`https://dummyjson.com/quotes/random`);
                    if (!response.ok){
                        if(response.status === 401){
                            throw new Error("Issue with Servers");
                            
                        }

                        throw new Error("Issue but not servers");
                    } 

                    const data = await response.json();
                    console.log(data);
                    factDisplay.textContent = `${data.author}: ${data.quote}`;

                } catch(error){
                    console.log(error.message);
                    factDisplay.textContent = error.message;
                }
                button.textContent = "Next";

            }

            button.addEventListener("click", (event => {
                event.preventDefault();
                addTask();
            }))        