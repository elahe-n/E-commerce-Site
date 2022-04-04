import Card from '../components/Card'
import {v4 as uuid } from 'uuid'

function Products() {

    const products= [
        {name:"vest" , price: 40},
        {name:"shirt" , price: 20},
        {name:"top" , price: 10},
        {name:"pants" , price: 45},
        {name:"jacket" , price: 50},
    ]


  return (
    
    <div className='product-list'>
        {products.map((product)=> (
        <Card key= {uuid()} name={product.name} price={product.price} />
        ))}
    </div>
  )
}

export default Products
