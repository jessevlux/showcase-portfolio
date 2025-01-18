import Link from "next/link";
import Image from "next/image";

export default function BackBtn() {
  return (
    <Link
      href="/"
      id="navBtn"
      className="fixed top-8 left-8 z-50 transition-opacity duration-300"
    >
      <Image
        src="/back.svg"
        alt="Back to home"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    </Link>
  );
}
