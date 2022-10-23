import React from 'react'
import OrderItem from './OrderItem'

const orderIDs = ['qwer', 'asdfg']

const Order = (props) => {
    return (
        <>
            <div>Orders from: {props?.userID}</div>
            <hr/>
            {orderIDs.map((element) => (
                <div key={element}>
                    <OrderItem />
                </div>
            ))}
            <hr />
        </>
    )
}

export default Order