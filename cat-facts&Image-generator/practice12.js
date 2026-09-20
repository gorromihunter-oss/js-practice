            const button = document.getElementById('addBtn');
            const factDisplay = document.getElementById('factDisplay');
            const button1 = document.getElementById('addBtn1');
            const image = document.getElementById('Image');
                       
            async function getFact() {
                const response = await fetch('https://catfact.ninja/fact');
                const data = await response.json();
                console.log(response);
                console.log(data);
                factDisplay.textContent = data.fact ;
            }

            function getImage() {
                button1.textContent = 'Loading...';
                image.src = 'https://picsum.photos/200/300?random=' + Date.now();
                button1.textContent = 'New Image';
            }
            
            button.addEventListener('click', (event) => {
                event.preventDefault();
                getFact();

            });
            button1.addEventListener('click', (event) => {
                event.preventDefault();
                getImage();
            });               