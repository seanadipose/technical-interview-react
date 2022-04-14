function Results({ label, value }) {
  return (
    <div className="result">
      <div className="label">{label}</div>

      <div className="value">{value}</div>
    </div>
  );
}

export function JavascriptSection() {
  const props = {
    username: "admin",
    password: "123456",
    email: "admin@example.com"
  };
  /** replace these with destructuring assignment */
  const email = "not set";
  const username = "not set";
  /** remove all falsy values from this array */
  const falsyArray = [false, null, 1, 5, undefined];
  const truthyArray = falsyArray;
  /** Flatten this bi-directional array */
  const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
  const biDimensionalArrResult = biDimensionalArr;
  /** Flatten tthis multi dimentional array */
  const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
  const multiArrayResult = multiDimensionalArr;

  var pattern = /([A-Z])\w+/g;
  /** Implement this regex to evaluate string 'How are you'  */
  const hasPattern = false;

  /** Write a promise that returns a message of 'I'm done' after 1 second */

  return (
    <div className="JavascriptSection">
      <Results label="username" value={username} />
      <Results label="email" value={email} />

      <Results
        label="Falsy Array"
        value={truthyArray.map(
          (value, index) =>
            (value ? "truthy" : "falsy").concat(
              index < truthyArray.length - 1 ? ", " : ""
            ) //
        )}
      />
      <Results
        label="Bi Dimensional Array"
        value={biDimensionalArrResult.map((value, index) => (
          <span key={index + 1}>{value}</span>
        ))}
      />
      <Results
        label="MultiDimentional Array"
        value={multiDimensionalArr.map((value, index) => (
          <span key={index + 1}>{value}</span>
        ))}
      />

      <Results label="Regex Result" value={hasPattern.toString()} />
    </div>
  );
}
