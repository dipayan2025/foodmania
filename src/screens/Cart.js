import React from 'react';
import { useCart, useDispatchCart } from '../components/CoontextReducer';

export default function Cart() {
    const cartData = useCart();
    const dispatch = useDispatchCart();

    if (cartData.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h3>Your cart is empty.</h3>
            </div>
        );
    }

    const handleCheckOut = async()=>{
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData",{
            method:"POST",
            headers: { // <-- fixed here
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                order_data:cartData,
                email:userEmail,
                order_date:new Date().toDateString()
            })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if(response.status ===200){
            dispatch({type:"DROP"})

        }
    }

    const handleRemoveItem = (index) => {
        dispatch({ type: 'REMOVE', index });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR' });
    };

    const totalPrice = cartData.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container mt-4">
            <h3>Your Cart</h3>
            <table className="table table-striped table-hover mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={item.img} alt="" width="60" height="40" style={{ objectFit: 'cover' }} /></td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.size}</td>
                            <td>Rs. {item.price}/-</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItem(index)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4 className="text-end">Total: Rs. {totalPrice}/-</h4>
            <div className="text-end mt-3">
                <button className="btn btn-warning me-2" onClick={handleClearCart}>Clear Cart</button>
                <button className="btn btn-success" onClick={handleCheckOut}>Checkout</button>
            </div>
        </div>
    );
}
