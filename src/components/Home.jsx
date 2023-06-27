import React, { useEffect } from 'react'

export default function Home(props) {
    useEffect(() => {
        props.showLoading();
    }, [])
    return (
        !props.loading && <div className="container">
            <img src="icon.png" alt="" style={{ display: "block", margin: "20vh auto 0 auto", width: "80px" }} />
            <h1>Rapid Converter</h1>
            <p style={{ textAlign: "center" }}>Perform conversion operations for different units on a single lightweight application</p>
        </div>
    )
}
