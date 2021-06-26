import React from "react";

function Navbar() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600"></div>
            <span class="ml-3 text-xl font-bold">uniQuest</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900 font-bold">Home</a>
            <a class="mr-5 hover:text-gray-900 font-bold">About</a>
            <a class="mr-5 hover:text-gray-900 font-bold">Extra</a>
          </nav>
          <span>
            <form method="GET">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  class="py-2 text-sm text-black bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-grey-100 focus:text-black"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </form>
          </span>
          <span class="w-2"></span>
          <button class="px-5 py-2 rounded text-sm font-medium text-white bg-black hover:bg-white active:bg-grey-900 focus:outline-none hover:text-black border-2 border-black transition-all">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
