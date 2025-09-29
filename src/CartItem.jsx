import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem } from "./CartSlice";

const CartItem = ({onContinueShopping}) => {
    const cart= useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let total =0; 
        cart.forEach((item) => {
            total += parseFloat(item.cost.replace("$", "")) * item.quantity ;
        })
        return total;
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    const handleIncrement = (item) => {
        dispatch(updateItem({name: item.name, quantity: item.quantity + 1}));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateItem({name: item.name, quantity: item.quantity - 1}));
        } else {
            dispatch(removeItem(item.name));
        }
    };  

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    }

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        
    };
    return (
        <div className="cart-container flex items-center flex-col justify-center
        gap-5 mt-5 p-[10px] ">
            <h2 className="text-black">Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map((item) => (
                    <div className="cart-item flex flex-col md:flex-row border border-gray-300 py-2 px-2 bg-white w-full max-w-[500px] gap-[30px]  items-start " key={item.name}>
                        <img src={item.image} alt={item.name} className="cart-item-image w-[200px] h-[200px] mr-[20px] md:w-full  md:mr-0 md:mb-[10px] object-cover rounded" />
                        <div className="cart-item-details grow md:w-full ">
                            <div className="cart-item-name font-bold mb-[5px] text-[25px]">
                                {item.name}
                            </div>
                            <div className="cart-item-cost mb-[10px] mt-[10px]">
                                {item.cost}
                            </div>
                            <div className="cart-item-quantity flex items-center mb-[15px] md:mt-[10px]">
                                <button className="cart-item-button cart-item-button-dec bg-gray-100 border border-gray-200 text-gray-800 text-[18px] px-3 py-1 rounded cursor-pointer" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity-value text-[16px] font-bold mx-2">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc bg-gray-100 border border-gray-200 text-gray-800 text-[18px] px-3 py-1 rounded cursor-pointer" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total font-bold">
                                Total: ${calculateTotalCost(item)}
                            </div>
                            <button className="cart-item-delete bg-red-400 hover:bg-red-600 text-white text-[14px] px-3 py-2 mt-4 rounded-lg " onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total_cart_amount mt-[20px]text-black"></div>
            <div className="continue_shopping_button flex gap-4">
                <button className="get-started-button bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700" onClick={(e) => handleContinueShopping(e)}>
                    Continue Shopping
                </button>
                <br />
                <button className="get-started-button bg-blue-600 text-white px-6 py-3 rounded  hover:bg-blue-700" onClick={(e) => handleCheckoutShopping(e)}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartItem;