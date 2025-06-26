import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    const response = await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail'),
      }),
    });

    const data = await response.json();
    if (data && data.orderData?.order_data) {
      setOrderData(data.orderData.order_data);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {orderData.length > 0 &&
            orderData
              .slice()
              .reverse()
              .map((orderGroup, index) => {
                const orderDate = orderGroup[0]?.Order_date;

                return (
                  <div key={index} className='mb-4'>
                    <h5 className='text-center mt-4'>Order Date: {orderDate}</h5>
                    <hr />
                    <div className='row'>
                      {orderGroup.slice(1).map((item, i) => (
                        <div className='col-12 col-md-6 col-lg-3' key={i}>
                          <div
                            className='card mt-3'
                            style={{ width: '16rem', maxHeight: '360px' }}
                          >
                            <img
                              src={item.img}
                              className='card-img-top'
                              alt={item.name}
                              style={{ height: '120px', objectFit: 'fill' }}
                            />
                            <div className='card-body'>
                              <h5 className='card-title'>{item.name}</h5>
                              <div
                                className='container w-100 p-0'
                                style={{ height: '38px' }}
                              >
                                <span className='m-1'>Qty: {item.qty}</span>
                                <span className='m-1'>Size: {item.size}</span>
                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                  ₹{item.price}/-
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
}
