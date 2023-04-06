import { useIdleTimer } from "react-idle-timer";
import React, { useState } from "react";

export const ReactIdleTimer = () => {
  // const [sessionTimer, setSessionTimer] = useState(2);
  const sessionTimer = 2;
  const [type, setType] = useState(null);

  const SessionPresence = (presence) => {
    // Handle state changes in one function
    setType(presence.type);
  };
  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
    // console.log(Session);
  };
  // eslint-disable-next-line
  const Session = useIdleTimer({
    onIdle,
    onPresenceChange: SessionPresence,
    timeout: 1000 * sessionTimer,
  });

  return (
    <div>
      react-idle-timer
      <div>
        {sessionTimer}sec presenceType : {type ? type : "active"}
      </div>
    </div>
  );
};

export default ReactIdleTimer;
