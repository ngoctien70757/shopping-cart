import {CartState} from '../Context/Context'
import {Button, ListGroup} from 'react-bootstrap'
import { useState,useEffect } from 'react'
const Cart = () => {

    const {
        state: {cart},
        dispatch,
    } = CartState()

    const [total,setToTal] = useState();

    useEffect(()=>{
        setToTal(cart.reduce((acc,curr)=> acc + Number(curr.price)* curr.qty, 0))
    },[cart]);
    
    return <div className='home'>
        <div className='productContainer'>
            <ListGroup>
                {cart.map((prod)=>(
                    <span>
                        {prod.name}
                    </span>
                ))}
            </ListGroup>
        </div>
        <div className='filters summary'>
            <span className='title'>Subtotal ({cart.length}) item</span>
            <span style={{fontWeight:700, fontSize:20}}>Total: ${total}</span>
            <Button type="button" disabled={cart.length === 0}>
                Proceed to Checkout
            </Button>
        </div>
    </div>
}

export default Cart