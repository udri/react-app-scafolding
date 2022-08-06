import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <h1>React app</h1>
    </div>
  );
};

root.render(<App tab="home" />);
