import React, { useState } from 'react';

function PriceCalculator() {
  // state to storage the values given by the user when filling the input fields
  const [userValues, setUserValues] = useState({
    receptionBandSize: '',
    receptionLength: '',
    cocktailBandSize: '',
    ceremonyBandSize: '',
    distanceFromNYC: '',
  });

  // state to storage the results of the calculation
  const [results, setResults] = useState({
    receptionCost: '',
    cocktailBandCost: '',
    ceremonyBandCost: '',
    distanceCost: 'N/A',
    lodgingCost: '',
    totalCost: '',
    distanceFromCity: 0,
    isResult: false,
  });

  // state to storage error message
  const [error, setError] = useState('');

  // event handler to update state when the user enters values

  // const handleInputChange = (event) =>
  //   setUserValues({ ...userValues, [event.target.name]: event.target.value });

  // Note:
  // You can optionally write:
    const handleReceptionBandInputChange = (event) =>{
    setUserValues({ ...userValues, receptionBandSize: event.target.value });
  }

    const handleReceptionLengthInputChange = (event) =>
    setUserValues({ ...userValues, receptionLength: event.target.value });

    const handleCocktailBandInputChange = (event) =>
    setUserValues({ ...userValues, cocktailBandSize: event.target.value });

    const handleCeremonyInputChange = (event) =>
    setUserValues({ ...userValues, ceremonyBandSize: event.target.value });

    const handleDistanceInputChange = (event) =>
    setUserValues({ ...userValues, distanceFromNYC: event.target.value });

  // Manage validations and error messages
  // const isValid = () => {
  //   const { receptionBandSize, receptionLength } = userValues;
  //   let actualError = '';
  //   // Validate if there are values
  //   if (!receptionBandSize || !receptionLength) {
  //     actualError = 'min of 6 person reception band required';
  //   }
  //   if (actualError) {
  //     setError(actualError);
  //     return false;
  //   }
  //   return true;
  // };

  // Handle the data submited - validate inputs and send it as a parameter to the function that calculates the loan
  const handleSubmitValues = (e) => {
    e.preventDefault();
    // if (isValid()) {
      setError('');
      calculateResults(userValues);
    // }
  };

  // Calculation
  const calculateResults = ({ receptionBandSize, receptionLength, cocktailBandSize, ceremonyBandSize, distanceFromNYC }) => {
    const bandSizeReception = Number(receptionBandSize);
    const lengthOfReception = Number(receptionLength);
    let costOfReception = (bandSizeReception === 6) ? 8000 : (bandSizeReception-6) * 1000 + 8000;
    let cocktailHrCost = '';
    let ceremonyCost = '';
    let distanceCost = 'N/A';
    let lodgingCost = '';
    let totalCost = '';
      // distance cost
    if (distanceFromNYC !== '') {
      distanceFromNYC = Number(distanceFromNYC)
      if (distanceFromNYC > 1){
        distanceCost = distanceFromNYC * 75 * (bandSizeReception + 1)
      }
    }
console.log('distancecost', distanceCost)
    if (distanceFromNYC == ''){distanceFromNYC = 0}
    
      // lodging cost
    if (distanceFromNYC > 2) {
      lodgingCost = (receptionBandSize <= 7) ? 750 : 1000
    }

    if (ceremonyBandSize) {
     ceremonyCost = Number(ceremonyBandSize) * 300 + 300
    }

    if (cocktailBandSize) {
      cocktailHrCost = Number(cocktailBandSize) * 300 + 300
     }
      
    if (lengthOfReception === 3) {
      costOfReception = costOfReception * .95
    }

    if (lengthOfReception === 2) {
      costOfReception = costOfReception * .9
    }

    console.log('distance from city', distanceFromNYC)

    // total cost
    let costDistance = distanceCost
    if (typeof distanceCost === 'string'){costDistance = 0}
    let costLodging = Number(lodgingCost)
    totalCost = Number(costOfReception) + costLodging + Number(costDistance) + Number(cocktailHrCost) + Number(ceremonyCost) 
    console.log("hope this works TOTAL COST: ", totalCost)
    // formatting for the user
    let receptionResult = `$${costOfReception} for a ${bandSizeReception} person band for ${lengthOfReception} hours`
    
    let cocktailHrResult = (cocktailHrCost === '') ? '' : `$${cocktailHrCost} for a ${cocktailBandSize} person band`

    let ceremonyResult = (ceremonyCost === '') ? '' : `$${ceremonyCost} for a ${ceremonyBandSize} person ensemble & sound`

    let distanceResult = (distanceFromNYC === 0) ? 'N/A' : `$${distanceCost} for ${distanceFromNYC} hours away`

    let lodgingResult = (lodgingCost === '') ? '' : `$${lodgingCost} for housing the ${bandSizeReception} band and engineer`

    let totalResult = `$${totalCost}`
      // Set up results to the state to be displayed to the user
      setResults({
        receptionCost: receptionResult,
        cocktailBandCost: cocktailHrResult,
        ceremonyBandCost: ceremonyResult,
        distanceCost: distanceResult,
        lodgingCost: lodgingResult,
        totalCost: totalResult,
        distanceFromCity: distanceFromNYC,
        isResult: true,
      });
    // }
    return;
  };

  // Clear input fields
  const clearFields = () => {
    setUserValues({
      receptionBandSize: '',
      receptionLength: '',
      cocktailBandSize: '',
      ceremonyBandSize: '',
      distanceFromNYC: '',
    });

    setResults({
      receptionCost: '',
      cocktailBandCost: '',
      ceremonyBandCost: '',
      distanceCost: 'N/A',
      distanceFromCity: 0,
      lodgingCost: '',
      totalCost: '',
      isResult: false,
    });
  };

  return (
    <div className='calculator'>
    <br />
      <div className='form' >
        <h1>Price Calculator</h1>
        {/* Display the error when it exists */}
        <p className='error'>{error}</p>
        <form onSubmit={handleSubmitValues} >
        
        {/* ternary operator manages when the calculator and results will be displayed to the user */}
        {!results.isResult ? (
          //   Form to collect data from the user
          <div className='form-items'>
            <div className='reception-inputs'>
                <text>reception: </text>
                <select 
                name="ReceptionBandSize" 
                value={userValues.receptionBandSize}
                onChange={handleReceptionBandInputChange}
                >
                  <option value=""> </option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <text> piece band for a </text>
                <select 
                name="reception-length" 
                id="reception-length"
                value={userValues.receptionLength}
                onChange={handleReceptionLengthInputChange}
                >
                  <option value="" > </option>
                  <option value="4" >4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                </select>
                <text> hour reception</text>
              </div>

              <div className='cocktail-hour' >
              <br/>
                <label id='label'>cocktail hour band size </label>
                
              <select 
              name="cocktail-band-size" 
              id="cocktail-band-size"
              value={userValues.cocktailBandSize}
              onChange={handleCocktailBandInputChange}
              >
                <option value="" > </option>
                <option value="4" >4</option>
                <option value="3">3</option>
                <option value="2">2</option>
              </select>
              </div>

                <div className='ceremony' >
                  <br/>
                  <label id='label'>ceremony band size </label>
                  
                  <select 
                  name="ceremony-band-size" 
                  id="ceremony-band-size"
                  value={userValues.CeremonyBandSize}
                  onChange={handleCeremonyInputChange}
                  >
                    <option value="" > </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className='distance' >
                  <br/>
                  <label id='label'>distance from NYC (in hrs) : </label>
                  
                  <select 
                  name="distance-from-NYC" 
                  id="distance-from-NYC"
                  value={userValues.distanceFromNYC}
                  onChange={handleDistanceInputChange}
                  >
                    <option value="" >N/A</option>
                    <option value=".5">.5</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5</option>
                    <option value="4">4</option>
                    <option value="4.5">4.5</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <br/>

                <input type='submit' className='button' />
              </div>
          ) : (
            //   Form to display the results to the user
            <div className='form-items'>
              <h4>
                <br /> Reception Package: {results.receptionCost}
                <br /> Cocktail Hr: {results.cocktailBandCost}
                <br /> Ceremony: {results.ceremonyBandCost}
                <br /> Travel: {results.distanceCost}
                <br /> Lodging: {results.lodgingCost}
                <br /> Total: {results.totalCost}
              </h4>
              {/* Button to clear fields */}
              <input
                className='button'
                value='Calculate again'
                type='button'
                onClick={clearFields}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PriceCalculator;
