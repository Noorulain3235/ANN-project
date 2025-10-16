import React from "react";

export default function Cube() {
  return (
    <>
      {/* Hidden on mobile/tablet, visible only on large screens (desktop and above) */}
      <div className="hidden lg:block bg-black h-32 w-full">
        <div className="bg-[#141926]  h-10 flex">
          <div className="mt-10 bg-[#141926]  h-7 ml-3 w-20"></div>
          <div className="flex-col mt-10">
            <div className="bg-[#141926]  ml-3 h-5 w-5"></div>
            <div className="bg-[#141926]  h-7 w-20 ml-7"></div>
          </div>
          <div className="mt-10 bg-black h-7 w-32"></div>
          <div className="flex-col mt-10">
            <div className="bg-[#141926]  h-7 w-40"></div>
            <div className="bg-[#141926]  h-7 w-32 ml-2"></div>
            <div className="bg-[#141926]  h-7 w-20 ml-10"></div>
          </div>
          <div className="flex-col">
            <div className="bg-black h-7 w-16 mt-5"></div>
            <div className="bg-[#141926]  h-8 w-8"></div>
          </div>
          <div className="bg-[#141926]  h-7 w-16 mt-7"></div>
          <div className="flex-col">
            <div className="bg-black h-7 w-16 mt-5"></div>
            <div className="bg-[#141926]  h-14 w-16"></div>
          </div>
          <div className="flex-col mt-10">
            <div className="bg-[#141926]  h-7 w-40"></div>
            <div className="bg-[#141926]  h-6 w-20"></div>
            <div className="bg-[#141926]  h-8 w-8 ml-20"></div>
          </div>
          <div className="flex-col mt-10">
            <div className="bg-[#141926]  h-7 w-20"></div>
            <div className="bg-[#141926]  h-8 w-8"></div>
          </div>
          <div className="flex flex-row mt-10">
            {/* First column */}
            <div className="flex-col">
              <div className="bg-black h-7 w-32"></div>
              <div className="bg-black h-8 w-20 ml-6"></div>
            </div>

            {/* Second column */}
            <div className="flex-col ml-7">
              <div className="bg-[#141926]  h-7 w-16"></div>
              <div className="bg-[#141926]  h-8 w-20 -ml-5"></div>
            </div>
          </div>

          <div className="flex flex-row mt-10">
            {/* First column */}
            <div className="flex-col">
              <div className="bg-[#141926]  h-7 w-7"></div>
              <div className="bg-black h-7 w-7"></div>
            </div>

            {/* Second column */}
            <div className="flex-col">
              <div className="bg-black h-7 w-7"></div>
              <div className="bg-[#141926]  h-7 w-7"></div>
            </div>
          </div>

          <div className="bg-[#141926]  h-7 w-16 mt-10"></div>
        </div>
      </div>
    </>
  );
}
