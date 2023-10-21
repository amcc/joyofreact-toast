import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [submittedMessages, setSubmittedMessages] = React.useState([]);

  useKeydown("Escape", removeAllToasts);

  function addToast(message, notice) {
    setSubmittedMessages([
      ...submittedMessages,
      {
        key: crypto.randomUUID(),
        message,
        notice,
      },
    ]);
  }

  function dismissToast(key) {
    setSubmittedMessages(
      submittedMessages.filter((message) => message.key !== key)
    );
  }

  function removeAllToasts() {
    setSubmittedMessages([]);
  }

  return (
    <ToastContext.Provider
      value={{ submittedMessages, addToast, dismissToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
