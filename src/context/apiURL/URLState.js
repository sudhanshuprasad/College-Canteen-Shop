import React from 'react'
import UrlContext from './urlContext'

function UrlState(props) {

    const url = process.env.REACT_APP_BACKEND_URL || `https://college-canteen-backend.herokuapp.com`;
    return (
        <div>
            <UrlContext.Provider value={url}>
                {props.children}
            </UrlContext.Provider>
        </div>
    )
}

export default UrlState
