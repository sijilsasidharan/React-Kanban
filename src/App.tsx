import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import KanbanBoard from "./pages/KanbanBoard";
import SideBar from "./components/core/SideBar";

function App() {
  return (
    <>
      <SideBar />
      {/* <KanbanBoard /> */}
    </>
  );
}

export default App;
