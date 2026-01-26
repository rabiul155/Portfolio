import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const MySkill = () => {
  return (
    <div className="py-8 md:py-12" id="skill">
      <h2 className=" text-2xl text-brand font-bold text-center py-8">
        My Skills
      </h2>
      <div className="mx-5 sm:mx-10 gap-10 lg:grid grid-cols-2 items-center">
        <div data-aos="fade-up">
          <div>
            <h3 className=" font-bold py-2 px-1">TypeScript</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              completed={80}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">JavaScript</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="red"
              completed={70}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">Next Js</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="rgb(255, 0, 255)"
              completed={75}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">React JS</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="green"
              completed={80}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">Git and GitHub</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="#A9AE2A"
              completed={75}
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <h3 className=" font-bold py-2 px-1">Express JS</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="#FFA000"
              completed={70}
            />
          </div>
          <div>
            <h3 className=" font-bold py-2 px-1">MongoDB with Mongoose ORM</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="blue"
              completed={85}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">PostgreSQL with Prisma ORM</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="#006064"
              completed={70}
            />
          </div>

          <div>
            <h3 className=" font-bold py-2 px-1">Tailwind CSS</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="#00ccff"
              completed={90}
            />
          </div>
          <div>
            <h3 className=" font-bold py-2 px-1">Bootstrap</h3>
            <ProgressBar
              animateOnRender
              transitionDuration="2s"
              bgColor="#891150"
              completed={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
