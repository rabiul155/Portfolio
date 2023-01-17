import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import programming from '../../images/p.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySkill = () => {
    return (
        <div>
            <h2 className=' text-5xl text-secondary font-bold text-center m-4'>My Skill</h2>
            <div className='mx-5 sm:mx-10 lg:grid grid-cols-2 items-center' >
                <div data-aos="fade-right" >
                    <div>
                        <h3 className=' font-bold py-2 px-1'>HTML5</h3>
                        <ProgressBar completed={90} />
                    </div>
                    <div>
                        <h3 className=' font-bold py-2 px-1'>CSS3</h3>
                        <ProgressBar bgColor='#00ccff' completed={80} />
                    </div>
                    <div>
                        <h3 className=' font-bold py-2 px-1'>JavaScript</h3>
                        <ProgressBar bgColor=' red' completed={65} />
                    </div>
                    <div>
                        <h3 className=' font-bold py-2 px-1'>React</h3>
                        <ProgressBar bgColor=' green' completed={70} />
                    </div>
                    <div>
                        <h3 className=' font-bold py-2 px-1'>NodeJs</h3>
                        <ProgressBar bgColor='rgb(255, 0, 255)' completed={60} />
                    </div>


                </div>
                <div>
                    <img data-aos="fade-left" src={programming} alt="" />
                </div>

            </div>
        </div>
    );
};

export default MySkill;