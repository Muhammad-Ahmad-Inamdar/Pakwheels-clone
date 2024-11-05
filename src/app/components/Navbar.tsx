import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-10">
      <div className="flex flex-col h-[100px] bg-black">
        <div className="flex w-[1200px] h-[34px] mx-[74.5px] border-b border-solid border-b-[rgb(48,47,46)] text-[14px] pr-[8px]">
          <div className="inline-flex items-center p-[9px]">
            <Image
              src="/phone.svg"
              alt="phone"
              width={20}
              height={20}
              priority
            />
          </div>
          <div className="text-white text-[14px] font-medium flex items-center">
            Download App via SMS
          </div>
          <div className="ml-auto flex items-center space-x-1">
            <span className="text-red-700 font-semibold">Urdu</span>
            <span className="text-[rgb(123,131,151)]">|</span>
            <span className="text-white">Sign Up</span>
            <span className="text-[rgb(123,131,151)]">|</span>
            <span className="text-white">Sign In</span>
          </div>
        </div>

        <div className="w-[1200px] h-[65px] mx-[74.5px] flex text-white mt-[6px]">
          <div className="mr-[70px] mb-[10px]">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={40}
              priority
            />
          </div>
          <div className="flex items-center text-[14px] space-x-[22px]">
            <span className="h-[55px] flex items-center">Used Cars&#9660;</span>
            <span className="h-[55px] flex items-center">New Cars&#9660;</span>
            <span className="h-[55px] flex items-center">Bikes&#9660;</span>
            <span className="h-[55px] flex items-center">
              Auto Store&#9660;
            </span>
            <span className="h-[55px] flex items-center">Videos&#9660;</span>
            <span className="h-[55px] flex items-center">Forums</span>
            <span className="h-[55px] flex items-center">Blog</span>
            <div className="h-[55px] flex flex-col items-center mr-[30px]">
              <Image
                src="/new.svg"
                alt="new"
                width={36}
                height={16}
                className="ml-[18px]"
              />
              <span>More&#9660;</span>
            </div>
            <button className="h-[40px] bg-red-700 text-white rounded font-semibold px-[22px]">
              Post an Ad&#9660;
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
