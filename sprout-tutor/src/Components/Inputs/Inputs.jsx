import React from "react";
import Styles from "./input.module.css";

function Inputs({ name }) {
  return (
    <form>
      <label className="font-semibold text-base leading-6 text-slate-500 font-sans">
        {name}
      </label>
    </form>
  );
}

export default Inputs;
