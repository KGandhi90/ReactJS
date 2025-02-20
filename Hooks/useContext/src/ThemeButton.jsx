import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black" }}>
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeButton;
