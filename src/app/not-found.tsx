import type { Viewport } from "next";
import Link from "next/link";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-white/70 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-[#191919] text-white rounded-full hover:bg-[#252525] transition-colors duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
