import { useState } from "react";

const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f1f5f3");
  const [buttonColor, setButtonColor] = useState(false);

  const mainStyle = {
    backgroundColor: backgroundColor,
    transition: "background-color 0.5s ease-in-out",
  };

  const colorObj = [
    "red",
    "orange",
    "green",
    "brown",
    "blue",
    "pink",
    "chocolate",
    "violet",
    "yellow",
    "indigo",
  ];
  const handleSimpColorChange = () => {
    // Generate a random color for the background
    // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const randomColor = Math.floor(Math.random() * colorObj.length);
    setBackgroundColor(colorObj[randomColor]);
    setButtonColor(true);
  };

  const handleHexColorChange = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <main style={mainStyle}>
      <div className="color">
        <h2>
          Background Color: <span>{backgroundColor}</span>
        </h2>
        <button
          className={`${
            backgroundColor === "pink" ? "btn_white" : buttonColor && "btn"
          }`}
          onClick={handleSimpColorChange}
        >
          Change Color
        </button>
      </div>
    </main>
  );
};

export default Main;
