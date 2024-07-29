import { useEffect ,useState} from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import  { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  const lightTheme = () => {
    setthemeMode("light");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* cards */}
            <Card />
          
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
