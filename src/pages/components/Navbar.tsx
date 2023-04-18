import React from "react";

import { SunIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className="w-full bg-primaryDarkBlue">
      <div className="flex w-full items-center justify-between">
        <div className="relative h-[72px] w-[72px] rounded-r-3xl bg-primaryPurple">
          <div className="flex h-full w-full items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
              />
            </svg>
          </div>
        </div>

        <div className="flex">
          <SunIcon className="h-8 w-8 text-[#858BB2]" />
        </div>
      </div>
    </header>
  );
}
