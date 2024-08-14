import React, { useState, useEffect } from 'react';
import { getIndicatorsByCountry } from './services/tradingEconomicsService';
import './App.css';

const ComparisonTable = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false)
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [data, setData] = useState({});
  const categories = [
    "GDP",
    "GDP Growth Rate",
    "GDP per Capita",
    "Inflation Rate",
    "Unemployment Rate",
    "Consumer Price Index CPI",
    "Interest Rate",
    "Balance of Trade",
    "Current Account",
    "Government Debt to GDP",
    "Government Budget Deficit/Surplus",
    "Foreign Direct Investment",
    "Foreign Exchange Reserves",
    "Labor Force Participation Rate",
    "Retail Sales YoY",
    "Industrial Production",
    "Business Confidence",
    "Consumer Confidence",
    "Gross Fixed Capital Formation",
    "Productivity"
];

  useEffect(() => {
   
    const fetchData = async () => {
      const newData = {};
      for (const country of selectedCountries) {
       const indicators = await getIndicatorsByCountry(country);
        const governmentRevenues = indicators.find(indicator => indicator.Category === "Government Revenues");
        const governmentSpending = indicators.find(indicator => indicator.Category === "Government Spending");
        if (governmentRevenues && governmentSpending) {
          const deficitSurplus = governmentRevenues.LatestValue - governmentSpending.LatestValue;
          indicators.push({
            Category: "Government Budget Deficit/Surplus",
            LatestValue: deficitSurplus,
            Unit: governmentRevenues.Unit 
          });
        }
        newData[country] = indicators;
      }
     
      setData(newData);
      
    };

    if (selectedCountries.length > 0) {
      fetchData();
    }
  }, [selectedCountries]);

  const handleCountrySelect = (event) => {
    if(event.target.value === "") {
      return;
    }
    setIsDisabled(true);
    setAdditionalInfo("Select Another Country To Compare")
    const country = event.target.value;
    
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const removeCountry = (index) => {
    setSelectedCountries(selectedCountries.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className='headerTitle'>Country Comparison</h2>
     
      <select className='selectBtn' onChange={handleCountrySelect}>
        <option disabled={isDisabled} defaultChecked  value="">Select a Country</option>
        <option value="mexico">Mexico</option>
        <option value="new zealand">New Zealand</option>
        <option value="sweden">Sweden</option>
        <option value="thailand">Thailand</option>
      </select>
      <p className='additionalInfo'>{additionalInfo}</p>
      <div className='tableContainer'>
        {selectedCountries.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                {selectedCountries.map((country, index) => (
                  <th className='relative' key={country}>
                    {country}
                    <button className='removeBtn' onClick={() => removeCountry(index)}>Remove Country</button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{category}</td>
                  {selectedCountries.map(country => {

                    const indicator = data[country]?.find(item => item.Category === category);
                    const value = indicator?.LatestValue || 'Loading...';
                    const unit = indicator?.Unit || '';

                    return (
                      <td key={country}>
                        {value}
                        {unit === '%' 
                          ? '%' 
                          : unit !== 'points' 
                            ? ` (${unit})` 
                            : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ComparisonTable;
