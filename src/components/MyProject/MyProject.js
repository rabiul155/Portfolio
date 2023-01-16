import React, { useEffect } from 'react';
import p1 from '../../images/p1.PNG'
import p2 from '../../images/p2.PNG'
import p3 from '../../images/p3.PNG'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const MyProject = () => {

    useEffect(() => {
        AOS.init(
            {
                duration: 1000

            })
    }, [])
    return (
        <div className=' m-4' id='project'>
            <h2 className=' text-5xl font-bold text-center m-6 text-yellow-500'>My Project </h2>
            <div className='bg-base-200 grid grid-cols-1 md:grid-cols-3 p-9 gap-y-5'>

                <div data-aos="fade-right" className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={p1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">LearnCode</h2>
                        <p>It is an Programming language learning website</p>
                        <div className="card-actions justify-end">
                            <Link to='/learnCode'> <button className="btn btn-primary">View Project</button></Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={p2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">PhotoGraphyPro</h2>
                        <p>It is an wildlife Photographer website</p>
                        <div className="card-actions justify-end">
                            <Link to='/photo'> <button className="btn btn-primary">View Project</button></Link>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-left" className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={p3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best Sell BD</h2>
                        <p>It is a second hand laptop selling website</p>
                        <div className="card-actions justify-end">
                            <Link to='/bestSell'><button className="btn btn-primary">View Project</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;