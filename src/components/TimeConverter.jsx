import React, { useEffect, useState } from 'react'

export default function TimeConverter(props) {
    useEffect(() => {
        props.showLoading();
    }, [])

    const [firstChoice, setFirstChoice] = useState("");
    const [secondChoice, setSecondChoice] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        convertTime();
    }, [inputTime, firstChoice, secondChoice])

    const timeConversionRatios = {
        Nanosecond: 1,
        Microsecond: 1e+3,
        Millisecond: 1e+6,
        Second: 1e+9,
        Minute: 6e+10,
        Hour: 3.6e+12,
        Day: 8.64e+13,
        Week: 6.048e+14,
        Month: 2.628e+15,
        Year: 3.154e+16
    };

    const convertTime = () => {
        if (inputTime === "") {
            setResult("");
        } else {
            const conversionRatio = timeConversionRatios[firstChoice] / timeConversionRatios[secondChoice];
            setResult((inputTime * conversionRatio).toFixed(2));
        }
    };


    return (
        !props.loading && <div className="container">
            <h1>Time Converter</h1>
            <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                    <select onChange={(e) => { setFirstChoice(e.target.value); }} value={firstChoice} className="form-select" aria-label="Convert from">
                        <option value="" disabled defaultValue>Convert from</option>
                        <option value="Nanosecond">Nanosecond</option>
                        <option value="Microsecond">Microsecond</option>
                        <option value="Millisecond">Millisecond</option>
                        <option value="Second">Second</option>
                        <option value="Minute">Minute</option>
                        <option value="Hour">Hour</option>
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Year">Year</option>
                    </select>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                    <p className='arrow-symbol'>&harr;</p>
                </div>
                <div className="col-md-3">
                    <select onChange={(e) => { setSecondChoice(e.target.value) }} value={secondChoice} className="form-select" aria-label="Convert to">
                        <option value="" disabled defaultValue>Convert to</option>
                        <option value="Nanosecond">Nanosecond</option>
                        <option value="Microsecond">Microsecond</option>
                        <option value="Millisecond">Millisecond</option>
                        <option value="Second">Second</option>
                        <option value="Minute">Minute</option>
                        <option value="Hour">Hour</option>
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Year">Year</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <input value={inputTime} onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/^[0-9]*(\.[0-9]*)?$/)) { setInputTime(value) }
                    }} placeholder={`${firstChoice ? "Enter time in " + firstChoice : "First select methods"}`} type="text" id="form12" className="form-control" />
                </div>
            </div>
            {result && <div className='mt-5'>
                <h6 className='d-inline-block'>Result : </h6><p className='d-inline-block px-2'>{inputTime} {firstChoice} = {result} {secondChoice}</p>
            </div>}
        </div>
    )
}
