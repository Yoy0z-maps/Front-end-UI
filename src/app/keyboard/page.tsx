"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setActiveKeys((prevKeys) =>
        new Set(prevKeys).add(event.key.toUpperCase())
      );
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setActiveKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(event.key.toUpperCase());
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const getKeyStyle = (key: string) => {
    return activeKeys.has(key)
      ? "bg-active-key before:bg-active-key before:border-l before:border-b before:border-t before:border-active-key-before-border"
      : "bg-dark-gradient before:bg-key-before before:border-key-lb";
  };

  return (
    <div
      id="keyboard"
      className="flex justify-center items-center h-[100vh] gap-x-10 bg-tbackground"
    >
      {["Q", "W", "E", "R"].map((key) => (
        <div
          key={key}
          className={`relative inline-block w-[60px] h-[60px] py-[8px] px-[15px] rounded-[10px] overflow-hidden ${getKeyStyle(
            key
          )} shadow-key-shadow before:content-[''] before:absolute before:top-[5px] before:left-[4px] before:bottom-[10px] before:right-[8px] before:shadow-key-before before:rounded-[8px]`}
        >
          <i className="relative z-10 text-white opacity-75 font-normal">
            {key}
          </i>
        </div>
      ))}
    </div>
  );
}
