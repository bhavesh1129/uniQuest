import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import bg from "./loginAnim.jpeg";
import logo from "./u1.png";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  
  };

  return (
    <>
     <section class="flex flex-col items-center h-screen md:flex-row ">
    
       <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
      <img
        src={bg}
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
    
    <div class="flex w-full h-screen bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
      <div class="w-full h-100">
      <a class="flex items-center w-32  mt-10 font-medium text-blueGray-900 title-font md:mb-0">
      <div><img src={logo} className="w-14 h-10"></img></div>
          <h2 class="text-lg font-bold tracking-tighter text-black duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400">
            uniQuest{" "}
          </h2>
        </a>
      <h1 class="mt-4 ml-4 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">Sign Up</h1>
      <div class=" mx-auto w-full md:w-full rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form action="#" method="POST">
          <input
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="Display Name"
            id="displayName"
            onChange={event => onChangeHandler(event)}
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
          />
          
          {/* <label htmlFor="userEmail" className="block">
            Email:
          </label> */}
          <input
            type="email"
  
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="Your Email "
            id="userEmail"
            onChange={event => onChangeHandler(event)}
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
          />
          {/* <label htmlFor="userPassword" className="block">
            Password:
         </label> */}
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
          />
          <button
           class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          class="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black hover:text-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
        >
           <div class="flex items-center justify-center">
              <svg
                xmlnsXlink="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                class="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  ></path>
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible"></use>
                </clipPath>
                <path
                  clip-path="url(#b)"
                  fill="#FBBC05"
                  d="M0 37V11l17 13z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                ></path>
              </svg>
              <span class="ml-4"> Sign up with Google </span>
            </div>
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
   </div></div>
   </section>
    </>
  );
};

export default SignUp;
