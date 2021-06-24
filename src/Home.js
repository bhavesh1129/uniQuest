import React from 'react';
import ReactDOM from 'react-dom';


export default function Home() {
    return (<>
        <p class="text-left text-5xl font-bold mt-10 ml-24 text-indigo-600" > Hello, user! </p>
        <div class="flex float-right w-1/4" >
            <ul >
                <li>
                    <div class="mb-2  mt-10" >
                        <button class="px-5 py-3 rounded-xl text-lg w-72 font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all" > Connect </button>
                    </div>
                </li>
                <li>
                    <div class="mb-2  mt-10" >
                        <button class="px-5 py-3 rounded-xl text-lg w-72 font-medium text-indigo-600 bg-white  border-2 border-indigo-600 focus:border-purple-200 transition-all" > My Asks </button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="flex flex-1 w-3/5 h-screen ml-20 mt-10 mb-10 rounded border-2 border-indigo-600" >
            <div class="flex mx-10 mt-10 text-indigo-600" >
                Feed here
            </div>
        </div>
    </>);
}