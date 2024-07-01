import Link from "next/link";
import styles from "./styles.module.css";

export default function IsoMatric() {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <ul className="relative transform: skew-y-[-15deg]">
        <li className="relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-50 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500 after:shadow-2xl">
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 hover:transition-all"
          >
            Home
          </Link>
        </li>
        <li className="relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-40 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500">
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 transition-all"
          >
            About
          </Link>
        </li>
        <li className="relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-30 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500">
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 transition-all"
          >
            Servicec
          </Link>
        </li>
        <li className="relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-20 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500">
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 transition-all"
          >
            Portfolio
          </Link>
        </li>
        <li className="relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-10 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500">
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 transition-all"
          >
            Our Team
          </Link>
        </li>
        <li
          className={`relative list-none w-[200px] bg-slate-600 p-[15px] before:content-[''] before:absolute before:top-[-20px] before:w-[40px] before:h-full before:bg-slate-700 before:left-[-40px] before:skew-y-[45deg] after:content-[''] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-slate-600 after:skew-x-[45deg] after:origin-bottom z-0 hover:bg-isobg hover:translate-x-[50px] hover:before:bg-isohoverbefore hover:after:bg-isohoverafter transition duration-500 ${styles.customLastChild}`}
        >
          <Link
            href="#"
            className="block uppercase text-gray-500 tracking-tighter hover:text-gray-100 transition-all"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
