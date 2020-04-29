import React from "react";
import { Radio } from "dnb-ui-lib";
import "dnb-ui-lib/style";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Radio.Group
        label="Radio Group:"
        on_change={({ value }) => {
          console.log("on_change", value);
        }}
        value="first"
      >
        <Radio label="First" value="first" />
        <Radio label="Second" value="second" />
        <Radio label="Third" value="third" />
      </Radio.Group>
    </div>
  );
}
