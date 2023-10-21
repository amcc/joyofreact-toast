import React from "react";
import ToastProvider from "../ToastProvider/ToastProvider";
import ToastPlayground from "../ToastPlayground";
import ToastShelf from "../ToastShelf/ToastShelf";
import Footer from "../Footer";

function App() {
  return (
    <ToastProvider>
      <ToastShelf />
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
