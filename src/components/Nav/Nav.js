import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll"); 
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://i.ibb.co/3sdkQzW/1.png"
                alt="Netflix Logo" />
            <img
                className="nav-avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix avatar" />
        </div>
    )
}

export default Nav
