"use client";
import { apartments } from "@/sharables/DummyData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const Page = () => {
  const params = useSearchParams();

  // const id = useSearchParams();
  // const aptId = id.get("id");

  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(params.get("id"));
  }, [params]);

  const apt = apartments.find((a) => a.id === id);

  // if (!apt) return <p>Apartment not found.</p>;
  return (
    <>
      <Suspense fallback={<p>Loading apartment details...</p>}>
        <div className=" p-3 min-h-screen flex flex-col items-center justify-center p-4">
          <h4 className="text-2xl text-primary font-bold mb-4">
            Apartment Layout Details
          </h4>
          <div className="bg-white rounded-xl shadow p-4">
            <Image
              src={`${apt?.thumbnail}`}
              alt={`Layout`}
              width={300}
              height={128}
              className="w-full max-w-md "
            />

            <div className="mt-4 text-lg">
              <p>
                <strong>Area:</strong> {apt?.area}
              </p>
              <p>
                <strong>Type:</strong> {apt?.unitType}
              </p>
              <p>
                <strong>Rooms:</strong> {apt?.rooms}
              </p>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Page;
