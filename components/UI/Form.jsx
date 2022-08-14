import React from "react";
import classes from "../../styles/form.module.css";
import emailjs from "emailjs-com"

export default function Form(){

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'default', e.target, 'tcG-VWkou54ax-RVV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    // e.target.reset
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="from_name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" name="user_email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" name="message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

