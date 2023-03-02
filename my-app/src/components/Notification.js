import React, { useState } from "react";
import { ImMusic } from "react-icons/im";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  const toastId = React.useRef(null);
  const [theme, setTheme] = useState("colored");
  const [type, setType] = useState("default");

  //override ToastContainer setting
  const notify = () => {
    toastId.current = toast("🦄 Wow so easy!");
  };
  const notifyCustomIcon = () => {
    toastId.current = toast("Icon notification!", {
      icon: <ImMusic size="50px" />,
    });
  };

  const dismiss = () => toast.dismiss(toastId.current);
  const dismissAll = () => toast.dismiss();
  return (
    <div>
      <select onChange={(e) => setTheme(e.target.value)}>
        <optgroup label="Theme">
          <option value="colored" defaultValue>
            colored
          </option>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </optgroup>
      </select>

      <button onClick={notify}>Notify!</button>
      <button onClick={notifyCustomIcon}>Notify! Custom Icon</button>
      <button onClick={dismiss}>Dismiss</button>
      <button onClick={dismissAll}>Dismiss All</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}

export default Notification;
