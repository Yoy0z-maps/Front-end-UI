"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./mag.css";

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
    <div>
      <ul>
        <li>
          <Link href="#">
            <span></span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span></span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span></span>
            <span>Message</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span></span>
            <span>Photos</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span></span>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

https://moon-ga.github.io/next.js/3-how-to-style-copy/
https://careerly.co.kr/qnas/1068