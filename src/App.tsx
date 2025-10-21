import { Fragment } from "react/jsx-runtime";
import Header from "./Components/Header";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [checkedCurrent, setCheckedCurrent] = useState(false);
  const [checkedCurrentEnd, setCheckedCurrentEnd] = useState(false);
  const [checked, setChecked] = useState(false);

  const check = (e: any) => {
    if (e.target.checked) {
      console.log("Checked");
    }

    setCheckedCurrent((current) => !current);
  };

  const checkDone = (e: any) => {
    if (e.target.checked) {
      console.log("Checked");
    }

    setChecked((current) => !current);
  };

  const checkDoneEnd = (e: any) => {
    if (e.target.checked) {
      console.log("Checked");
    }

    setCheckedCurrentEnd((current) => !current);
  };

  return (
    <Fragment>
      <Header name="Completed Todo List" />

      <div className="container">
        <h2>Step 1:</h2>
        <h2 id="completed">Are Dishes Done?</h2>
        <input type="checkbox" onChange={check} id="typed" />

        {checkedCurrent && <h3>Done..</h3>}
      </div>

      <hr />

      <div className="container">
        <h2>Step 2: </h2>
        <h2 id="completed">Did Take Shower?</h2>
        <input type="checkbox" onChange={checkDone} id="typed" />
        {checked && <h3>Done..</h3>}
      </div>
      <hr />

      <div className="container">
        <h2>Step 3: </h2>
        <h2 id="completed">Did You Do Laundry?</h2>
        <input type="checkbox" onChange={checkDoneEnd} id="typed" />

        {checkedCurrentEnd && <h3>Done..</h3>}
      </div>
      <hr />
    </Fragment>
  );
}
