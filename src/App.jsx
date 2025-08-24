import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <main className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </main>
  );
};

export default App;
