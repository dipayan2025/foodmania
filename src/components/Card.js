import React, { useState, useRef, useEffect } from 'react'
import { useDispatchCart, useCart } from './CoontextReducer'

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const sizeRef = useRef();

    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    useEffect(() => {
        setSize(sizeRef.current.value);
    }, []);

    const handleAddToCart = async () => {
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.foodItem.img
        });
        console.log(data);
    };

    let finalPrice = qty * parseInt(options[size]);

    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{props.foodItem.name}</h5>
                <p className="card-text"></p>
                <div className="container w-100">
                    {/* Size Selector */}
                    <select className='m-2 h-100 bg-success rounded' ref={sizeRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>

                    {/* Quantity Selector */}
                    <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return <option key={i + 1} value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                    <div className='d-inline h:100'>
                        Rs.{finalPrice}/-
                    </div>
                </div>
                <hr />
                <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
