import React, { useContext } from "react";
import QuestionTabs from "./QuestionTabs.js";
import SlidebarOne from "./SlidebarOne.js";
import Footer from "./Footer";
import "./Home.css";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import { auth } from "../firebase";

const Home = ({ data, addAnswer }) => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);
  let univ = email.split("@");
  let college = univ[1].split(".");
  if (college[0] === "gmail") {
    college[0] = "Unknown ";
  }
  return (
    <>
      <div id="homebg">
        <div
          id="showname"
          className="m-24 lg:m-24 md:m-12 lg:text-2xl font-bold bg-black text-white max-w-3xl h-10 rounded-md text-center shadow-md">
          Hello, {displayName} from {college[0].toUpperCase()} College / University!
        </div>
      
          <QuestionTabs addAnswer={addAnswer} data={data} />
          
        
        <Footer />
      </div>
    </>
  );
};
export default Home;
