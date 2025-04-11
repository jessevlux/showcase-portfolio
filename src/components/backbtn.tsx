"use client";

import Link from "next/link";
import Image from "next/image";

interface BackBtnProps {
  show?: boolean;
}

export default function BackBtn({ show = true }: BackBtnProps) {
  return (
    <Link
      href="/"
      id="navBtn"
      className="fixed top-8 left-8 z-50 transition-opacity duration-300"
      style={{ opacity: show ? 1 : 0 }}
    >
      <Image
        src="/navbtn.svg"
        alt="Back to home"
        width={32}
        height={32}
        className="w-12 h-12"
      />
    </Link>
  );
}
