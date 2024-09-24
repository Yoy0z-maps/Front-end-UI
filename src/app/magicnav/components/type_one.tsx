"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbleEllipsesSharp, IoPerson } from "react-icons/io5";
import styles from "./styles.module.css";

// npm i create-react-class
var React = require("react");
var createReactClass = require("create-react-class");

var Component = createReactClass({
  mixins: [],
  render() {
    return <Component />;
  },
});

export default function Magic_One() {
  const [nav_index, setIndex] = useState(0);

  // https://ionic.io/ionicons/usage 마운트 될 때 불러옴
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    script.async = true;
    document.body.appendChild(script);

    const sec_script = document.createElement("script");
    sec_script.noModule = true;
    sec_script.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    sec_script.async = true;
    document.body.appendChild(sec_script);
  }, []);

  return (
    <div className="flex relative w-[400px] h-[70px] bg-white justify-center items-center border rounded-[10px]">
      <ul className="flex w-[350px]">
        <li
          className="relative list-none w-[70px] h-[70px] z-[1]"
          onClick={() => {
            setIndex(0);
          }}
        >
          <Link
            href="#"
            className="flex flex-col relative justify-center items-center w-[100%] text-center font-medium"
          >
            <span
              className={`relative block leading-[75px] text-[1.5em] text-center transition duration-500 ${
                nav_index === 0 ? "translate-y-[-10px]" : "translate-y-[20px]"
              }`}
            >
              {/*<ion-icon name="home-outline"></ion-icon>*/}
              <GoHomeFill color="#222327" />
            </span>
            <span
              className={`absolute text-clr font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 0
                  ? "translate-y-[38px] opacity-1"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
        <li
          className="relative list-none w-[70px] h-[70px] z-[1]"
          onClick={() => {
            setIndex(1);
          }}
        >
          <Link
            href="#"
            className="flex flex-col relative justify-center items-center w-[100%] text-center font-medium"
          >
            <span
              className={`relative block leading-[75px] text-[1.5em] text-center transition duration-500 ${
                nav_index === 1 ? "translate-y-[-10px]" : "translate-y-[20px]"
              }`}
            >
              {/*<ion-icon name="person-outline"></ion-icon>*/}
              <IoPerson color="#222327" />
            </span>
            <span
              className={`absolute text-clr font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 1
                  ? "translate-y-[38px] opacity-1"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Profile
            </span>
          </Link>
        </li>
        <li
          className="relative list-none w-[70px] h-[70px] z-[1]"
          onClick={() => {
            setIndex(2);
          }}
        >
          <Link
            href="#"
            className="flex flex-col relative justify-center items-center w-[100%] text-center font-medium"
          >
            <span
              className={`relative block leading-[75px] text-[1.5em] text-center transition duration-500 ${
                nav_index === 2 ? "translate-y-[-10px]" : "translate-y-[20px]"
              }`}
            >
              {/*<ion-icon name="chatbubble-outline"></ion-icon>*/}
              <IoChatbubbleEllipsesSharp color="#222327" />
            </span>
            <span
              className={`absolute text-clr font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 2
                  ? "translate-y-[38px] opacity-1"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Message
            </span>
          </Link>
        </li>
        <li
          className="relative list-none w-[70px] h-[70px] z-[1]"
          onClick={() => {
            setIndex(3);
          }}
        >
          <Link
            href="#"
            className="flex flex-col relative justify-center items-center w-[100%] text-center font-medium"
          >
            <span
              className={`relative block leading-[75px] text-[1.5em] text-center transition duration-500 ${
                nav_index === 3 ? "translate-y-[-10px]" : "translate-y-[20px]"
              }`}
            >
              {/*<ion-icon name="camera-outline"></ion-icon>*/}
              <FaCamera color="#222327" />
            </span>
            <span
              className={`absolute text-clr font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 3
                  ? "translate-y-[38px] opacity-1"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Photos
            </span>
          </Link>
        </li>
        <li
          className="relative list-none w-[70px] h-[70px] z-[1]"
          onClick={() => {
            setIndex(4);
          }}
        >
          <Link
            href="#"
            className="flex flex-col relative justify-center items-center w-[100%] text-center font-medium"
          >
            <span
              className={`relative block leading-[75px] text-[1.5em] text-center transition duration-500 ${
                nav_index === 4 ? "translate-y-[-10px]" : "translate-y-[20px]"
              }`}
            >
              {/*<ion-icon name="camera-outline"></ion-icon>*/}
              <IoMdSettings color="#222327" />
            </span>
            <span
              className={`absolute text-clr font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 4
                  ? "translate-y-[38px] opacity-1"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Settings
            </span>
          </Link>
        </li>
        <div
          className={`absolute top-[-50%] w-[70px] h-[70px] bg-indicator border-[6px] rounded-[50%] border-clr duration-500 before:content-[''] before:absolute before:top-[45%] before:left-[-22px] before:w-[20px] before:h-[20px] before:bg-transparent before:rounded-tr-[20px] shadow-indicator-before after:content-[''] after:absolute after:top-[45%] after:right-[-22px] after:h-[20px] after:w-[20px] after:bg-transparent after:rounded-tl-[20px] shadow-indicator-after`}
          style={{ transform: `translateX(${70 * nav_index}px)` }}
        ></div>
      </ul>
    </div>
  );
}

/*
https://moon-ga.github.io/next.js/3-how-to-style-copy/
https://careerly.co.kr/qnas/1068
*/
