import Link from "next/link"
export default function Checkout(){
    return(
        <div className="h-screen bg-blue-100 mt-12 pt-12" >
            <div className="flex flex-col justify-center">
            <div className="flex justify-center pt-6"><h1 className="font-bold text-[36px]">Enter your Details</h1></div>

            <div className="mt-36 flex flex-col justify-center items-center space-y-3">
                <input className="placeholder border h-[35px] w-[300px] pl-2 border-gray-100 text-[12px]"placeholder="Enter Your Name" />
                <input className="placeholder border h-[35px] w-[300px] pl-2 border-gray-100 text-[12px]"placeholder="Enter Your Email" />
                <input className="placeholder border h-[35px] w-[300px] pl-2 border-gray-100 text-[12px]"placeholder="Card Number" />
                <input className="placeholder border h-[35px] w-[300px] pl-2 border-gray-100 text-[12px]"placeholder="Address" />
             <div className="pt-8"><Link href='/thank_you'><button className="h-[35px] w-[100px] bg-blue-700 text-center text-white rounded-r-sm text-[10px]">Place Your Order</button></Link></div>
             </div>

         </div>
        </div>
    )
}