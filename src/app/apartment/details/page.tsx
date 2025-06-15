"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Detailcom from "./_component/detailcom";

const Page = () => {
  // if (!apt) return <p>Apartment not found.</p>;
  return (
    <>
      <Suspense fallback={<p>Loading apartment details...</p>}>
        <Detailcom />
      </Suspense>
    </>
  );
};

export default Page;
