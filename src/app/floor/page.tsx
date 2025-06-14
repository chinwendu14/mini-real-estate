"use client";
import { APARTMENT_ROUTE } from "@/constants/route.constant";
import { Floors } from "@/sharables/DummyData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <h2 className="text-2xl font-semibold"> Select a Floor</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Floors.map((floor) => (
            <div
              key={floor.name}
              onClick={() => router.push(`${APARTMENT_ROUTE}`)}
              className="cursor-pointer bg-white rounded-xl p-4 text-center shadow hover:bg-gray-200"
            >
              <Image
                src={floor.img}
                alt={floor.name}
                width={300}
                height={300}
                className="h-50 w-100 md:w-100 transition-transform duration-300 hover:scale-95"
              />
              <h4 className="mt-4 text-primary font-semibold text-lg">
                {floor.name}
              </h4>
              <p className="mt-1  text-lg">{floor.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
