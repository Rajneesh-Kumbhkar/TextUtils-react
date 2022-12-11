import { useState } from "react";
import InfoTextUtils from "./componensts/InfoTextUtils";
import Navbar from "./componensts/Navbar";
import TextForm from "./componensts/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1e1e1e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
    }
  };

  return (
    <>
      {/* props withs the arugmuent */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* for default props  */}
      {/* <Navbar /> */}
      <div className="container">
        {/* Form  */}
        <TextForm heading="Write something" toggleMode={toggleMode} />
        <InfoTextUtils />
      </div>
    </>
  );
}
export default App;
