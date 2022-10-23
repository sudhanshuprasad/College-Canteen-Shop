import axios from 'axios'
import React, { useState } from 'react'

const host = process.env.REACT_APP_BACKEND_URL

const AddNewFood = () => {

    const [error, setError] = useState(null)

    const handleAddFood = async () => {
        setError(null)

        const foodAdded = await axios.post(`${host}/api/fooditem/newFood/`,
            {
                "name": document.getElementById('name').value,
                "description": document.getElementById('description').value,
                "price": document.getElementById('price').value,
                "shopName": "my first shop",
                "num": "10",
                "key": "10"
            })
            .catch((err) => {
                setError(err?.response?.data?.errors[0]?.msg)
            })
        console.log(foodAdded.data)
    }

    return (
        <div>
            <fieldset className='signup-details'>
                <legend>Add Food</legend>
                <div className='name'>
                    <label htmlFor='name'>Food Name : </label><br />
                    <input type="text" name='name' id='name' placeholder='Enter Your Name'></input><br />
                </div>
                <div className='password'>
                    <label htmlFor='password'>Discription : </label><br />
                    <input type="text" name="description" id="description" placeholder='Description'></input><br />
                </div>
                <div className='password'>
                    <label htmlFor='price'>Price : </label><br />
                    <input type="number" name="price" id="price" placeholder='Price'></input><br />
                </div>
                <div>
                    <button id="submit" onClick={handleAddFood}>Add</button>
                    <br />
                </div>
                <div className='error'>
                    {error}
                </div>
            </fieldset>
        </div>
    )
}

export default AddNewFood