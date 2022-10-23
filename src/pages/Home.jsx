import React from 'react'
import { Link } from 'react-router-dom'
import OrdersFromUser from '../components/OrdersFromUsers'

function Home() {
    return (
        <div>
            <OrdersFromUser />
            <Link to='/login'>login</Link>
        </div>
    )
}

export default Home
