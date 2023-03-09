import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div className='flex flex-wrap justify-center'>
                    <p className='font-bold'>Copyright © 2023 - All right reserved | Rabiul Islam</p>
                    <div className='flex'>
                        <a href='https://www.linkedin.com/in/rabiul-islam47/'><FaLinkedin size={24}></FaLinkedin></a>
                        <a href='https://github.com/rabiul155'><FaGithubSquare size={24}></FaGithubSquare></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;