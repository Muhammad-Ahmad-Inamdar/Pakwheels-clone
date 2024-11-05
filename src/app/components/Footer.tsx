import Image from "next/image";
export default function Footer() {
  return (
    <div className="h-[200px] mt-8 bg-gray-700">
      <div className="flex flex-col ml-20 pt-5 items-center ">
        <h1 className="text-white  font-semibold text-[22px]">Follow Us</h1>
        <div className="flex flex-row space-x-3">
          <div className="bg-white h-8 w-8 rounded-3xl mt-4">
            <Image
              src="/5.svg"
              alt="5"
              width={100}
              height={100}
              className="object-center"
            ></Image>
          </div>
          <div className="bg-white h-8 w-8 rounded-3xl mt-4">
            <Image
              src="/1.png"
              alt="5"
              width={50}
              height={50}
              className="object-center"
            ></Image>
          </div>
          <div className="bg-white h-8 w-8 rounded-3xl mt-4">
            <Image
              src="/2.png"
              alt="5"
              width={50}
              height={50}
              className="object-center"
            ></Image>
          </div>
          <div className="bg-white h-8 w-8 rounded-3xl mt-4">
            <Image
              src="/3.svg"
              alt="5"
              width={50}
              height={50}
              className="object-center"
            ></Image>
          </div>
          <div className="bg-white h-8 w-8 rounded-3xl mt-4">
            <Image
              src="/4.svg"
              alt="5"
              width={50}
              height={50}
              className="object-center"
            ></Image>
          </div>
        </div>

        <div className="flex flex-row mt-4">
          <input
            className="placeholder h-[30px] border rounded w-[160px] bg-white flex text-center text-[14px]"
            placeholder="name@gmail.com"
          />
          <button className="bg-green-600 h-[30px] w-[80px]  text-white text-[12px]">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
}
