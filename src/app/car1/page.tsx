import Image from "next/image";
import Link from "next/link";
export default function Car1() {
  return (
    <div className="h-screen bg-blue-100 mt-24 pt-4">
      <h1 className="text-black font-bold text-[24px] underline text-center underline-offset-1	">
        Toyota Corolla Price in Pakistan, Images, Reviews & <br />
        Speces
      </h1>
      <div className="flex mt-6 place-content-center">
        <Image src="/corolla.jpg" alt="corolla" height={300} width={300} />
      </div>
      <div className="mt-4 text-[10px]">
        <p className="ml-[50px] mr-[50px] text-center text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in
          aliquid adipisci corrupti aspernatur natus quod, quisquam ad,
          obcaecati at dignissimos. Minima quidem, officia quisquam nemo
          aspernatur veritatis, itaque animi reprehenderit nisi cupiditate
          dignissimos est ab in pariatur tempora nam qui blanditiis cum at!
          Culpa numquam adipisci accusamus! Dolorem ut molestias cum illo,
          consequuntur repellendus praesentium ea delectus ab dolore sapiente
          dignissimos, aliquid dolor modi inventore obcaecati quo ad eveniet!
          Aliquid, error recusandae suscipit ab dignissimos accusamus ipsum
          obcaecati fuga perspiciatis debitis dolore soluta architecto totam
          quae exercitationem officiis, vel sapiente voluptatem quas minus.
          Sequi, quod dolorem. Repudiandae, libero necessitatibus?
        </p>
      </div>
      <p className="text-green-600 font-normal text-[20px] mt-6 text-center uppercase">
        pkr 50,00,000
      </p>
      <div className="mt-10 w-full flex place-content-center">
        {" "}
        <Link href="/car11">
          {" "}
          <button className="w-[150px] h-[50px] text-white text-sm rounded-lg bg-blue-800">
            Click to View More
          </button>
        </Link>
      </div>
    </div>
  );
}
