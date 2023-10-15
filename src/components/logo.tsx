import Link from "next/link";
import Image from "next/image";
import { rubik } from "styles/font";
import logoImage from "assets/images/logo.png";
import { ArrowUpCircle } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex space-x-2 lg:space-x-6 items-center">
        <div className="relative">
          <ArrowUpCircle className="text-purple-500 h-8 w-8" />
        </div>
        <div className={`uppercase logo ${rubik.className}`}>
          <span>up</span>
          <span className="logo--2">vote</span>
        </div>
      </div>
    </Link>
  );
}
