import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import bg from "./loginAnim.jpeg";
import logo from "./u1.png";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <>
<div>
  <section class="flex flex-col items-center h-screen md:flex-row ">
    <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
      <img
        src={bg}
        alt=""
        class="object-cover w-full h-full"
        width="100%"
        height="auto"
      />
    </div>
    <div class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
      <div class="w-full h-100">
        <a class="flex items-center w-32 mb-4 mt-10 font-medium text-blueGray-900 title-font md:mb-0">
          <div><img src={logo} className="w-14 h-10"></img></div>
          <h2 class="text-lg font-bold tracking-tighter text-black duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400">
            {" "}
            uniQuest{" "}
          </h2>
        </a>
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <h1 class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font">
          Log in to your account
        </h1>
        <form action="#" method="POST">
          <div>
            {/* <label class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Email Address</label> */}
            <input
            type="email"
            name="userEmail"
            value = {email}
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
              placeholder="Your Email "
              class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
            />
          </div>
          <div class="mt-4">
            {/* <label class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700">Password</label> */}
            <input
             type="password"
             name="userPassword"
             value = {password}
             placeholder="Your Password"
             id="userPassword"
             onChange = {(event) => onChangeHandler(event)}
              minlength="6"
              class="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform border-2 rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              required=""
            />
          </div>
          <div class="mt-2 text-right">
          <Link to="passwordReset" class="text-sm font-semibold leading-relaxed text-blueGray-700 hover:text-black focus:text-blue-700">
            Forgot Password?
          </Link>
          </div>
          <button
            onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
            class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
          >
            Log In
          </button>
        </form>
        <hr class="w-full my-6 border-blueGray-300" />
        <div class="flex justify-enter">
          <button
           onClick={() => {
            signInWithGoogle();
          }}
            type="button"
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
              <span class="ml-4"> Log in with Google </span>
            </div>
          </button>
          <button
            type="button"
            class="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:bg-black focus:bg-blueGray-100 hover:text-blue-500"
          >
            <div class="flex items-center justify-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </div>
          </button>
        </div>
        <p class="mt-8 text-center">
          Need an account?{" "}
          <Link to="signUp" class="font-semibold text-blue-500 hover:text-blue-700">
            Sign up here
          </Link>{" "}
        </p>
      </div>
    </div>
  </section>
</div>
</>
  );
        };
        export default SignIn;

    // <div className="mt-8">
    //   <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
    //   <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
    //     {/* {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} */}
    //     <form className="">
    //       <label htmlFor="userEmail" className="block">
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         className="my-1 p-1 w-full"
    //         name="userEmail"
    //         value = {email}
    //         placeholder="E.g: faruq123@gmail.com"
    //         id="userEmail"
    //         onChange = {(event) => onChangeHandler(event)}
    //       />
    //       <label htmlFor="userPassword" className="block">
    //         Password:
    //       </label>
    //       <input
    //         type="password"
    //         className="mt-1 mb-3 p-1 w-full"
    //         name="userPassword"
    //         value = {password}
    //         placeholder="Your Password"
    //         id="userPassword"
    //         onChange = {(event) => onChangeHandler(event)}
    //       />
//           <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
//             Sign in
//           </button>
//         </form>
//         <p className="text-center my-3">or</p>
//         <button
//           className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
//           onClick={() => {
//             signInWithGoogle();
//           }}
//         >
//           Sign in with Google
//         </button>
//         <p className="text-center my-3">
//           Don't have an account?{" "}
//           <Link to="signUp" className="text-blue-500 hover:text-blue-600">
//             Sign up here
//           </Link>{" "}
//           <br />{" "}
//           <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
//             Forgot Password?
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };



        