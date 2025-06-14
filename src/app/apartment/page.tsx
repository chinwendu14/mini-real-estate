"use client";
import { APARTMENT_DETAILS_ROUTE } from "@/constants/route.constant";
import { apartments } from "@/sharables/DummyData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen p-4">
        <h3 className="text-xl font-bold text-center mb-4">
          Apartment Layouts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              onClick={() =>
                router.push(`${APARTMENT_DETAILS_ROUTE}?id=${apt.id}`)
              }
              // inset-0
              className="relative
              hover:bg-gray-200
              inset-0 group bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
            >
              <div className="absolute bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl" />

              <Image
                src={apt.thumbnail}
                alt={`${apt.rooms}`}
                width={300}
                height={128}
                className="relative z-10 w-full h-32 object-cover rounded-md transform group-hover:scale-105 transition-transform"
              />

              <div className="relative z-10 my-2 text-sm">
                <p>
                  <strong>Area:</strong> {apt.area}
                </p>
                <p>
                  <strong>Type:</strong> {apt.unitType}
                </p>
                <p>
                  <strong>Rooms:</strong> {apt.rooms}
                </p>
              </div>
              <p className="my-2 text-primary">View details</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
