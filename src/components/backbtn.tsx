"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackBtn() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="/"
      id="navBtn"
      className="fixed top-8 left-8 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
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
