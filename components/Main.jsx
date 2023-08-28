import { useEffect, useState } from "react";

const Main = ({ simple, hex, backgroundColor, setBackgroundColor }) => {
  const [buttonColor, setButtonColor] = useState(false);

  // Reset the background color when simple or hex is true
  useEffect(() => {
    if (simple || hex) {
      setBackgroundColor("#f1f5f3");
      setButtonColor(false);
    }
  }, [simple, hex]);

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
    setBackgroundColor(randomColor);
    setButtonColor(true);
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
          onClick={
            simple
              ? handleSimpColorChange
              : hex
              ? handleHexColorChange
              : handleSimpColorChange
          }
        >
          Change Color
        </button>
      </div>
    </main>
  );
};

export default Main;
