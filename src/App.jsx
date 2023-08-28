import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f1f5f3");
  const [simple, setSimple] = useState(false);
  const [hex, setHex] = useState(false);

  return (
    <>
      <Header simple={simple} hex={hex} setSimple={setSimple} setHex={setHex} />
      <Main
        simple={simple}
        hex={hex}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
    </>
  );
}

export default App;
