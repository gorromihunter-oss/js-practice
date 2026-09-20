# Weather App

Type a city name and get its current temperature and country.

## Built with
- HTML
- CSS
- JavaScript (fetch, async/await)

## What I practiced
- Using an API that requires a personal API key
- Building a dynamic fetch URL combining user input and a key
- Handling a specific error status (401 for an inactive/invalid key) separately from a generic error (city not found)
- Reading nested data from a response (`data.main.temp`, `data.sys.country`)
- Enter-key support alongside a click handler

## How to run
Open the HTML file, type a real city name, and press Search or Enter.
Note: requires a free API key from openweathermap.org, added where it says `YOUR_API_KEY_HERE` in the script.