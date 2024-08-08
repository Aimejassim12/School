import React from "react";
import { Link, Router } from "react-router-dom";
const Header = () => {
    return (
            <div>
                <ul>
                    <li>
                        < Link  to ="/home">Home</ Link>
                    </li>
                    <li>
                        < Link to ="/About">About</ Link>
                    </li>
                    <li>
                        < Link to ="/contact">Contact</ Link>
                    </li>
                </ul>
                </div>        
                
        )
    }
export default Header;