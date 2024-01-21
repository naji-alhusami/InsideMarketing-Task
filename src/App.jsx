// import "./App.css";
import Home from "./components/Home/Home";
import ImportantCards from "./components/ImportantCarts/ImportantCards";
import Navbar from "./components/Navbar/Navbar";
import Recommendation from "./components/Recommendation/Recommendation";

function App() {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="bg-emerald-overlay"></div>
        <Navbar />
        <Home />
        <ImportantCards />
        <Recommendation />
      </div>
    </>
  );
}

export default App;
