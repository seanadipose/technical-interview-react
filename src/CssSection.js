import { useState } from "react";
import "./CssSection.css";

export function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/products">Our Products</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export function List() {
  /* These list items are all different sizes, but 
      we want them to be displayed as three equal sized columns, 
      no matter what content is in each item. */
  return (
    <ul className="List">
      <li>I am small</li>
      <li>I have more content than the very small item.</li>
      <li>
        I have lots of content. So much content that I don't know where it is
        all going to go. I'm glad that CSS is pretty good at dealing with
        situations where we end up with more words than expected!
      </li>
    </ul>
  );
}

export function CenterMe() {
  return (
    <div className="CenterMe">
      <div className="child">Center me.</div>
    </div>
  );
}

export function CssSection() {
  const [index, setIndex] = useState(0);
  const components = [Navbar, List, CenterMe];
  const Component = components[index];
  return (
    <div className="CssContainer">
      <Component />
      <div className="controls">
        {components.map((component, index) => (
          <button className="btn" key={index} onClick={() => setIndex(index)}>
            {component.name}
          </button>
        ))}
      </div>
    </div>
  );
}
