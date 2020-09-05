import React, { Fragment } from "react";
import Moment from "react-moment";

const Clock = (props) => {
  console.log(props);
  const realTime = () => {
    return props.toLocaleTimeString();
  };
  setInterval(realTime, 1000);

  return (
    <Fragment>
      <h1>{props.toLocaleTimeString()}</h1>
    </Fragment>
  );
};

export default Clock;
