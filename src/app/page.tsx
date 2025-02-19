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
      <li>
        <Link href="/cube">3D Cube Animation</Link>
      </li>
      <li>
        <Link href="/threedslider">3D Image Slider</Link>
      </li>
      <li>
        <Link href="/parallax">Parallax Scrolling Page</Link>
      </li>
      <li>
        <Link href="/wave">Wave Animation</Link>
      </li>
      <li>
        <Link href="/eye">Eyes Follow Mouse Cursor</Link>
      </li>
      <li>
        <Link href="/box">Box Hover Effects</Link>
      </li>
      <li>
        <Link href="/rotation">Rotation</Link>
      </li>
      <li>
        <Link href="/canvas">Canvas</Link>
      </li>
      <li>
        <Link href="/card">Card</Link>
      </li>
      <li>
        <Link href="/keyboard">Keyboard</Link>
      </li>
    </div>
  );
}
