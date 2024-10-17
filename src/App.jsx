import "./App.css";
import MainPart from "./components/MainPart";
import AnimatedBg from "./components/animated-bg/AnimatedBg";
function App() {
  return (
    <>
      <div className="grid mt-0  text-white place-items-center">
        <div className="fixed top-0 left-0 -z-50 h-screen w-full bg-bgcolor">
          <AnimatedBg />
        </div>
        <div
          name="main"
          className={`grid transition-all duration-1000 delay-300 top-0 max-w-screen-2xl  min-h-screen opacity-100 z-50 visibleabsolute inset-0 mx-auto  px-6 py-12 md:px-12 md:py-0 lg:px-24 xl:px-48 lg:py-0 text-left font-normal text-primary `}
        >
          <MainPart />
        </div>
      </div>
    </>
  );
}

export default App;
