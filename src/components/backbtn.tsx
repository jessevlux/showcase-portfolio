import Link from "next/link";

export default function BackBtn() {
  return (
    <div className="relative">
      {/* Navigation Button */}
      <Link href="/" className="absolute top-8 left-8">
        <img
          src="/navbtn.svg"
          alt="Back to Home"
          className="w-12 h-12 hover:scale-110 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
