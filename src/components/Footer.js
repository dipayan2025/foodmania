import React from 'react';
import { Link } from 'react-router-dom';
import { BsBootstrap, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className=" py-4 mt-5 border-top">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

                {/* Developer Info */}
                <div className="text-center text-md-start mb-3 mb-md-0">
                    <h5 className="mb-1 fw-bold">Dipayan Lodh</h5>
                    <span className="badge bg-success mb-1">Developer</span>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                        Developed with <span style={{ color: 'red' }}>❤️</span> 
                    </p>
                </div>

                {/* Bootstrap Logo & Copyright */}
                <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                    <Link to="/" className="text-body-secondary" aria-label="Bootstrap">
                        <BsBootstrap size={28} />
                    </Link>
                    <span className="text-muted">© 2025 GoFood</span>
                </div>

                {/* Social Links */}
                <ul className="nav list-unstyled d-flex gap-3 mb-0">
                    <li>
                        <a
                            className="text-body-secondary"
                            href="https://www.linkedin.com/in/dipayan-lodh-855111212/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <BsLinkedin size={24} />
                        </a>
                    </li>
                    <li>
                        <Link className="text-body-secondary" to="#" aria-label="Instagram">
                            <BsInstagram size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link className="text-body-secondary" to="#" aria-label="Facebook">
                            <BsFacebook size={24} />
                        </Link>
                    </li>
                </ul>

            </div>
        </footer>
    );
}
