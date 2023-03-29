import React, { useState, useRef } from "react";
import { ImMusic } from "react-icons/im";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification() {
  const toastId = React.useRef(null);
  const [theme, setTheme] = useState("colored");
  const [type, setType] = useState("default");
  const inputRef = useRef();

  const notify = (e) => {
    switch (type) {
      case "info": {
        toastId.current = toast.info("🦄 " + inputRef.current.value, {
          icon: e.target.id === "icon" ? <ImMusic size="50px" /> : false,
        });
        break;
      }
      case "success":
        toastId.current = toast.success("🦄 " + inputRef.current.value, {
          icon: e.target.id === "icon" ? <ImMusic size="50px" /> : false,
        });
        break;
      case "warning":
        toastId.current = toast.warning("🦄 " + inputRef.current.value, {
          icon: e.target.id === "icon" ? <ImMusic size="50px" /> : false,
        });
        break;
      case "error":
        toastId.current = toast.error("🦄 " + inputRef.current.value, {
          icon: e.target.id === "icon" ? <ImMusic size="50px" /> : false,
        });
        break;
      default:
        toastId.current = toast("🦄 " + inputRef.current.value, {
          icon: e.target.id === "icon" ? <ImMusic size="50px" /> : false,
        });
        break;
    }
  };

  const dismiss = () => toast.dismiss(toastId.current);
  const dismissAll = () => toast.dismiss();
  return (
    <div>
      <div>
        <input type="text" placeholder="Input" ref={inputRef}></input>
      </div>

      <button onClick={notify}>Notify!</button>
      <button onClick={notify} id="icon">
        Notify! Custom Icon
      </button>
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

      <div>
        <>Theme</>
        <select onChange={(e) => setTheme(e.target.value)}>
          <optgroup label="Theme">
            <option value="colored" defaultValue>
              colored
            </option>
            <option value="light">light</option>
            <option value="dark">dark</option>
          </optgroup>
        </select>
        <>Type:</>
        <select onChange={(e) => setType(e.target.value)}>
          <optgroup label="Type">
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="error">error</option>
            <option value="default" defaultValue>
              default
            </option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}

export default Notification;
