const apiKey = "08d65bf4fc57adb38b01ea8c3979ffca";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText = `Condition: ${data.weather[0].main}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;

            const iconCode = data.weather[0].icon;
            document.getElementById("icon").src =
                `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        })
        .catch(() => {
            alert("City not found");
        });
}
