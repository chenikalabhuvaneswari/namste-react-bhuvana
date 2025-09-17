import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="text-center ">
            <h1>Cart</h1>
            <h3>no Cart</h3>
            <div>
                <ItemList items = {cartItems}/>
            </div>
        </div>
    )


}

export default Cart;