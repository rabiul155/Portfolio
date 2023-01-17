import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/BestSell/1.PNG'
import img2 from '../../../images/BestSell/2.PNG'
import img3 from '../../../images/BestSell/3.PNG'
import img4 from '../../../images/BestSell/4.PNG'
import img5 from '../../../images/BestSell/5.PNG'
import img6 from '../../../images/BestSell/6.PNG'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const BestSell = () => {
    return (
        <div className=' mx-8'>
            <h2 className=' text-primary text-center font-bold text-3xl m-6'>Screen shot of Best Sell BD</h2>
            <PhotoProvider>
                <div className=' grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-y-8 gap-4'>
                    <PhotoView src={img1}>
                        <img className=' w-96' src={img1} alt="" />
                    </PhotoView>
                    <PhotoView src={img2}>
                        <img className=' w-96' src={img2} alt="" />
                    </PhotoView>
                    <PhotoView src={img3}>
                        <img className=' w-96' src={img3} alt="" />
                    </PhotoView>
                    <PhotoView src={img4}>
                        <img className=' w-96' src={img4} alt="" />
                    </PhotoView>
                    <PhotoView src={img5}>
                        <img className=' w-96' src={img5} alt="" />
                    </PhotoView>
                    <PhotoView src={img6}>
                        <img className=' w-96' src={img6} alt="" />
                    </PhotoView>

                </div>
            </PhotoProvider>
            <div className=' mt-6'>
                <h2 className=' text-primary  font-bold text-3xl my-6 underline'>Feature</h2>
                <ul className='font-bold'>
                    <p>* Developed in React, Express Js, MongoDB, (Tailwind as CSS Framework)</p>
                    <p>* Use dashboard layout for buyer seller and admin and use CRUD operation</p>
                    <p>* Firebase Authentication for user creation and added JWT token for more security</p>
                    <p>* Added payment method user can buy any product and pay</p>
                    <p>* Added Responsive feature for mobile and desktop view</p>
                </ul>

                <a href='https://laptop-resale.web.app'><button className=' btn btn-primary '>Live Link</button></a>
                <a href="https://github.com/rabiul155/Best-Sell-BD-client"><button className=' btn btn-primary m-4'>GitHub Client side </button></a>
                <a href="https://github.com/rabiul155/Best-Sell-BD-server"><button className=' btn btn-primary m-4'>GitHub Server Side</button></a>


            </div>
        </div>
    );
};

export default BestSell;