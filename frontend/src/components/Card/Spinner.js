import Spinner from 'react-bootstrap/Spinner'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 function Loading() {
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>

    )
}
export default Loading