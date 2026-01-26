import React, { useRef } from "react";
import mailbox from "./mailbox.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import SecondaryButton from "../Shared/SecondaryButton";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4a1zr0v",
        "template_j8mjueq",
        form.current,
        "ZO82bw_6iD05LkU2j",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div id="contact" className=" my-12 mx-4">
      <h2 className=" text-2xl text-center font-bold text-brand py-8">
        Get In touch
      </h2>
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center" data-aos="fade-right">
            <Lottie
              className="w-full max-w-lg"
              animationData={mailbox}
              loop={true}
            />
          </div>
          <div className="overflow-hidden flex justify-center">
            <div
              data-aos="fade-left"
              className="card mx-8 w-full max-w-md shadow-xl bg-base-100"
            >
              <h2 className=" text-2xl text-center font-bold text-brand pt-6">
                Contact Me
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="card-body mt-0 pt-2">
                  <div className="form-control my-1">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Name"
                      className="input input-bordered h-10"
                    />
                  </div>
                  <div className="form-control my-1">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Email"
                      className="input input-bordered h-10"
                    />
                  </div>
                  <div className="form-control my-1">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <SecondaryButton text={"Send"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
