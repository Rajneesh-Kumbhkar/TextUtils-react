import { CSSProperties } from "react";
import Navbar from "./componensts/Navbar";
import TextForm from "./componensts/TextForm";

function App() {
  return (
    <>
      {/* props withs the arugmuent */}
      <Navbar title="TextUtils" />
      {/* for default props  */}
      {/* <Navbar /> */}
      <div className="container">
        {/* Form  */}
        <TextForm heading="Write something" />
      </div>
    </>
  );
}

export default App;
