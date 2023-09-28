import Link from "next/link";
import Image from "next/image";
import { rubik } from "styles/font";
import logoImage from "assets/images/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex space-x-2 lg:space-x-6 items-center">
        <div className="relative">
          <Image src={logoImage} alt="logo" width={34} height={34} />
        </div>
        <div className={`uppercase logo ${rubik.className}`}>
          <span>click</span>
          <span className="logo--2">vote</span>
        </div>
      </div>
    </Link>
  );
}
