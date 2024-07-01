"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbleEllipsesSharp, IoPerson } from "react-icons/io5";

// npm i create-react-class
var React = require("react");
var createReactClass = require("create-react-class");

var Component = createReactClass({
  mixins: [],
  render() {
    return <Component />;
  },
});

export default function IsoMatric() {
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
    <div className="w-[400px] h-[70px] m-10 flex relative bg-white justify-center items-center rounded-[10px]">
      <ul className="flex w-[350px]">
        <li className="w-[70px] h-[70px] relative list-none z-[1]">
          <Link
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500] text-menu-black group"
          >
            <span className="relative block leading-[75px] text-[1.5em] group-hover:translate-y-[-35px] duration-500">
              {/*<ion-icon name="home-outline"></ion-icon>*/}
              <GoHomeFill />
            </span>
            <span className="absolute text-menu-black text-[0.75em] font-normal opacity-0 tracking-tighter duration-500 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-[10px]">
              Home
            </span>
          </Link>
        </li>
        <li className="w-[70px] h-[70px] relative list-none z-[1]">
          <Link
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500] text-menu-black group"
          >
            <span className="relative block leading-[75px] text-[1.5em] group-hover:translate-y-[-35px] duration-500">
              {/*<ion-icon name="person-outline"></ion-icon>*/}
              <IoPerson />
            </span>
            <span className="absolute text-menu-black text-[0.75em] font-normal opacity-0 tracking-tighter duration-500 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-[10px]">
              Profile
            </span>
          </Link>
        </li>
        <li className="w-[70px] h-[70px] relative list-none z-[1]">
          <Link
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500] text-menu-black group"
          >
            <span className="relative block leading-[75px] text-[1.5em] group-hover:translate-y-[-35px] duration-500">
              {/*<ion-icon name="chatbubble-outline"></ion-icon>*/}
              <IoChatbubbleEllipsesSharp />
            </span>
            <span className="absolute text-menu-black text-[0.75em] font-normal opacity-0 tracking-tighter duration-500 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-[10px]">
              Message
            </span>
          </Link>
        </li>
        <li className="w-[70px] h-[70px] relative list-none z-[1]">
          <Link
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500] text-menu-black group"
          >
            <span className="relative block leading-[75px] text-[1.5em] group-hover:translate-y-[-35px] duration-500">
              {/*<ion-icon name="camera-outline"></ion-icon>*/}
              <FaCamera />
            </span>
            <span className="absolute text-menu-black text-[0.75em] font-normal opacity-0 tracking-tighter duration-500 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-[10px]">
              Photos
            </span>
          </Link>
        </li>
        <li className="w-[70px] h-[70px] relative list-none z-[1]">
          <Link
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500] text-menu-black group"
          >
            <span className="relative block leading-[75px] text-[1.5em] group-hover:translate-y-[-35px] duration-500">
              {/*<ion-icon name="camera-outline"></ion-icon>*/}
              <IoMdSettings />
            </span>
            <span className="absolute text-menu-black text-[0.75em] font-normal opacity-0 tracking-tighter duration-500 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-[10px]">
              Settings
            </span>
          </Link>
        </li>
        <div className="absolute top-[-50%] w-[70px] h-[70px] bg-orange-500 rounded-full border-solid border-menu-black border-4 before:content-[' '] before:absolute before:top-[50%] before:left-[-20px] before:w-[20px] before:h-[20px] before:bg-transparent before:rounded-tr-[20px] before:shadow-menuShadow after:content-[' '] after:absolute after:top-[50%] after:right-[-20px] after:w-[20px] after:h-[20px] after:bg-transparent after:rounded-tl-[20px] after:shadow-menuShadow"></div>
      </ul>
    </div>
  );
}

/*
https://moon-ga.github.io/next.js/3-how-to-style-copy/
https://careerly.co.kr/qnas/1068
*/
