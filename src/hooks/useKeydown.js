import React from "react";

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    function removeMessages(event) {
      // console.log(event.code, key);
      if (event.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", removeMessages);
    return () => {
      window.removeEventListener("keydown", removeMessages);
    };
  }, [callback, key]);
};

export default useKeydown;
