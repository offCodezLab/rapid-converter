import React from 'react'

export default function Spinner(props) {
    return (
        props.loading && <div className="d-flex justify-content-center" style={{ height: "70vh", alignItems: "center" }}>
            <div className="spinner-border text-primary" role="status" style={{ width: "40px", height: "40px" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className='mx-2 mt-3'><p>Please wait...</p></div>
        </div>
    )
}
