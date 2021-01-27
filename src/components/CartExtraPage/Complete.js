import React, {useContext, useEffect} from "react";
import {CartContext} from '../../CartContext'
import {ProductContext} from '../../ProductContext'
import './Complete.css'

function Complete() {
      const {Show} = useContext(ProductContext)
      const {total, getTotal, cart, getCart, getOrders, orders} = useContext(CartContext)

    useEffect(() => {
        getOrders()
    }, [])

    console.log(orders)

    return (
        <div id='complete'>
        {Show()}
            <h2>Thank you for your purchase!</h2>
            <h3>Your items:</h3>
            {orders.map((item) => {
                return (
                    <div>
                    <h2>{item.tree_name}</h2>
                    <img src={item.tree_img} width="50px"/>
                    <h3>Quantity: {item.count}</h3>
                    </div>
                )
            })}
            
            
        </div>
    );
}

export default Complete;
