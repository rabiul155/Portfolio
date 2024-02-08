import React from "react";
import p1 from "../../images/p1.PNG";
import p2 from "../../images/p2.PNG";
import p3 from "../../images/1.PNG";
import { Link } from "react-router-dom";

const MyProject = () => {
  return (
    <div className="my-10 px-4" id="project">
      <h2 className=" text-4xl font-bold text-center m-10 text-secondary">
        My Project{" "}
      </h2>
      <div
        data-aos="fade-up"
        className="bg-base-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <div className="card hover:shadow-slate-400 card-compact max-w-[400px] mx-auto bg-base-100 shadow-xl">
          <figure>
            <img src={p3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Best Sell BD</h2>
            <p>It is a second hand laptop selling website</p>
            <div className="card-actions justify-end">
              <Link to="/bestSell">
                <button className="btn btn-primary">View Project</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card hover:shadow-slate-400 card-compact max-w-[400px]  mx-auto  bg-base-100 shadow-xl">
          <figure>
            <img src={p2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PhotoGraphyPro</h2>
            <p>It is an wildlife Photographer website</p>
            <div className="card-actions justify-end">
              <Link to="/photo">
                {" "}
                <button className="btn btn-primary">View Project</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card hover:shadow-slate-400 card-compact max-w-[400px] mx-auto  bg-base-100 shadow-xl">
          <figure>
            <img src={p1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LearnCode</h2>
            <p>It is an Programming language learning website</p>
            <div className="card-actions justify-end">
              <Link to="/learnCode">
                {" "}
                <button className="btn btn-primary">View Project</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
