import React from "react";
import { Link } from "react-router-dom";

function SlidebarOne() {
  return(<>
  
  {/* <div className="grid grid-rows-2 gap-9"> */}
  
  <div class="grid grid-rows-2 grid-flow-col w-11/12 h-32 rounded-sm  xs:w-0">
  <div class="flex flex-1 w-full h-10">
  <Link to="/users" className="bg-black w-full rounded-md text-center text-white font-semibold border-1 border-black ">Connect</Link>
  </div>
  <div class="flex flex-1 w-full h-10">
  <Link to="/RecentThreads" className="bg-black w-full rounded-md text-center text-white font-semibold border-1 border-black ">Recent</Link>
  </div>
  </div>
  {/* </div> */}
  </>);
}

export default SlidebarOne;
