import Contact from "./Contact";
import MrWhinkerson from "/images/mr-whiskerson.png"
import fluffykins from "/images/fluffykins.png"
import felix from "/images/felix.png"
import pumpkin from "/images/pumpkin.png"
import Jokes from "./Jokes";
import "./App.css";

function App() {
  return (
    <>
      <Contact
        img={MrWhinkerson}
        name="Mr. Whiskerson"
        contact="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        contact="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        contact="(212) 555-3456"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        contact="(212) 555-5678"
        email="pumpkin@scrimba.com"
      />

      <Jokes setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."/>
      <Jokes setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Jokes setup="Why don't pirates travel on mountain roads?" punchline="Scurvy."/>
      <Jokes setup="Why do bees stay in the hive in the winter?" punchline="Swarm."/>
      
    </>
  );
}

export default App;
