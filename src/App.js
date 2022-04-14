import "./styles.css";
import { useState, useEffect } from "react";
import { JavascriptSection } from "./JavascriptSection";
import { ReactSection } from "./ReactSection";
import { CssSection } from "./CssSection";

export default function App() {
  const initial = localStorage.getItem("page") ?? 0;
  const [page, setPage] = useState(initial);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const pages = [JavascriptSection, ReactSection, CssSection];
  const Component = pages[page];
  return (
    <div className="App">
      <h1>{Component.name}</h1>
      <div className="page-controls">
        {page !== "css" ? (
          pages.map((component, index) => (
            <button onClick={() => setPage(index)}>{component.name}</button>
          ))
        ) : (
          <></>
        )}
      </div>
      <Component />
    </div>
  );
}
