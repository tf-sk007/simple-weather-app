async function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("result").innerHTML = "Enter a city!";
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        document.getElementById("result").innerHTML = "⏳ Loading...";

        const response = await fetch(url);
        const data = await response.json();

        const temp = data.current_condition[0].temp_C;
        const humidity = data.current_condition[0].humidity;
        const weather = data.current_condition[0].weatherDesc[0].value;
        const wind = data.current_condition[0].windspeedKmph;

        document.getElementById("result").innerHTML = `
            <h2>${city}</h2>
            <p>🌡 ${temp} °C</p>
            <p>☁ ${weather}</p>
            <p>💧 Humidity: ${humidity}%</p>
            <p>🌬 Wind: ${wind} km/h</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error!";
    }
}