import React, { useEffect, useState } from 'react'


export default function LengthConverter(props) {
    useEffect(() => {
        props.showLoading();
    }, [])

    const [firstChoice, setFirstChoice] = useState("");
    const [secondChoice, setSecondChoice] = useState("");
    const [inputLength, setInputLength] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        convertLength();
    }, [inputLength, firstChoice, secondChoice])

    const lengthConversionRatios = {
        Nanometer: 1,
        Micrometer: 1000,
        Millimeter: 1000000,
        Centimeter: 10000000,
        Meter: 1000000000,
        Kilometer: 1000000000000,
        Inch: 25400000,
        Foot: 304800000,
        Yard: 914400000,
        Mile: 1609344000000
    };

    const convertLength = () => {
        if (inputLength === "") {
            setResult("");
        } else {
            const conversionRatio = lengthConversionRatios[firstChoice] / lengthConversionRatios[secondChoice];
            setResult((inputLength * conversionRatio).toFixed(3));
        }
    };



    return (
        !props.loading && <div className="container">
            <h1>Length Converter</h1>
            <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                    <select onChange={(e) => { setFirstChoice(e.target.value); }} value={firstChoice} className="form-select" aria-label="Convert from">
                        <option value="" disabled defaultValue>Convert from</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Micrometer">Microsecond</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Inch">Inch</option>
                        <option value="Foot">Foot</option>
                        <option value="Yard">Yard</option>
                        <option value="Mile">Mile</option>
                    </select>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                    <p className='arrow-symbol'>&harr;</p>
                </div>
                <div className="col-md-3">
                    <select onChange={(e) => { setSecondChoice(e.target.value) }} value={secondChoice} className="form-select" aria-label="Convert to">
                        <option value="" disabled defaultValue>Convert to</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Micrometer">Microsecond</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Inch">Inch</option>
                        <option value="Foot">Foot</option>
                        <option value="Yard">Yard</option>
                        <option value="Mile">Mile</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <input value={inputLength} onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/^[0-9]*(\.[0-9]*)?$/)) { setInputLength(value) }
                    }} placeholder={`${firstChoice ? "Enter Length in " + firstChoice : "First select methods"}`} type="text" id="form12" className="form-control" />
                </div>
            </div>
            {result && <div className='mt-5'>
                <h6 className='d-inline-block'>Result : </h6><p className='d-inline-block px-2'>{inputLength} {firstChoice} = {result} {secondChoice}</p>
            </div>}
        </div>
    )
}
