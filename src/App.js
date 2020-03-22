import React, { useRef, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [cursorCords, setCursorCords] = React.useState({ x: 0, y: 0 });
  useEffect(props => {
    document.addEventListener("mousemove", e => {
      // setCursorCords({ x: e.pageX, y: e.pageY });
    });
  });
  return (
    <>
      <div className="cursor" />
      <Home />
    </>
  );
}

export default App;
