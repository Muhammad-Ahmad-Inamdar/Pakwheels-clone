export default function Heros() {
  return (
    <div className="mt-[150px]">
      <div>
        <div className="flex justify-center items-center mt-[60px]">
          <div className="border-t border-gray-300 w-[250px] border-l h-[250px] "></div>
          <div className="mr-[280px] ml-[280px]"></div>
          <div className="border-t border-gray-300 w-[250px] border-r h-[250px]"></div>
        </div>
        <div className="border-b border-gray-300 mx-auto ml-[153px] mr-[153px]"></div>
      </div>

      <div className="mt-[-285px]">
        <div className="h-[36px] pl-[20px] pr-[20px] text-[rgb(67,67,67)] text-[22px] font-semibold text-center mt-4">
          Sell Your Car on PakWheels and Get the Best Price
        </div>
        <div className="flex justify-center mt-1">
          <div className="">
            <div className="text-[18px] font-bold text-blue-900 mb-4 ">
              Post your Ad on PakWheels
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Post your
              Ad for Free in 3 Easy Steps
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Get
              Genuine offers from Verified Buyers
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Sell your
              car Fast at the Best Price
            </div>
            <div className="mt-4">
              {" "}
              <button className=" bg-red-700 h-[50px] w-[190px] rounded-lg text-white font-normal">
                Post Your Ad
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="ml-[100px] mt-[18px] mr-[100px] place-content-center border-l h-20 border-gray-300 "></div>
            <div className="text-center text-gray-300 font-semibold text-[20px]">
              OR
            </div>
            <div className="ml-[100px] mb-[18px] mr-[100px] place-content-center border-l h-20 border-gray-300 "></div>
          </div>

          <div>
            <div className="text-[16px] font-bold text-blue-900 mb-4">
              Try PakWheels Sell It For Me
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Dedicated
              Sales Expert to Sell your Car
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Get
              Genuine offers from Verified Buyers
            </div>
            <div className="flex ">
              <div className="text-green-700 mr-2 mb-1">&#10004;</div>Sell your
              car Fast at the Best Price
            </div>
            <div className="mt-4  ">
              {" "}
              <button className=" bg-blue-700 h-[50px] w-[190px] rounded-lg text-white font-normal">
                Reister Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
