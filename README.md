# Country Economic Indicators Comparison

This React application allows users to compare key economic indicators between different countries. It fetches data from the Trading Economics API and displays the selected indicators in a comparison table. Users can select multiple countries to compare and view their respective economic statistics.

## Features

- **Country Selection**: Users can select countries from a dropdown menu to compare their economic indicators.
- **Dynamic Data Fetching**: Economic data is fetched dynamically from the Trading Economics API when a country is selected.
- **Custom Calculations**: The application includes a custom calculation for the "Government Budget Deficit/Surplus," which is computed as the difference between "Government Revenues" and "Government Spending."
- **Unit Handling**: The app displays units for each economic indicator, including handling special cases like percentages.
- **Country Removal**: Users can remove a selected country from the comparison table.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/country-economic-comparison.git
cd country-economic-comparison

```
### Installing Dependencies 
Using NPM

```bash
npm install
```

Using Yarn

```bash
yarn install
```

### Running the Application

Using NPM
```bash
npm start
```

Using Yarn
``` bash
yarn start
```
The application will be available at http://localhost:3000. (If the port is not already in use.)

## Usage

**Select Countries:** Choose one or more countries from the dropdown menu.
**View Comparison:** The selected countries' economic indicators will be displayed in a table.
**Remove Countries:** Click the "Remove" button next to a country to remove it from the comparison.

### Code Structure
**src/:** Contains the main application code.
**services/:** Contains the API service for fetching economic data from the Trading Economics API.
**components/:** Contains React components used in the application.
**App.js:** The main application component.
**App.css:** Styling for the application.

## API Integration

The application uses the Trading Economics API to fetch economic data. Ensure you have an API key and replace the placeholder API key in tradingEconomicsService.js with your actual key:

```javascript

const API_KEY = 'your_api_key_here';
```

## Custom Calculation: Government Budget Deficit/Surplus

The "Government Budget Deficit/Surplus" indicator is computed as:

```
Government Budget Deficit/Surplus = Government Revenues - Government Spending
```

This calculation is performed within the fetchData function in ComparisonTable.js.

## Future Enhancements

**Additional Indicators:** Add more economic indicators for comparison.
**Improved UI/UX:** Enhance the user interface for better usability.
**Persistent Selection:** Implement persistent storage for selected countries using local storage or a database.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

# Contact
For any questions or feedback, please contact josephetim211@gmail.com.

