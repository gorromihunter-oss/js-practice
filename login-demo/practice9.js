 document.addEventListener('DOMContentLoaded', () => {
            const button = document.querySelector('button');  
            const paragraph = document.querySelector('p');  
            const h1 = document.querySelector('h1');
            const input = document.querySelector('input');
            const passwordInput = document.querySelector('input[type="password"]');
            const checkbox = document.querySelector('#rememberMe');
            button.addEventListener('click',(event) => {
                event.preventDefault(); // Prevent form submission
                setTimeout(() => {
                    button.textContent = 'Login';
                    h1.textContent = 'Welcome to the Dark Mode Page';
                    paragraph.textContent = 'Original text: Click to see';
                }, 1000);
            button.textContent = 'Loading...';
            h1.textContent = 'Logging in...';
            paragraph.textContent = input.value + ' | ' + passwordInput.value + ' | '   + checkbox.checked;
            });
});