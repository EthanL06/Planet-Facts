import Navbar from "./components/Navbar/Navbar.jsx";
import Information from "./components/Information.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div id="information" className="sm:block">
        <Information />
      </div>
    </>
  );
}

export default App;
