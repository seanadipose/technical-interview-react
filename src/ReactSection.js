import { useState } from "react";

const somePromise = async function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("done");
    }, 1000);
  });
};

const submit = async function (text) {
  return new Promise((resolve) => {
    return resolve(text);
  });
};

export function ReactSection() {
  // implement the input for the text value
  const [text, setText] = useState();
  const [label, setLabel] = useState("not done");
  // set the label to the return value of the async function

  // return a loading state if there's no value

  // fix the a11y for the form

  // implement the submit fuction from above when the form is submitted

  // ** bonus implement a loading state when submit is activated
  return (
    <form class="ReactSection">
      <label>{label}</label>
      <input />
      <button>Submit</button>
    </form>
  );
}
