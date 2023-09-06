import React from "react";

import { useSpring, animated } from "@react-spring/web";

import object1 from "../assets/objects/object (1).png";
import object2 from "../assets/objects/object (2).png";
import object3 from "../assets/objects/object (3).png";
import object4 from "../assets/objects/object (4).png";

import cart from "../assets/objects/tank.png";

import fish1 from "../assets/fish/fish1.gif";
import fish2 from "../assets/fish/fish2.gif";
import fish3 from "../assets/fish/fish3.gif";
import fish4 from "../assets/fish/fish4.gif";
import fish5 from "../assets/fish/fish5.gif";
import fish6 from "../assets/fish/fish6.gif";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-screen  overflow-x-hidden bg" id="home">
      <div className="absolute w-full h-screen flex items-center justify-center text-center z-50">
        <div>
          <h2 className="text-5xl sm:text-8xl glass-text">Fish Lovers' Paradise</h2>
          <h3 className="text-xl sm:text-2xl mt-5 glass-text">
            Buy Top-Quality Fish Online and Have It Delivered
          </h3>
        </div>
      </div>
      <div className="w-full flex items-center justify-between absolute px-10 py-5 z-50 " >
        <h2 className="text-2xl text-sky-500 font-bold ">Fish Haven</h2>
        <Link to='/cart'>
          {" "}
          <img className="w-[50px]" src={cart} alt="cart_image" />{" "}
        </Link>
      </div>
      <div className="w-full h-full absolute">
        <img
          className="w-[130px] sm:w-[200px] md:w-[300px] left-0 bottom-0 absolute"
          src={object1}
          alt="object1"
        />
        <img
          className="w-[80px] sm:w-[180px] md:w-[250px] right-0 bottom-0 absolute z-50"
          src={object2}
          alt="object3"
        />{" "}
        <img
          className="w-[80px] sm:w-[180px] md:w-[250px] left-1/4 bottom-0 absolute z-50"
          src={object3}
          alt="object3"
        />{" "}
        <img
          className="w-[80px] sm:w-[180px] md:w-[250px] left-2/4 bottom-0 absolute"
          src={object4}
          alt="object4"
        />
      </div>

      <div className="w-ful h-full relative  overflow-hidden">
        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute  z-10"
          style={useSpring({
            from: {
              left: "100%",
            },
            to: {
              left: "-100%",
            },
            config: { duration: 30000 },
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish1} alt="object4" />
        </animated.div>
        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute bottom-0 z-10"
          style={useSpring({
            from: { left: "-100%" },
            to: { left: "100%" },
            delay: 5000,
            config: { duration: 10000 }, // Increase the duration for a slower animation
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish2} alt="object4" />
        </animated.div>
        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute bottom-1/2 z-10"
          style={useSpring({
            from: { left: "-100%" },
            to: { left: "100%" },

            config: { duration: 30000 }, // Increase the duration for a slower animation
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish3} alt="object4" />
        </animated.div>

        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute bottom-1/4 z-10"
          style={useSpring({
            from: { left: "100%" },
            to: { left: "-100%" },
            config: { duration: 10000 }, // Increase the duration for a slower animation
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish4} alt="object4" />
        </animated.div>

        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute bottom-2/3 z-10"
          style={useSpring({
            from: { left: "100%" },
            to: { left: "-100%" },

            delay: 5000,
            config: { duration: 40000 }, // Increase the duration for a slower animation
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish5} alt="object4" />
        </animated.div>

        <animated.div
          className="w-[100px] sm:w-[180px] md:w-[250px] absolute bottom-1/3 z-10"
          style={useSpring({
            from: { left: "-100%" },
            to: { left: "100%" },

            delay: 15000,
            config: { duration: 40000 }, // Increase the duration for a slower animation
            loop: true,
          })}
        >
          <img className=" w-full h-full" src={fish6} alt="object4" />
        </animated.div>
      </div>
    </div>
  );
}
