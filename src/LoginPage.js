import React from 'react';

function LoginPage() {
    return (
        <>
            <div>
                <section class="flex flex-col items-center h-screen md:flex-row ">
                    <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
                        <img src="https://source.unsplash.com/1000x800/?nature,water" alt="" class="object-cover w-full h-full" />
                    </div>
                    <div class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
                        <div class="w-full h-100">
                            <a class="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-0">
                                <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600">
                                </div>
                                <h2 class="text-lg font-bold tracking-tighter text-black duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400"> uniQuest </h2>
                            </a>
                            <h1 class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">Log in to your account</h1>
                            <form class="mt-6" action="#" method="POST">
                                <div>
                                    {/* <label class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Email Address</label> */}
                                    <input type="email" name="" id="" placeholder="Your Email " class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 " />
                                </div>
                                <div class="mt-4">
                                    {/* <label class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Password</label> */}
                                    <input type="password" name="" id="" placeholder="Your Password" minlength="6" class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 " required="" />
                                </div>
                                <div class="mt-2 text-right">
                                    <a href="#" class="text-sm font-semibold leading-relaxed text-blueGray-700 hover:text-black focus:text-blue-700">Forgot Password?</a>
                                </div>
                                <button type="submit" class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Log In</button>
                            </form>
                            <hr class="w-full my-6 border-blueGray-300" />
                            <div class="flex justify-enter">
                                <button type="button" class="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ">
                                    <div class="flex items-center justify-center">
                                        <svg xmlnsXlink="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48">
                                            <defs>
                                                <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                            </defs>
                                            <clipPath id="b">
                                                <use xlinkHref="#a" overflow="visible"></use>
                                            </clipPath>
                                            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                        </svg>
                                        <span class="ml-4"> Log in with Google </span>
                                    </div>
                                </button>
                                <button type="button" class="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:bg-black focus:bg-blueGray-100 hover:text-blue-500">
                                    <div class="flex items-center justify-center">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <p class="mt-8 text-center">Need an account? <a href="#" class="font-semibold text-blue-500 hover:text-blue-700">Sign Up</a></p>
                        </div>
                    </div>
                </section>
            </div>
        </>)
}

export default LoginPage;
