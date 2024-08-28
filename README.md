# Weather App

## Description

The Weather App is a web application that allows users to check the current weather conditions based on a ZIP code. It uses the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface. The app shows temperature, weather description, and an icon representing the weather conditions.

## Features

- **Fetch Weather Data**: Get current weather details based on ZIP code.
- **Display Weather Information**: Shows city name, temperature, weather description, and an icon.
- **User Feelings**: Allows users to enter and save their personal feelings about the weather.
- **Responsive Design**: Optimized for various screen sizes.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/raneen-jubahi/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up API Key**:
   - Replace `a51fa5667c8e8b13d162662e81e843f2` in `website/page.js` with your actual OpenWeatherMap API key.

### Running the Application

1. **Start the server**:

    ```bash
    npm start
    ```

2. **Access the app**:
   - Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. **Enter ZIP Code**: Input a valid ZIP code in the provided field.
2. **Fetch Weather**: Click the "Get Weather" button to retrieve the weather information.
3. **Add Feelings**: Optionally, enter your feelings about the weather and click "Save Feelings" to display them.

## Project Structure

- `public/`: Contains the HTML, CSS, and JavaScript files.
  - `index.html`: The main HTML file.
  - `styles.css`: The stylesheet for styling the app.
  - `page.js`: JavaScript file handling the weather API interactions and UI updates.
- `server.js`: The server-side script to serve static files using Express.
- `package.json`: Contains project metadata and dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://api.openweathermap.org/data/2.5/weather?zip=) for providing the weather API.
- [Unsplash](https://unsplash.com/) for providing free weather-related background images.

---

Feel free to contribute to this project by submitting issues or pull requests. For any questions or support, please contact [raneenziyad91@gmail.com](mailto:raneenziyad91@gmail.com).
