import { AiOutlineArrowUp } from "react-icons/ai";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ImportantCards from "./components/ImportantCarts/ImportantCards";
import Navbar from "./components/Navbar/Navbar";
import Recommendation from "./components/Recommendation/Recommendation";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <div className="bg-emerald-overlay"></div>
        <Navbar />
        <Home />
        <ImportantCards />
        <Recommendation />
        <Footer />
        {showButton && (
          <button
            onClick={scrollTop}
            className="fixed p-2 rounded-t-md border-3 mr-16 xs:mr-2 bg-black opacity-90 right-0 bottom-0"
          >
            <AiOutlineArrowUp className="text-white" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
