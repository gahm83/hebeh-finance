'use client'
import { useState } from "react";
import classNames from "classnames";
// import ReCAPTCHA from "react-google-recaptcha";

const useConfirm = (title, message) => {
  const [promise, setPromise] = useState(null);
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

  const ConfirmationDialog = () => (
    <section className={`fixed ${promise === null ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} bg-[#051b38] bg-opacity-95 text-white w-screen h-screen z-20`}>
    {/* <ReCAPTCHA
          style={{ display: "inline-block" }}
          theme="dark"
          ref={this._reCaptchaRef}
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={this.handleChange}
          // asyncScriptOnLoad={this.asyncScriptOnLoad}
        /> */}
    </section>
  );
  return [ConfirmationDialog, confirm];
}

export default useConfirm;

