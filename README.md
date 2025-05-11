# 🌤️ Weather App by Tanishak

A sleek and simple weather application built using **React** and **Material UI**, leveraging the **OpenWeatherMap API** to fetch real-time weather data based on city input.

---

## 📸 Preview
![alt text](../image.png)


---

## 🚀 Features

- 🔍 Search for any city to get live weather data
- 🌡️ Displays current temperature, min/max temps, humidity, and "feels like"
- ☀️ Dynamic icons and background images based on weather conditions
- ⚛️ Built with React functional components and hooks
- 🎨 Stylish UI powered by Material UI

---

## 🛠️ Tech Stack

- **Frontend**: React, Material UI
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

---

## 🧰 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Get your OpenWeatherMap API key**
    ```bash
    API_KEY=your_api_key_here
    ```
4. **Run the app**
    ```bash
    npm start
    ```
## 🧪 Folder Structure
    ```bash
    src/
│
├── WeatherApp.js       # Main component
├── SearchBox.js        # City search input and submit
├── InfoBox.js          # Weather information display
├── WeatherApp.css
├── SearchBox.css
├── infoBox.css
```
## 📌 Notes
Currently uses a hardcoded API key (49a01e2524127f2d6bd278de8f697e22) — for production, always use environment variables.

Default city shown on load is London.

Error handling is basic and could be improved (e.g., network failures, invalid responses).
