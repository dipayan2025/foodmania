import React from 'react';


export default function Carousel() {
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

    return (
        <div className="position-relative">
            {/* Overlay Search Section */}
            <div style={overlayStyle}>
                <h1 className="text-white mb-4 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    Discover Delicious Meals
                </h1>
                <form className="d-flex w-50" role="search">
                    <input
                        className="form-control me-2 form-control-lg"
                        type="search"
                        placeholder="Search dishes or cuisines..."
                        aria-label="Search"
                    />
                    <button className="btn btn-success btn-lg" type="submit">Search</button>
                </form>
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
    );
}
