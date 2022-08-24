import React from "react";
import AskQuestion from "./AskQuestion.js";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import "./Home.css";
import SearchResults from "./SearchResults.js";
import { BrowserRouter, Route } from "react-router-dom";
import AddAnswer from "./AddAnswer.js";
import Topic from "./Topics.js";
import Users from "./Users.js";
import RecentThreads from "./RecentThreads.js";
class AppOne extends React.Component {
  state = {
    idCount: 28,
    questions: [
      {
        id: "Q1",
        title:
          "In campus placements of B.Tech CSE, what type of coding questions are asked at the coding round? Is it hard as competitive coding or easy to solve it or does it involve algorithms?",
        topic: "Placements",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A7", "A8"],
      },
      {
        id: "Q2",
        title:
          "How tough are the coding rounds during placements? What type of questions are asked?",
        topic: "Placements",
        date: "2021-06-26",
        name: "Abhinav Huria",
        answerIds: ["A9", "A10"],
      },
      {
        id: "Q3",
        title: "What all clubs are there in the college?",
        topic: "Clubs",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A11"],
      },
      {
        id: "Q4",
        title: "Can you tell me something regarding C2S2 Club?",
        topic: "Clubs",
        date: "2021-06-26",
        name: "Anshika Garg",
        answerIds: ["A12", "A13"],
      },
      {
        id: "Q5",
        title: "Is there any need/advantage of joining clubs?",
        topic: "Clubs",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A14", "A15"],
      },
      {
        id: "Q6",
        title: "Is there any benefit of joining UCA ?",
        topic: "Courses",
        date: "2021-06-26",
        name: "Radhika Goel",
        answerIds: ["A16", "A17", "A18", "A19"],
      },
      {
        id: "Q7",
        title: "Is there any benefit of joining DSC Club?",
        topic: "Clubs",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A20"],
      },
      {
        id: "Q8",
        title: "What are the average salary package?  ",
        topic: "Placements",
        date: "2021-06-26",
        name: "Aman Goyal",
        answerIds: ["A21", "A22"],
      },
      {
        id: "Q9",
        title:
          "Hi! I am 1st year B.E-CSE student.I want to know how to start with coding.",
        topic: "CSE",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A23"],
      },
      {
        id: "Q10",
        title:
          "I'm in B.Com 2nd Year and I want to become a CA.So what should I do? ",
        topic: "BBA/B.COM",
        date: "2021-06-26",
        name: "Ishika Garg",
        answerIds: ["A24"],
      },
      {
        id: "Q11",
        title:
          "I am currently in 3rd year of B.E.-CSE If I crack GATE 2022 then what will be the further procedure to take admission in IITs or NITs? Should I have to wait for graduation completion or Should I apply for IITs or NITs in 3rd year?",
        topic: "CSE",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A25"],
      },
      {
        id: "Q12",
        title:
          "I'm studying B.Arch. Is there any possible for write the gate exam In 4th yearbefore completion of course?",
        topic: "B.Arch",
        date: "2021-06-26",
        name: "Yash Bansal",
        answerIds: ["A26"],
      },
      {
        id: "Q13",
        title: "Is there any Sports Club in the University?",
        topic: "Sports",
        date: "2021-06-26",
        name: "Anonymous",
        answerIds: ["A27"],
      },
    ],
    answers: [
      {
        id: "A7",
        questionId: "Q1",
        response:
          "Usually in campus placement the interview will be easy as far as the company is not a product based.Coding will be there but just to print a pattern not much.Technical question will be mostly of oops and some basic sql query.If the company is product based then the technical knowledge should be little higher.Basic data structure must be known irrespective of any company.",
        date: "2021-06-26",
      },
      {
        id: "A8",
        questionId: "Q1",
        response:
          "The answer to this question depends on the type of companies that are visiting your campus.If the company is a service based and they have packages in around 5–6 lpa or lesser, there won't be tough questions. It will be mostly easy ones, for which you don't need to have competitive programming experience. Just basic interview preparation from some sites will work.But if the company is like Microsoft, Amazon, Google, codenation, Goldman type they are definitely going to ask you relatively quite tougher questions. Although the problems asked in interviews are little different from one's in typical competitive programming contests, but if you have good grasp on CP, then writing code in a timed environment is a cup of tea for you in most of the cases. I'll recommend just before the interviews practice few questions on leetcode, geeks for geeks for such companies, but in most of the cases you will be able to figure out the logic if you have done enough CP.",
        date: "2021-06-26",
      },
      {
        id: "A9",
        questionId: "Q2",
        response:
          "Coding rounds are easy to crack if you are comfortable with one language and can implement any of the data structures involved in the question. You should be able to write the code in less than 30 minutes so that you can debug and resolve test cases in the next 30 minutes.For preparation you should use interviewbit website for practise. that is truely awesome",
        date: "2021-06-26",
      },
      {
        id: "A10",
        questionId: "Q2",
        response:
          "The coding rounds during placements are not tough provided you are well versed with various type of questions and patterns followed by companies.For most of the companies, the coding round consist of question related to one of these topics-Linked lists,Trees,Arrays,Strings,General ad hoc implementation.Now the preparation is not actually difficult provided you know what to do. From personal experience what I have found out is thatCracking the coding interview by Gayle McDowell is one of the best resources for these coding rounds as it covers strategies to handle various types of questions from a vast variety of topics. Along with that it also tell us some of the typical interview questions asked in.most interviews.Geesforgeeks is also A very good resource for covering enormous amount of questions archived under the topics mentioned earlier..",
        date: "2021-06-26",
      },
      {
        id: "A11",
        questionId: "Q3",
        response:
          "There are many clubs in the college like Sports Club,Technical Clubs(like IEEE),C2S2,EBUZZ,MATRIX,SEAGULLS,Bit N Bytes",
        date: "2021-06-26",
      },
      {
        id: "A12",
        questionId: "Q4",
        response:
          "The C2S2 Club will look after four significant fields like drama,dance,art and social activities.",
        date: "2021-06-26",
      },
      {
        id: "A13",
        questionId: "Q4",
        response:
          "C2S2's mission is to help students unleash their potential in the co-curricular segments to foster,inculcate and nurture their hobbies.",
        date: "2021-06-26",
      },
      {
        id: "A14",
        questionId: "Q5",
        response:
          "As i am a student of 3rd year computer science engineering of chitkara university, so i can tell you some info in this context.Well you are curious to know about the joining of clubs in chitkara uni.See friend its not compulsory to join any club.If you are a hosteler and and you want to enjoy your college life then you can join these clubs.There are many clubs here like C2S2, bits n bytes, EPIC. The main benefits of joining these clubs is that you will be in touch with seniors, you will be in link with girls who also joined that particular club, By participating in different events organised by these clubs you can remove your stage fear. EPIC youth club is joined mostly by hostelers and all events organised by epic are held after the college time i.e after 5 pm.Let me clear that i am not in any club.According to me you should join any club and enjoy your first year in college. Try the auditions of C2S2 club..",
        date: "2021-06-26",
      },
      {
        id: "A15",
        questionId: "Q5",
        response:
          "No,I don't think it is necessary or needed to join any clubs. It's totally your choice whether you want to join or not. The advantage of these clubs is that you get to meet new people from the college of different fields. It's good if you want to have a big social circle.Just before joining any club ask it's previous members, about the club ,what do they do an all? If it suits your interest go for it unless it's a waste of money.This is totally my perspective. I don't favour any club because I like to spend my time with my laptop and my friends. Hope this helps. Don’t forget to upvote if this helps.",
        date: "2021-06-26",
      },
      {
        id: "A16",
        questionId: "Q6",
        response:
          "If you have interest in coding and are good coder too then you can go for UCA. Benefits are there - Chitkara University calls some extra companies for that batch in which only UCA students are allowed to sit. Furthermore, syllabus in UCA batch runs faster than the normal batch, you have to practice most of the things on your own , no spoon-feeding would be there and also placements for UCA batch starts earlier than the normal batch. But then it all depends on the personal skills because Chitkara can only call the company for the students rest is your own effort which would land you in the company or not because nowadays current batch 2015 - both UCA and NON-UCA are getting placed, infact NON-UCA much more. So whatever batch it is work on yourself and keep doing projects.",
        date: "2021-06-26",
      },
      {
        id: "A17",
        questionId: "Q6",
        response:
          "Yes , since i am in UCA batch, there are many benefits like you used to get more attention than any other batch ,UCA batch gets some extra courses which are used to taught by industry professionals and at the time of placement there are many companies which are only for the UCA students.",
        date: "2021-06-26",
      },
      {
        id: "A18",
        questionId: "Q6",
        response:
          "First of all you have to earn UCA not join…. Most of the time faculty who teaches UCA students are mind boggling and you will get a better environment in there which will make your understanding better… Most important thing is that you will get chance in many companies…due to considering you as cream of university…",
        date: "2021-06-26",
      },
      {
        id: "A19",
        questionId: "Q6",
        response:
          "I recently got a chance to visit the campus and interact with the UCA folks. This concept has been introduced very recently and I was amazed as well by the same.I won’t say if you don’t qualify for UCA you are not good, but if you do, do not skip the chance of getting into it as the University is putting so much efforts behind it to prepare you for the best.",
        date: "2021-06-26",
      },
      {
        id: "A20",
        questionId: "Q7",
        response:
          " Developer Students Club are community groups for students from any academic background in their undergraduate or graduate term. By joining a DSC, students build their professional and personal network, get access to Google Developer Resources, and work together to build solutions for local problems in a peer - to - peer learning environment",
        date: "2021-06-26",
      },
      {
        id: "A21",
        questionId: "Q8",
        response:
          "I have friends who have been placed at 10 lacs per anum to 20 lacs per anum. We are from the same college. Now the difference in people, the difference in their income is not because of the college but because of the values they hold for themselves and their time. If you want a good quality education then I think chitkara is a decent college. The only job for the college is to teach you and bring companies for the campus placements. The campus placement of the CU is very good. In my time, OYO, MMT, Myntra, Reliance and many other good companies came for placement.",
        date: "2021-06-26",
      },
      {
        id: "A22",
        questionId: "Q8",
        response:
          "Being a student of Chitkara Univeristy, I can assure you that if you get placed in a product based company coming to the campus, mind you who are not interested in Mass Recruitment, you can easily bag around 5–7 LPA.",
        date: "2021-06-26",
      },
      {
        id: "A23",
        questionId: "Q9",
        response:
          "You should look into the sites like HackerRank,HackerEarth, CodeChef ,GeeksforGeeks.Start coding more .Live with the basics,we generally want to learn more and tend to forget the basics . Keep a reference book and keep revisiting the basics.Try writing the code in different approaches.Make coding an everyday habit.Make a note of your learnings like best programming practices you have used because it helps in reusing your code in the future . It is better to have a soft copy of your learnings and do debug the errors.",
        date: "2021-06-26",
      },
      {
        id: "A24",
        questionId: "Q10",
        response:
          "First you will have to register yourself with ICAI. There are three exams that you need to pass, namely-CPT,IPCC and Finals.Only then you can qualify as a certified Chartered Accountant. ",
        date: "2021-06-26",
      },
      {
        id: "A25",
        questionId: "Q11",
        response:
          "See if you crack GATE in your 3rd year then also you have to wait to complete your graduation but by that time you can participate in the GATE Counselling and can reserve your seat in the required NITs/IITs or any other institution because third year students are also eligible for GATE. During third year after the declaration of your GATE result you can apply for different institutions through GATE counselling which is conducted by Common Offer Acceptance Portal (COAP) and Centralised Counselling for M.Tech/ M.Des (CCMT)  and if the seat is allotted to you and you accept the seat then also you will have to wait till your graduation gets completed but your seat will be reserved.",
        date: "2021-06-26",
      },
      {
        id: "A26",
        questionId: "Q12",
        response:
          "Yes, students who are in studying in 4th year are  eligible to give their gate exam.  I think you will be in 4 th year ,when you are applying for Gate.",
        date: "2021-06-26",
      },
      {
        id: "A27",
        questionId: "Q13",
        response:
          "In order to promote physical fitness among students, the Office of Academic Support – Students’ Activities, ASSA, has launched Sports Club OLYMPUS, which is open for all students of Chitkara University, Punjab.The club is active in the University and is dedicated at encouraging students to learn and actively participate in Sports related activities. CCA benefits are given to the students for the membership under the club.The vision of the club is to create a community enriched in a spirit to learn more and enhance the sportsmen ship among the students. The club is initiated in order to enable the students to reach their full potential as productive, responsible, healthy citizens of the nation.The mission of the club is to give opportunities to students to compete on logical, regional and at national level. The students unleash their potentials and level of leadership in a true sportsmen ship.",
        date: "2021-06-26",
      },
    ],
  };
  generateUniqueId(prefix) {
    const idCount = this.state.idCount;
    this.setState({ idCount: idCount + 1 });
    return `${prefix}${this.state.idCount}`;
  }
  addQuestion = ({ title, topic, description, name }) => {
    const id = this.generateUniqueId("Q");
    this.setState((prevState) => ({
      questions: [
        ...prevState.questions,
        {
          id: id,
          title,
          topic,
          description,
          date: new Date().toJSON().slice(0, 10),
          name,
          answerIds: [],
        },
      ],
    }));
  };
  addAnswer = (ans, questionId) => {
    const id = this.generateUniqueId("A");
    let questions = this.state.questions;
    questions.forEach((ques) => {
      if (ques.id === questionId) {
        ques.answerIds.push(id);
      }
    });
    this.setState((prevState) => ({
      answers: [
        ...prevState.answers,
        {
          id: id,
          questionId,
          response: ans,
          date: new Date().toJSON().slice(0, 10),
        },
      ],
    }));
  };

  render() {
    return (
      <>
        <div id="mainpage">
          <BrowserRouter>
            <NavBar setSearchTerm={this.setSearchTerm} />{" "}
            <Route path="/" exact render={() => <Home data={this.state} />} />
            <Route
              path="/askquestion"
              render={() => <AskQuestion onSubmit={this.addQuestion} />}
            />
            <Route
              path="/search"
              render={(props) => (
                <SearchResults questions={this.state.questions} {...props} />
              )}
            />{" "}
            <Route
              path="/answerpage"
              render={(props) => (
                <AddAnswer
                  data={this.state}
                  {...props}
                  addAnswer={this.addAnswer}
                />
              )}
            />{" "}
            <Route
              path="/topics"
              render={(props) => (
                <Topic questions={this.state.questions} {...props} />
              )}
            />{" "}
            <Route path="/users" render={() => <Users />} />{" "}
            <Route path="/recentthreads" render={() => <RecentThreads />} />{" "}
          </BrowserRouter>{" "}
        </div>{" "}
      </>
    );
  }
}
export default AppOne;
