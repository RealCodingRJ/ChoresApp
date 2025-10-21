import { Fragment } from "react/jsx-runtime";

export default function Header(props: any) {
  return (
    <Fragment>
      <header
        style={{
          padding: "10px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#fff",
              fontFamily: "sans-serif",
              fontSize: "17px",
              fontWeight: "900",
              top: "-10px",
              position: "relative",
            }}
          >
            {props.name}
          </h2>
        </div>
      </header>
    </Fragment>
  );
}
