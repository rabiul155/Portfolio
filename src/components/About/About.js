import React from 'react';
import img from '../../images/pic.jpg'

const About = () => {
    return (
        <div>
            {/* <h1 className=' text-4xl text-center text-primary font-bold pt-6 underline'>About Me</h1> */}
            <div className="hero min-h-screen bg-base-200 mt-0 px-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="lg:max-w-md max-w-xs rounded-full shadow-2xl" alt='' />
                    <div className=' px-6'>
                        <h1 className="lg:text-5xl text-3xl font-bold">Hello! I am <br /><span className='text-yellow-500'>Rabiul Islam</span></h1>
                        <p className="py-1 lg:text-3xl text-2xl font-bold">Junior web developer </p>
                        <p className="py-3">I am a Junior web Developer. Last 9 months I have focused on improving my developing skill. That has made me well-positioned for your requirement for a front-end web developer. Over the last year as a web developer, I have designed develop and launched customized highly responsive e-commerce solutions using advanced technologies. I have built many single-page applications using React component library. In addition, I have consistently met client expectations and project milestones while learning effectively with the programming hero community. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;