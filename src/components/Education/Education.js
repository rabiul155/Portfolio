import React from 'react';
import logo from '../../images/MBSTU_Logo.png'

const Education = () => {
    return (
        <div>
            <h2 className=' text-secondary font-bold text-center text-5xl'>Education </h2>
            <div className=' sm:flex sm:justify-center sm:items-center gap-14'>
                <div className=' flex sm:block justify-center '>
                    <img className=' h-44 w-36 pb-8' src={logo} alt="" />
                </div>
                <div >
                    <div className='mx-5 text-center sm:text-left font-bold text-xl sm:text-3xl text-gray-900'> B.Sc(Engg) in Information and Communication Technology at</div>
                    <div className='mx-5  text-center sm:text-left font-bold text-xl sm:text-3xl text-gray-900'>Mawlana Bhashani Science and Technology University</div>
                    <div className='mx-5  text-center sm:text-left text-gray-900 font-bold'>From 2018 to 2023</div>
                </div>
            </div>
        </div>
    );
};

export default Education;