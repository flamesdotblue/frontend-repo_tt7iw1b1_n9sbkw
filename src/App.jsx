import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
    </div>
  );
}

export default App;
