import React, { useEffect, useState } from 'react'

export default function TemperatureConverter(props) {
    useEffect(() => {
        props.showLoading();
    }, [])

    const [firstChoice, setFirstChoice] = useState("");
    const [secondChoice, setSecondChoice] = useState("");
    const [inputTemperature, setInputTemperature] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        convertTemperature();
    }, [inputTemperature, firstChoice, secondChoice])

    const convertTemperature = () => {
        if (inputTemperature === "") { setResult("") }
        else if (firstChoice === "Celsius") {
            if (secondChoice === "Celsius") { setResult(inputTemperature) }
            else if (secondChoice === "Fahrenheit") { setResult((inputTemperature * 9 / 5) + 32) }
            else if (secondChoice === "Kelvin") { setResult(parseFloat(inputTemperature) + 273.15) }
        }
        else if (firstChoice === "Fahrenheit") {
            if (secondChoice === "Celsius") { setResult(((inputTemperature - 32) * 5 / 9).toFixed(3)) }
            else if (secondChoice === "Fahrenheit") { setResult(inputTemperature) }
            else if (secondChoice === "Kelvin") { setResult(((inputTemperature - 32) * 5 / 9 + 273.15).toFixed(3)) }
        }
        else if (firstChoice === "Kelvin") {
            if (secondChoice === "Celsius") { setResult((inputTemperature - 273.15).toFixed(2)) }
            else if (secondChoice === "Fahrenheit") { setResult(((inputTemperature - 273.15) * 9 / 5 + 32).toFixed(3)) }
            else if (secondChoice === "Kelvin") { setResult(inputTemperature) }
        }
    }
    return (
        !props.loading && <div className="container">
            <h1>Temperature Converter</h1>
            <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                    <select onChange={(e) => { setFirstChoice(e.target.value); }} value={firstChoice} className="form-select" aria-label="Convert from">
                        <option value="" disabled defaultValue>Convert from</option>
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                    <p className='arrow-symbol'>&harr;</p>
                </div>
                <div className="col-md-3">
                    <select onChange={(e) => { setSecondChoice(e.target.value) }} value={secondChoice} className="form-select" aria-label="Convert to">
                        <option value="" disabled defaultValue>Convert to</option>
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <input value={inputTemperature} onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/^[0-9]*(\.[0-9]*)?$/)) { setInputTemperature(value) }
                    }} placeholder={`${firstChoice ? "Enter temperature value in " + firstChoice : "First select methods"}`} type="text" id="form12" className="form-control" />
                </div>
            </div>

            {result && <div className='mt-5'>
                <h6 className='d-inline-block'>Result : </h6><p className='d-inline-block px-2'>{inputTemperature} {firstChoice} = {result} {secondChoice}</p>
            </div>}

        </div>
    )
}
