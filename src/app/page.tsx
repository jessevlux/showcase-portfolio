import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-5 mx-[70px] h-screen">
      <div className="col-span-12 h-[50vh] flex items-center justify-center">
        <h1 className="text-center font-['Syne'] font-extrabold text-[50px]">
          JESSE VAN LUXEMBURG
        </h1>
      </div>
      <div className="col-span-12 h-[50vh] grid grid-cols-2 gap-5">
        <div className="bg-[#252525]"></div>
        <div className="bg-[#252525]"></div>
      </div>
    </main>
  );
}
