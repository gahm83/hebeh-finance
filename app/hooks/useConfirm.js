'use client'
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const useConfirm = (title, message) => {

  
  const [promise, setPromise] = useState(null);
  const captchaRef = useRef(null);
  const token = captchaRef?.current?.getValue();
  
  const confirm = () => new Promise((resolve, reject) => {
    setPromise({ resolve });
  });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const onChange = () => {
    console.log()
  }

  const ConfirmationDialog = () => (
    <section className={`fixed ${promise === null ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} bg-[#051b38] bg-opacity-95 text-white w-screen h-screen z-20`}>
      {/* <ReCAPTCHA /> */}
      <div className="flex space-x-3">
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </section>
  );
  return [ConfirmationDialog, confirm];
}

export default useConfirm;

