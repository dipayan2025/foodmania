import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodcat, setFoodcat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const carouselImageStyle = {
        height: '70vh',
        objectFit: 'cover',
        filter: 'brightness(60%)',
    };

    const captionStyle = {
        zIndex: 5,
        bottom: '20%',
        color: 'white',
        textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 15px',
    };

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setFoodItem(response[0]);
        setFoodcat(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="position-relative">
                {/* Overlay Search Section */}
                <div style={overlayStyle}>
                    <h1 className="text-white mb-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                        Discover Delicious Meals
                    </h1>
                    <div className="d-flex w-50 justify-content-center" role="search">
                        <input
                            className="form-control me-2 form-control-lg"
                            type="search"
                            placeholder="Search dishes or cuisines..."
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Carousel Section */}
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1600"
                                className="d-block w-100 img-fluid"
                                alt="Pizza"
                                style={carouselImageStyle}
                            />
                            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                                <p>Oven-fresh, cheesy, and loaded with your favorite toppings.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1600"
                                className="d-block w-100 img-fluid"
                                alt="Burger"
                                style={carouselImageStyle}
                            />
                            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                                <p>Grilled to perfection with crispy lettuce and melty cheese.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1600"
                                className="d-block w-100 img-fluid"
                                alt="Asian Food"
                                style={carouselImageStyle}
                            />
                            <div className="carousel-caption d-none d-md-block" style={captionStyle}>
                                <p>Experience the rich flavors of authentic oriental dishes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container mt-5'>
                {
                    foodcat.length !== 0
                        ? foodcat.map((category) => {
                            return (
                                <div key={category._id} className='mb-4'>
                                    <h2 className='fs-3 m-3'>{category.CategoryName}</h2>
                                    <hr />
                                    <div className='row g-4'>

                                        {
                                            foodItem
                                                .filter(item =>
                                                    item.CategoryName === category.CategoryName &&
                                                    item.name.toLowerCase().includes(search.toLowerCase())
                                                )
                                                .map(filteredItem => {
                                                    return (
                                                        <div key={filteredItem._id} className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4'>

                                                            <Card
                                                                foodItem = {filteredItem}
                                                                options={filteredItem.options[0]}
                                                                
                                                            />
                                                        </div>
                                                    );
                                                })
                                        }
                                    </div>
                                </div>
                            );
                        })
                        : <div>Loading...</div>
                }
            </div>

            <Footer />
        </div>
    );
}
