import Cards2 from "./components/Cards";
import Cards1 from "./components/Cards1";
import Cards3 from "./components/Cards2";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-8">
      <Cards2 />
      <Cards1 />
      <Cards3 />
    </div>
  );
}

export default App;
