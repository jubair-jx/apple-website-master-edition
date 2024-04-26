import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Model from "./components/Model/Model";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default App;
