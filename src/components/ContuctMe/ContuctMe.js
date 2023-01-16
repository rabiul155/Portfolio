import React, { useEffect } from 'react';
import './ContuctMe.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContuctMe = () => {
    useEffect(() => {
        AOS.init(
            {
                duration: 1000

            })
    }, [])

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4a1zr0v', 'template_j8mjueq', form.current, 'Wpap6X0FRrmT-yU6X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div id='contuctMe'>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row justify-evenly">
                    <div data-aos="fade-right" className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Get In Touch <br />
                            <span className='text-yellow-500'>Contuct Me</span></h1>
                        <p className="py-6"></p>
                    </div>
                    <div data-aos="fade-left" className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="card-body">
                                <div className="form-control my-4">

                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control my-4">
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control my-4">
                                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContuctMe;