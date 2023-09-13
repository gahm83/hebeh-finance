'use client'
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const useConfirm = (title, message) => {

  
  const [promise, setPromise] = useState(null);
  const captchaRef = useRef(null);
  
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

  const onChange = async () => {
    const token = captchaRef?.current?.getValue();
    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Access-Control-Allow-Origin': '127.0.0.0'
          },
        }
      );
      const captchaValidation = await response.json();
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        // Replace this with the API that will save the data received
        // to your backend
        // await sleep();
        // Return 200 if everything is successful
        // return res.status(200).send("OK");
        handleConfirm();
      }

      // return res.status(422).json({
      //   message: "Unproccesable request, Invalid captcha code",
      // });
    } catch (error) {
      console.log(error);
      // return res.status(422).json({ message: "Something went wrong" });
    }
  }

  const ConfirmationDialog = () => (
    <section className={`fixed ${promise === null ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} bg-[#051b38] bg-opacity-95 text-white w-screen h-screen z-20`}>
      <ReCAPTCHA
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={onChange}
        ref={captchaRef}
      />
      <div className="flex space-x-3">
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </section>
  );
  return [ConfirmationDialog, confirm];
}

export default useConfirm;

