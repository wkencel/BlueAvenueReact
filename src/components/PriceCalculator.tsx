'use client'

import React, { useState } from 'react'
import '@/assets/css/styles.css'

export default function PriceCalculator() {
  const [userValues, setUserValues] = useState({
    receptionBandSize: '',
    receptionLength: '',
    cocktailBandSize: '',
    ceremonyBandSize: '',
    distanceFromNYC: '',
  })

  const [results, setResults] = useState({
    receptionCost: '',
    cocktailBandCost: '',
    ceremonyBandCost: '',
    distanceCost: 'N/A',
    lodgingCost: '',
    totalCost: '',
    distanceFromCity: 0,
    isResult: false,
  })

  const [error, setError] = useState('')

  const handleReceptionBandInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserValues({ ...userValues, receptionBandSize: event.target.value })
  }

  const handleReceptionLengthInputChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setUserValues({ ...userValues, receptionLength: event.target.value })

  const handleCocktailBandInputChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setUserValues({ ...userValues, cocktailBandSize: event.target.value })

  const handleCeremonyInputChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setUserValues({ ...userValues, ceremonyBandSize: event.target.value })

  const handleDistanceInputChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setUserValues({ ...userValues, distanceFromNYC: event.target.value })

  const handleSubmitValues = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    calculateResults(userValues)
  }

  const calculateResults = ({
    receptionBandSize,
    receptionLength,
    cocktailBandSize,
    ceremonyBandSize,
    distanceFromNYC,
  }: typeof userValues) => {
    const bandSizeReception = Number(receptionBandSize)
    const lengthOfReception = Number(receptionLength)
    let costOfReception =
      bandSizeReception === 6 ? 8000 : (bandSizeReception - 6) * 1000 + 8000
    let cocktailHrCost = ''
    let ceremonyCost = ''
    let distanceCost: string | number = 'N/A'
    let lodgingCost = ''

    let distNum = distanceFromNYC !== '' ? Number(distanceFromNYC) : 0

    if (distanceFromNYC !== '') {
      if (distNum >= 2.5) {
        distanceCost = distNum * 100 * (bandSizeReception + 1)
      } else if (distNum > 1) {
        distanceCost = distNum * 75 * (bandSizeReception + 1)
      }
    }

    if (distNum > 2) {
      lodgingCost = String(bandSizeReception <= 7 ? 900 : 1150)
    }

    if (ceremonyBandSize) {
      ceremonyCost = String(800 + (Number(ceremonyBandSize) - 1) * 300)
    }

    if (cocktailBandSize) {
      cocktailHrCost = String(700 + (Number(cocktailBandSize) - 1) * 250)
    }

    if (lengthOfReception === 3) {
      costOfReception = costOfReception * 0.95
    }

    if (lengthOfReception === 2) {
      costOfReception = costOfReception * 0.9
    }

    const costDistance = typeof distanceCost === 'string' ? 0 : distanceCost
    const costLodging = Number(lodgingCost)
    const totalCost =
      Number(costOfReception) +
      costLodging +
      Number(costDistance) +
      Number(cocktailHrCost) +
      Number(ceremonyCost)

    const receptionResult = `$${costOfReception} for a ${bandSizeReception} person band for ${lengthOfReception} hours`
    const cocktailHrResult =
      cocktailHrCost === ''
        ? ''
        : `$${cocktailHrCost} for a ${cocktailBandSize} person band`
    const ceremonyResult =
      ceremonyCost === ''
        ? ''
        : `$${ceremonyCost} for a ${ceremonyBandSize} person ensemble & sound`
    const distanceResult =
      distNum === 0 ? 'N/A' : `$${distanceCost} for ${distNum} hours away`
    const lodgingResult =
      lodgingCost === ''
        ? ''
        : `$${lodgingCost} for housing the ${bandSizeReception} band and engineer`
    const totalResult = `$${totalCost}`

    setResults({
      receptionCost: receptionResult,
      cocktailBandCost: cocktailHrResult,
      ceremonyBandCost: ceremonyResult,
      distanceCost: distanceResult,
      lodgingCost: lodgingResult,
      totalCost: totalResult,
      distanceFromCity: distNum,
      isResult: true,
    })
  }

  const clearFields = () => {
    setUserValues({
      receptionBandSize: '',
      receptionLength: '',
      cocktailBandSize: '',
      ceremonyBandSize: '',
      distanceFromNYC: '',
    })
    setResults({
      receptionCost: '',
      cocktailBandCost: '',
      ceremonyBandCost: '',
      distanceCost: 'N/A',
      distanceFromCity: 0,
      lodgingCost: '',
      totalCost: '',
      isResult: false,
    })
  }

  return (
    <div className="calculator">
      <br />
      <div className="form">
        <h3 className="price-calculate-heading">Price Calculator</h3>
        <p className="error">{error}</p>
        <form onSubmit={handleSubmitValues}>
          {!results.isResult ? (
            <div className="calculator-grid-wrapper">
              <div className="reception-inputs">
                <span className="natural-lang">reception: </span>
                <select
                  className="small-dropdown"
                  name="ReceptionBandSize"
                  value={userValues.receptionBandSize}
                  onChange={handleReceptionBandInputChange}
                >
                  <option value="" disabled hidden>Size</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span className="natural-lang"> piece band for a </span>
                <select
                  name="reception-length"
                  className="small-dropdown"
                  value={userValues.receptionLength}
                  onChange={handleReceptionLengthInputChange}
                >
                  <option value="" disabled hidden>Hrs</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                </select>
                <span className="natural-lang"> hour reception</span>
              </div>

              <div className="calculator-grid">
                <div className="reception-inputs-mobile">
                  <label>reception band size</label>
                  <select
                    className="small-dropdown"
                    name="ReceptionBandSize-mobile"
                    value={userValues.receptionBandSize}
                    onChange={handleReceptionBandInputChange}
                  >
                    <option value="" disabled hidden>Size</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                  <label>reception length (hrs)</label>
                  <select
                    name="reception-length-mobile"
                    className="small-dropdown"
                    value={userValues.receptionLength}
                    onChange={handleReceptionLengthInputChange}
                  >
                    <option value="" disabled hidden>Hrs</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                  </select>
                </div>

                <label>cocktail hour band size</label>
                <select
                  className="small-dropdown"
                  name="cocktail-band-size"
                  value={userValues.cocktailBandSize}
                  onChange={handleCocktailBandInputChange}
                >
                  <option value="">N/A</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>

                <label>ceremony band size</label>
                <select
                  className="small-dropdown"
                  name="ceremony-band-size"
                  value={userValues.ceremonyBandSize}
                  onChange={handleCeremonyInputChange}
                >
                  <option value="">N/A</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label>distance from NYC (hrs)</label>
                <select
                  className="small-dropdown"
                  name="distance-from-NYC"
                  value={userValues.distanceFromNYC}
                  onChange={handleDistanceInputChange}
                >
                  <option value="">N/A</option>
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

              <input type="submit" className="button" style={{ marginTop: '0.75rem' }} />
            </div>
          ) : (
            <div className="form-items">
              <h4>
                <br /> Reception Package: {results.receptionCost}
                <br /> Cocktail Hr: {results.cocktailBandCost}
                <br /> Ceremony: {results.ceremonyBandCost}
                <br /> Travel: {results.distanceCost}
                <br /> Lodging: {results.lodgingCost}
                <br /> Total: {results.totalCost}
              </h4>
              <input
                className="button"
                value="Calculate again"
                type="button"
                onClick={clearFields}
              />
            </div>
          )}
        </form>
      </div>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>
        * This is an estimate, destination pricing may vary.
      </p>
    </div>
  )
}
