import React from 'react';
import img1 from '../../../images/LearnCode/1.PNG'
import img2 from '../../../images/LearnCode/2.PNG'
import img3 from '../../../images/LearnCode/3.PNG'
import img4 from '../../../images/LearnCode/4.PNG'
import img5 from '../../../images/LearnCode/5.PNG'


const LearnCode = () => {
    return (
        <div className=' mx-8'>
            <h2 className=' text-primary text-center font-bold text-3xl m-6'>Screen shot of Learn Code</h2>
            <div className=' grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-y-8 gap-4'>
                <img className=' w-96' src={img1} alt="" />
                <img className=' w-96' src={img2} alt="" />
                <img className=' w-96' src={img3} alt="" />
                <img className=' w-96' src={img4} alt="" />
                <img className=' w-96' src={img5} alt="" />

            </div>
            <div className=' mt-6'>
                <h2 className=' text-primary font-bold text-3xl my-6 underline'>Feature</h2>
                <ol className=' font-bold'>
                    <li>* Developed in React, Express Js  Bootstrap as CSS framework</li>
                    <li>* Dynamically load data from the server and use CRUD operation</li>
                    <li>* Download pdf by using react to pdf package</li>
                    <li>* Added Firebase authentication system</li>
                    <li>* Added Responsive feature for mobile and desktop view</li>
                </ol>






                <a href="https://assignment-d6e68.web.app/cources"><button className=' btn btn-primary '>Live Link</button></a>
                <a href="https://github.com/rabiul155/LearnCode-client"><button className=' btn btn-primary m-4'>GitHub Client side </button></a>
                <a href="https://github.com/rabiul155/LearnCode-server"><button className=' btn btn-primary m-4'>GitHub Server Side</button></a>


            </div>
        </div>
    );
};

export default LearnCode;