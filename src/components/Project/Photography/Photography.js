import React from 'react';
import img1 from '../../../images/PhotoGra/1.PNG'
import img2 from '../../../images/PhotoGra/2.PNG'
import img3 from '../../../images/PhotoGra/3.PNG'
import img4 from '../../../images/PhotoGra/4.PNG'
import img5 from '../../../images/PhotoGra/5.PNG'
import img6 from '../../../images/PhotoGra/6.PNG'

const Photography = () => {
    return (
        <div className=' mx-8'>
            <h2 className=' text-primary text-center font-bold text-3xl m-6'>Screen shot of PhotGraPhyPro</h2>
            <div className=' grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-y-8 gap-4'>
                <img className=' w-96' src={img1} alt="" />
                <img className=' w-96' src={img2} alt="" />
                <img className=' w-96' src={img3} alt="" />
                <img className=' w-96' src={img4} alt="" />
                <img className=' w-96' src={img5} alt="" />
                <img className=' w-96' src={img6} alt="" />

            </div>
            <div className=' mt-6'>
                <h2 className=' text-primary  font-bold text-3xl my-6 underline'>Feature</h2>

                <ul className=' font-bold'>
                    <li>* Developed in React, Express js, MongoDB, Tailwind as CSS framework </li>
                    <li>* Load data from the database and also use CRUD operation</li>
                    <li>* Added react photo view pacakage to view images in full window </li>
                    <li>*   Added Firebase authentication also implement user feedback system</li>
                    <li>* Added Responsive feature for mobile and desktop view</li>
                </ul>


                <a href='https://assignment-420fc.web.app/'><button className=' btn btn-primary '>Live Link</button></a>
                <a href="https://github.com/rabiul155/PhotoGraphyPro-client"><button className=' btn btn-primary m-4'>GitHub Client side </button></a>
                <a href="https://github.com/rabiul155/PhotoGraphyPro-server"><button className=' btn btn-primary m-4'>GitHub Server Side</button></a>



            </div>
        </div>
    );
};

export default Photography;