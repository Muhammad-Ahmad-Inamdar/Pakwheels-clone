import Image from "next/image"
import Link from "next/link"
export default function F_Car(){
    return(
        <div className="bg-gray-200 h-full mt-10 pb-20">
                <div className="ml-[150px] mr-[150px]">
                    <h1 className="text-gray-800 font-semibold text-[22px] pt-[50px]">Featured New Cars</h1>
                    <div className="text-[14px] text-blue-500 text-end ">View All New Cars</div>
                        <div className="flex space-x-12 text-gray-800 text-[18px] mt-6  ">
                            <div>Popular</div>
                            <div>Upcoming</div>
                            <div>Newly Launched</div>
                    </div>
                    <div className="border-t border-gray-300 mx-auto mt-4 mb-6"></div>
                </div>
                <div className="flex place-content-center space-x-5 pb-5">
                <Link href='/car1'>
                    <div className="w-[250px] h-[290px]  bg-white ">
                        <button className="w-[250px] h-[250px]">
                            <Image className="" src="/corolla.jpg" alt="corolla" width={233} height={173.50} />
                            <div className="mt-7">
                            <h3 className="text-blue-800 font-semibold text-[16px]">Toyota Corolla</h3>
                            <p className="text-green-600 text-[14px]">PKR 23.5 - 30.5 lacs</p>
                            <div className="flex place-content-center items-center">
                            <p className="text-yellow-500 text-lg text-start">&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                            <p className="text-gray-500 text-[14px] ml-1">199 Review</p>
                            </div></div>
                        </button>
                    </div>
                    </Link>

                    <Link href='/car2'>
                    <div className="w-[250px] h-[290px]  bg-white ">
                        <button className="w-[250px] h-[250px]">
                            <Image className="" src="/suzuki.png" alt="corolla" width={233} height={173.50} />
                            <div className="mt-7">
                            <h3 className="text-blue-800 font-semibold text-[16px]">Suzuki Alto</h3>
                            <p className="text-green-600 text-[14px]">PKR 46.5 - 58.5 lacs</p>
                            <div className="flex place-content-center items-center">
                            <p className="text-yellow-500 text-lg text-start">&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                            <p className="text-gray-500 text-[14px] ml-1">456 Review</p>
                            </div></div>
                        </button>
                    </div>
                    </Link>

                    <Link href='/car3'>
                    <div className="w-[250px] h-[290px]  bg-white ">
                        <button className="w-[250px] h-[250px]">
                            <Image className="" src="/city.jpg" alt="corolla" width={233} height={173.50} />
                            <div className="mt-7">
                            <h3 className="text-blue-800 font-semibold text-[16px]">Honda City</h3>
                            <p className="text-green-600 text-[14px]">PKR 46.5 - 58.5 lacs</p>
                            <div className="flex place-content-center items-center">
                            <p className="text-yellow-500 text-lg text-start">&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                            <p className="text-gray-500 text-[14px] ml-1">622 Review</p>
                            </div></div>
                        </button>
                    </div>
                    </Link>
                    
                    <Link href='/car4'>
                    <div className="w-[250px] h-[290px]  bg-white ">
                        <button className="w-[250px] h-[250px]">
                            <Image className="" src="/civic.jpg" alt="corolla" width={233} height={173.50} />
                            <div className="mt-7">
                            <h3 className="text-blue-800 font-semibold text-[16px]">Honda Civic</h3>
                            <p className="text-green-600 text-[14px]">PKR 86.6 - 99.0 lacs</p>
                            <div className="flex place-content-center items-center">
                            <p className="text-yellow-500 text-lg text-start">&#9733;&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                            <p className="text-gray-500 text-[14px] ml-1">622 Review</p>
                            </div></div>
                        </button>
                    </div>
                    </Link>

                </div>
                
        </div>
    )
}