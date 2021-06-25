import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import Users from "./Users";
import RecentThreads from "./RecentThreads";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Navbar />
      <Home />
      <Users/>
      <RecentThreads/>
      <Footer />
    </div>
  );
}

export default App;
