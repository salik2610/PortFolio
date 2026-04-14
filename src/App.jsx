import { useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


import { Navbar, Welcome, Dock, Home, BootScreen } from "#components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";

gsap.registerPlugin(Draggable);


const App = () => {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;