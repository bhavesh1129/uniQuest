import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
