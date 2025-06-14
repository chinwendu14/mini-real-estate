"use client";
import Image from "next/image";

import { towers } from "@/sharables/DummyData";
import { useRouter } from "next/navigation";
import { FLOOR_ROUTE } from "@/constants/route.constant";

export default function Home() {
  const router = useRouter();
  return (
    <section className="">
      <div className="min-h-screen  flex flex-col items-center justify-center gap-8 px-4 py-10">
        <h1 className="text-3xl font-bold ">Select a Tower</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {towers.map((tower) => (
            <div
              key={tower.id}
              onClick={() => router.push(`${FLOOR_ROUTE}?id=${tower.id}`)}
              className="cursor-pointer bg-white shadow-lg rounded-2xl p-2 flex flex-col items-center justify-center hover:bg-gray-100 transition w-full h-[350px]"
            >
              <h4 className=" my-3 font-bold text-center">{tower.name}</h4>
              <Image
                src={tower.img}
                alt="img"
                width={300}
                height={300}
                className=" h-50 w-100"
              />
              <p className="my-4 font-semibold text-lg">Select Tower</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
