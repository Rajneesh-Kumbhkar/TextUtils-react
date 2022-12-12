import { useState } from "react";
import Alert from "./componensts/Alert";
import InfoTextUtils from "./componensts/InfoTextUtils";
import Navbar from "./componensts/Navbar";
import TextForm from "./componensts/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "#f5f5f5";
      document.body.style.backgroundColor = "#1e1e1e";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.color = "#1e1e1e";
      document.body.style.backgroundColor = "#f5f5f5";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        {/* props withs the arugmuent */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* for default props  */}
        {/* <Navbar /> */}
        <div className="container">
          {/* Form  */}

          {/* <InfoTextUtils /> */}
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Write something"
                    toggleMode={toggleMode}
                  />
                }
              ></Route>
              <Route
                exact
                path="/information"
                element={<InfoTextUtils mode={mode} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;

// "homepage": "https://rajneesh.github.io/TextUtils-react",
