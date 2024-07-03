"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbleEllipsesSharp, IoPerson } from "react-icons/io5";
import styles from "./styles.module.css";

export default function Magic_Two() {
  const [nav_index, setIndex] = useState(0);

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
              className={`absolute text-white font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 0
                  ? "translate-y-[25px] opacity-1 bg-clr px-[4px] py-[7px] rounded-[12px] font-normal"
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
              className={`absolute text-white font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 1
                  ? "translate-y-[38px] opacity-1 bg-clr px-[4px] py-[7px] rounded-[12px] font-normal"
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
              className={`absolute text-white font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 2
                  ? "translate-y-[38px] opacity-1 bg-clr px-[4px] py-[7px] rounded-[12px] font-normal"
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
              className={`absolute text-white font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 3
                  ? "translate-y-[38px] opacity-1 bg-clr px-[4px] py-[7px] rounded-[12px] font-normal"
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
              className={`absolute text-white font-normal text-[.75em] tracking-[.05em] transition duration-500 ${
                nav_index === 4
                  ? "translate-y-[38px] opacity-1 bg-clr px-[4px] py-[7px] rounded-[12px] font-normal"
                  : "translate-y-[50px] opacity-0"
              }`}
            >
              Settings
            </span>
          </Link>
        </li>
        <div
          className={`absolute top-[-35px] w-[70px] h-[70px] bg-white rounded-[50%]  duration-500 ${styles.indicator_two}`}
          style={{ transform: `translateX(${70 * nav_index}px)` }}
        ></div>
      </ul>
    </div>
  );
}
