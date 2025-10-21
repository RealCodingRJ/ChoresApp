import { Fragment } from "react/jsx-runtime";
import Header from "./Components/Header";
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <Header name="Completed Todo List" />

      <div className="container">
        <h2>Step 1:</h2>
        <h2 id="completed">Are Dishes Done?</h2>
        <input type="checkbox" id="typed" />
      </div>

      <hr />

      <div className="container">
        <h2>Step 2: </h2>
        <h2 id="completed">Did Take Shower?</h2>
        <input type="checkbox" id="typed" />
      </div>
      <hr />

      <div className="container">
        <h2>Step 3: </h2>
        <h2 id="completed">Did You Do Laundry?</h2>
        <input type="checkbox" id="typed" />
      </div>
      <hr />
    </Fragment>
  );
}
