import React from 'react'
import PropTypes from 'prop-types';
import style from '../style/OrderItem.module.css'

const item = {_id:"345"}

function OrderItem(props) {
    return (
        <div className={style.cartitem} id={"item" + item?._id}>
            <div className={style.cartItem_image}>
                <img src="https://picsum.photos/30" alt="food" />
            </div>
            <div className={style.cartitem_content}>
                <div className={style.cartitem_name}>
                    <h3>{item?.name}</h3>
                    <h3>&#8377;{item?.price}</h3>
                </div>
                <div className={style.quantity}>
                    <h2>Quantity: {props.quantity}</h2>
                </div>
            </div>
        </div>
    )
}

export default OrderItem

OrderItem.propTypes = {
    quantity: PropTypes.number.isRequired,
}
OrderItem.defaultProps = {
    quantity: 0,
}