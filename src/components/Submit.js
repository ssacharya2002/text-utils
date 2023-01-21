import React from "react";

export default function Submit(props) {
  return (
    <>

        <button
          onClick={props.onClick}
          type="button"
          className="btn btn-primary space text-center mx-2"
        >
          {props.name}
        </button>

    </>
  );
}
