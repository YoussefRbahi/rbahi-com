import Hero from "./components/Hero";

import "./App.css";
function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-auto  overflow-x-hidden text-slate-800 relative">
        <div className="gradient-bg h-screen overflow-hidden"></div>
        <div className="grid snap-center h-screen ">
          <Hero className="relative" />
        </div>
      </div>
    </>
  );
}

export default App;
