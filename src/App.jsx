import useDarkMode from "./hooks/useDarkMode";
import "./body.css";

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      style={{
        border: `1px solid ${darkMode ? "white" : "black"}`,
        background: "none",
        color: darkMode ? "white" : "black"
      }}
    >
      Toggle Dark Mode
    </button>
  );
}
