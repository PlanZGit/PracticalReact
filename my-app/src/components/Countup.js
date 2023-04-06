import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Countup = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
    startOnMount: false,
    decimals: 2,
  });
  return (
    <div>
      react-countup
      <div>
        <h1 ref={countUpRef}>0</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={() => update(2000)}>Update</button>
      </div>
      <div>
        <CountUp
          start={50}
          end={100}
          duration={10}
          separator=" "
          prefix="$"
          suffix="USD"
          decimals={2}
        />
      </div>
      Note: Use useCountUp hook to start/reset/pauseResume/update
      <br />
      Use component to setup a countup
    </div>
  );
};

export default Countup;
