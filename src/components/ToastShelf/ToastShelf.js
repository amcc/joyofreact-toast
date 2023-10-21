import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messages }) {
  const { submittedMessages, dismissToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {submittedMessages.map((message) => (
        <li key={message.key} className={styles.toastWrapper}>
          <Toast
            variant={message.notice}
            dismiss={dismissToast}
            toastKey={message.key}
          >
            {message.message}
          </Toast>
        </li>
      ))}

      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  );
}

export default ToastShelf;
