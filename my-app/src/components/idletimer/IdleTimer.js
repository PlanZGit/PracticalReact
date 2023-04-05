import { useIdleTimer } from "react-idle-timer";

export const App = () => {
  const onPresenceChange = (presence) => {
    // Handle state changes in one function
  };

  const onPrompt = () => {
    // Fire a Modal Prompt
  };

  const onIdle = () => {
    // Close Modal Prompt
    // Do some idle action like log out your user
  };

  const onActive = (event) => {
    // Close Modal Prompt
    // Do some active action
  };

  const onAction = (event) => {
    // Do something when a user triggers a watched event
  };

  const {
    start,
    reset,
    activate,
    pause,
    resume,
    isIdle,
    isPrompted,
    isLeader,
    isLastActiveTab,
    getTabId,
    getRemainingTime,
    getElapsedTime,
    getLastIdleTime,
    getLastActiveTime,
    getIdleTime,
    getTotalIdleTime,
    getActiveTime,
    getTotalActiveTime,
  } = useIdleTimer({
    onPresenceChange,
    onPrompt,
    onIdle,
    onActive,
    onAction,
    timeout: 1000 * 60 * 20,
    promptBeforeIdle: 0,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mousewheel",
      "mousedown",
      "touchstart",
      "touchmove",
      "MSPointerDown",
      "MSPointerMove",
      "visibilitychange",
      "focus",
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    name: "idle-timer",
    syncTimers: 0,
    leaderElection: false,
  });
  return <HomePage />;
};
