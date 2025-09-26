import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem } from "./CartSlice";

const CartItem = ({onContinueShopping}) => {
    const cart= useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
    
    };

    const handleContinueShopping = (e) => {
    
    };



    const handleIncrement = (item) => {
    };

    const handleDecrement = (item) => {
    
    };

    const handleRemove = (item) => {
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
    };
    return (
        <div className="cart-contianer flex items-center flex-col justify-center
        gap-5 mt-5 p-[10px] ">
            <h2 className="text-black">Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map((item) => (
                    <div className="cart-item flex border border-gray-300 px-[10px] bg-white w-[500px] gap[30px]  items-start md:w-full md:flex-col" key={item.name}>
                        <img src={item.image} alt={item.name} className="cart-item-image w-[200px] h-[200px] mr-[20px] md:w-full  md:mr-0 md:mb-[10px]" />
                        <div className="cart-item-details grow md:w-full ">
                            <div className="cart-item-name font-bold mb-[5px] text-[25px]">
                                {item.name}
                            </div>
                            <div className="cart-item-cost mb-[10px] mt-[10px]">
                                {item.cost}
                            </div>
                            <div className="cart-item-quantity flex items-center mb-[15px] md:mt-[10px]">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrementItem(item)}>-</button>
                                <span className="cart-item-quantity-value text-[16px] font-bold mx-0 my-[10px]">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrementItem(item)}>+</button>
                            </div>
                            <div className="cart-item-total">
                                Total: ${calculateTotalCost(item)}
                            </div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total_cart_amount mt-[20px]text-black"></div>
            <div className="continue_shopping_button">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
                    Continue Shopping
                </button>
                <br />
                <button className="get-started-button">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartItem;