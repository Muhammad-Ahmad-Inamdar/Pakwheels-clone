import Image from "next/image";
import Link from "next/link";
export default function Car11() {
  return (
    <div className="h-screen bg-blue-100 mt-24 pt-4">
      <h1 className="text-black font-bold text-[24px] underline text-center underline-offset-1	">
        Toyota Corolla Price in Pakistan, Images, Reviews & <br />
        Speces
      </h1>
      <div className="flex mt-6 place-content-center">
        <Image src="/corolla.jpg" alt="corolla" height={300} width={300} />
      </div>

      <div className="flex flex-row mt-6 place-content-center space-x-4 align-middle">
        <div className="flex items-center text-white text-[10px] pl-4 pr-4 h-[40px] rounded-md bg-blue-600">
          Book a test drive
        </div>
        <div className="flex items-center border-[1px] border-blue-300 text-blue-400 text-[10px] pl-4 pr-4 h-[40px] rounded-md bg-white">
          Request Bank Finance
        </div>
        <div className="flex items-center border-[1px] border-blue-300 text-blue-400 text-[10px] pl-4 pr-4 h-[40px] rounded-md bg-white">
          Visit Place
        </div>
        <div className="flex items-center border-[1px] border-blue-300 text-blue-400 text-[10px] pl-4 pr-4 h-[40px] rounded-md bg-white">
          Car Inspection
        </div>
      </div>

      <div className="mt-4 text-center text-[14px] font-semibold">
        Vehicle Description
      </div>

      <div className="flex flex-row place-content-center space-x-3 mt-2 text-[10px]">
        <div className="flex flex-row">
          <p className="font-bold">Number of Doors </p> <p>&nbsp;4</p>
        </div>
        <div className="flex flex-row">
          <p className="font-bold">Engine</p> <p>&nbsp;1800 CC</p>
        </div>
        <div className="flex flex-row">
          <p className="font-bold">Driven</p> <p>&nbsp; 9,5000 KM</p>
        </div>
        <div className="flex flex-row">
          {" "}
          <p className="font-bold">Condition </p>
          <p>&nbsp;8.5 / 10</p>{" "}
        </div>
        <div className="flex flex-row">
          <p className="font-bold">Suspension Type</p>{" "}
          <p>&nbsp;Soft Suspension</p>
        </div>
      </div>

      <div className="flex flex-row place-content-center mt-2 space-x-2 ml-[-200px] text-[10px] ">
        <div className="flex flex-row">
          <p className="font-bold">Driven</p> <p>&nbsp; 9,5000 KM</p>
        </div>
        <div className="flex flex-row">
          {" "}
          <p className="font-bold">Condition </p>
          <p>&nbsp;8.5 / 10</p>{" "}
        </div>
        <div className="flex flex-row">
          <p className="font-bold">Suspension Type</p>{" "}
          <p>&nbsp;Soft Suspension</p>
        </div>
      </div>

      <p className="text-green-600 font-normal text-[18px] mt-1 text-center uppercase">
        pkr 50,00,000
      </p>
      <div className="mt-4 w-full flex place-content-center">
        {" "}
        <Link href="/checkout">
          {" "}
          <button className="w-[120px] h-[35px] text-white text-[9px] rounded-md bg-blue-800">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
