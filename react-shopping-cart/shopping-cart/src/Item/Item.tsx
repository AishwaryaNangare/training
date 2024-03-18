import { CartItemType } from "../App"
import { Wrapper } from "./Item.Styles"

type Props={
    item:CartItemType,
    handleAddToCart :(clickedItem:CartItemType)=>void
}

function Item({item,handleAddToCart}:Props) {
  return (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <button onClick={()=>handleAddToCart(item)}>Add to Cart</button>
    </Wrapper>
  )
}

export default Item
