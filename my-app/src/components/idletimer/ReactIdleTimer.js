import { useIdleTimer } from "react-idle-timer";
import React, { useState } from "react";
import CountUp, { useCountUp } from "react-countup";

export const ReactIdleTimer = () => {
  const [sessionTimer, setSessionTimer] = useState(2);
  const [type, setType] = useState(null);
  const [closing, setClosing] = useState(null);

  const SessionPresence = (presence) => {
    // Handle state changes in one function
    setType(presence.type);
  };
  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
  };
  const Session = useIdleTimer({
    onIdle,
    onPresenceChange: SessionPresence,
    timeout: 1000 * sessionTimer,
  });

  return (
    <div>
      <div>
        {sessionTimer}sec presenceType : {type ? type : "active"}
      </div>
    </div>
  );
};

export default ReactIdleTimer;
