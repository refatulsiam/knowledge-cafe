import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mx-md-5 px-md-5 mt-3">
                <a className="navbar-brand fs-3 fw-semibold" href="#">
                    Programming Blog
                </a>
                <img src="https://i.pinimg.com/564x/13/95/9a/13959adfbc9c48213e74ee6e0dc4f519.jpg" width="40px" height="40px" className="rounded-circle" alt="Navbar" />
            </nav>
            <hr className='mt-4 container text-center ' />
        </div>
    );
};

export default Header;