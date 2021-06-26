import React from "react";

export default function Home() {
  return (
    <>
      <p class="text-left text-5xl font-bold mt-10 ml-24 text-black">
        Hello, user!
      </p>
      <div class="flex float-right w-1/4">
        <ul>
          <li>
            <div class="mb-2  mt-10">
              <button class="px-5 py-3 rounded-xl text-lg w-72 font-medium text-white hover:text-black bg-black hover:bg-white active:bg-grey-900 focus:outline-none border-2 border-black focus:border-black transition-all">
                Connect
              </button>
            </div>
          </li>
          <li>
            <div class="mb-2  mt-10">
              <button class="px-5 py-3 rounded-xl text-lg w-72 font-medium text-black bg-white hover:bg-black hover:text-white border-2 border-black focus:border-purple-200 transition-all">
                My Asks
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-1 w-3/5 h-screen ml-20 mt-10 mb-10 rounded border-2 border-black">
        <div class="flex mx-10 mt-10 text-black">Feed here</div>
      </div>
    </>
  );
}
