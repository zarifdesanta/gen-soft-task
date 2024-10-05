import "./App.css";
import BestSellingSection from "./components/BestSellingSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import MotoSection from "./components/MotoSection";
import Navbar from "./components/Navbar";
import SignedCollectionSection from "./components/SignedCollectionSection";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <HomeSection></HomeSection>

      <BestSellingSection></BestSellingSection>

      <SignedCollectionSection></SignedCollectionSection>

      <MotoSection></MotoSection>

      <Footer></Footer>
    </div>
  );
}

export default App;
