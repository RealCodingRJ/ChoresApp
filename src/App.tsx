import { Fragment } from "react/jsx-runtime";
import Header from "./Components/Header";
import "./App.css";
import { useState } from "react";
import getClient from "../DB/db";

export default function App() {
  const [checkedCurrent, setCheckedCurrent] = useState(false);
  const [checkedCurrentEnd, setCheckedCurrentEnd] = useState(false);
  const [checked, setChecked] = useState(false);

  const check = (e: any) => {
    if (e.target.checked) {
      console.log("Checked");
    }

    setCheckedCurrent((current) => !current);
    getClient("Dishes are Done").then((e) => console.log(e));
  };

  const checkDone = (e: any) => {
    if (e.target.checked) {
      console.log("Dishes are Done");
    }

    setChecked((current) => !current);
    getClient("Shower is Done").then((e) => console.log(e));
  };

  const checkDoneEnd = (e: any) => {
    if (e.target.checked) {
      console.log("Checked");
    }

    setCheckedCurrentEnd((current) => !current);
    getClient("Laundry is Done").then((e) => console.log(e));
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
