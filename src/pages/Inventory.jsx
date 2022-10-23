import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import OrderItem from '../components/OrderItem'

const Inventory = () => {

    return (
        <div>
            Inventory
            <Link to='/addfood'>
                <img alt="add food item" src="https://img.icons8.com/ios/50/000000/add--v1.png" />
            </Link>
            <OrderItem />
        </div>
    )

}

export default Inventory