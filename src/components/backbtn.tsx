"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { saveScrollPosition } from "@/utils/scrollManager";

interface BackBtnProps {
  show?: boolean;
}

export default function BackBtn({ show = true }: BackBtnProps) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    saveScrollPosition();
    router.push("/", { scroll: false });
  };

  return (
    <Link
      href="/"
      id="navBtn"
      className="fixed top-8 left-8 z-50 transition-opacity duration-300"
      style={{ opacity: show ? 1 : 0 }}
      onClick={handleBack}
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
