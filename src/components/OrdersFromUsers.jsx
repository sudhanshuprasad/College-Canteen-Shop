import React from 'react'
import Order from "./Orders"

const userIDs = ['1234', '12345',]

const OrdersFromUser = (props) => {
    return (
        <div>
            Orders From Users
            <br />
            <hr />
            {userIDs.map((element) => (
                <div key={element}>
                    <br />
                    <Order userID={element} />
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default OrdersFromUser