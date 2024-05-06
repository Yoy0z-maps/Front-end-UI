import Link from "next/link";

export default function Home() {
  return (
    <div>
      <li>
        <Link href="/isometric">Isometric Hover Menu</Link>
      </li>
      <li>
        <Link href="/magicnav">Magic Navigation Menu Indicator</Link>
      </li>
    </div>
  );
}
