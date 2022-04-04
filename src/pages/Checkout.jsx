import {useContext} from 'react'
import CartContext from '../CartContext'
import {v4 as uuid } from 'uuid'

function Checkout() {

  const {items} = useContext(CartContext)

  let total=items.reduce((acc, cur) => acc=acc+cur.price , 0)

  return (
    <>
        <div className='title'>
        <h2>Checkout</h2>
        </div>

        <div className='shopping-bag'>
            {items.map((item) => (
                <div key= {uuid()} className="shopping-details"> 
                    <h4>{item.name}</h4>
                    <h4>${item.price}</h4>
                </div>
            ))}      
        </div>
        <div className='total'>      
        <h3>Total: ${total}</h3>
        </div> 
    </>
  )
}

export default Checkout
