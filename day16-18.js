            const factDisplay = document.getElementById('factDisplay');
            const button = document.getElementById("addBtn");
            const taskInput = document.getElementById('taskInput');

            async function addSearch() {
                try{
                    button.textContent = 'Loading...';
                    factDisplay.innerHTML = ''; //clear old result First, every time
                    const ingredient = taskInput.value.trim();
                    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                    if (!response.ok){
                        if (response.status === 401) {
                            throw new Error('issue with Servers');
                        }
                        throw new Error('Issue but not servers');
                    }

                    const data = await response.json();
                    console.log(data);    

                    if (data.meals === null) {
                        factDisplay.textContent = 'No recipies found for that ingredient.';
                    } else {
                        data.meals.forEach(meal => {
                        const listItem = document.createElement('li');                  // create a brand new <li> element
                        listItem.textContent = `${meal.strMeal} - ${meal.strCountry}`;  // put this recipe's name inside it

                        const img = document.createElement('img');                        
                        img.src = meal.strMealThumb;

                        
                        listItem.appendChild(img);                      // put the image inside the list item
                        factDisplay.appendChild(listItem);              // add it to your <ul> (or whatever container)
                    });
                }     
                } catch(error){
                    console.log (error.message);
                    factDisplay.textContent = error.message;
                }

                button.textContent = 'Search';
                taskInput.value = '';
            }

            button.addEventListener('click', event => {
                event.preventDefault();
                addSearch();
            })

            taskInput.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                event.preventDefault();
                addSearch();
                }
            })