import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo.tsx";
import Jason from "./sections/Jason.tsx";
import SecondVideo from "./sections/SecondVideo.tsx";
import Lucia from "./sections/Lucia.tsx";
import PostCard from "./sections/PostCard.tsx";
import Final from "./sections/Final.tsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />

      <PostCard />
      <Final />
    </main>
  );
};

export default App;
