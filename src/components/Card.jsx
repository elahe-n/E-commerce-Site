import {AiFillShopping} from "react-icons/ai"
import {IoShirt} from "react-icons/io5"
import { useContext } from "react"
import CartContext from "../CartContext"

function Card({name, price}) {

  const {addToCart} = useContext (CartContext)

  return (
    <div className="card">

      <div className="product-box">
       
        <IoShirt />
        
      </div>

      <h3>{name}</h3> 
      <h4>${price} </h4>

      <button onClick={() => addToCart(name, price) }>
        <AiFillShopping />
        </button>
      
    </div>
  )
}

export default Card
