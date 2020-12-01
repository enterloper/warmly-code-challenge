import React from "react";
import DropDownInput from "./Components/DropDownInput";
import states from "./devData/states.json";
import zipCodes from "./devData/ATX-zipcodes.json";
import "./normalize.css";
import "./styles.css";

console.log(states);
export default function App() {
  // const [stateOptions, setStateOptions] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to Warmly</h1>
      <img
        alt="page"
        width="600"
        src="https://i.ibb.co/d2Jddbj/Screen-Shot-2020-11-17-at-10-03-47-PM.png"
      />
      <img
        alt="example"
        width="300"
        src="https://i.ibb.co/VqM30gg/Screen-Shot-2020-11-17-at-9-53-55-PM.png"
      />
      <img
        alt="example"
        width="300"
        src="https://i.ibb.co/yg139ZQ/Screen-Shot-2020-11-17-at-9-53-42-PM.png"
      />
      <section className="dropdown-section">
        <DropDownInput
          options={states}
          label="States"
          placeholder="Please choose a state"
        />
        <DropDownInput
          options={zipCodes}
          label="Zip"
          placeholder="Please choose a zip code"
        />
      </section>
    </div>
  );
}
