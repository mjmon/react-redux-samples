import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Counter />
      </div>
    </div>
  );
}

export default App;
