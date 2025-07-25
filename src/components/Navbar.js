import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Navbar() {
    const nav = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("authToken");
        nav("/login")



    }
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/">FoodMania</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                        {(localStorage.getItem("authToken"))?
                        <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                    </li>
                        
                    :""}

                        </ul>
                        {(!localStorage.getItem("authToken"))?
                        <div className='d-flex'>
                        
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            
                                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                            

                        </div>:
                        <div>
                        <Link className="btn bg-white text-success mx-2" to="/cart">My Cart</Link>

                        <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                        Logout
                    </div>
                        </div>
                        }
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
